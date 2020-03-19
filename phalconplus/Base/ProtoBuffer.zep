namespace PhalconPlus\Base;
use PhalconPlus\Base\Exception as BaseException;
use PhalconPlus\Assert\Assertion as Assert;

class ProtoBuffer implements \JsonSerializable, \ArrayAccess, \Countable, \IteratorAggregate
{
    public function __construct(var data = [])
    {
        Assert::isArray(data);
        this->softClone(data, true);
    }

    public function softClone(array data, boolean deep = false) -> <ProtoBuffer>
    {
        var key, val;
        for key, val in data {
            if deep === true { 
                this->__set(key, val);
            } else {
                if property_exists(this, key) {
                    this->__set(key, val);
                }
            }
        }
        return this;
    }

    public function __set(string! key, val)
    {
        var method, param, paramClass, paramClassRef, paramObj;
        let method = "set" . key->upperfirst();
        // error_log("Proto__set: " . key . ": " . var_export(val, true));
        if method_exists(this, method) {
            let param = new \ReflectionParameter([this, method], 0);
            if param->getClass() {
                // error_log("Proto__set: param class" . param->getClass());
                // error_log("Proto__set: value" . var_export(val, true));
                let paramClass = param->getClass()->getName();
                let paramClassRef = new \ReflectionClass(paramClass);
                // if is-a ProtoBuffer class
                if paramClassRef->isSubclassOf("\\PhalconPlus\\Base\\ProtoBuffer") {
                    let paramObj = paramClassRef->newInstance();
                    paramObj->softClone(val);
                    let val = paramObj;
                } else {
                    let paramObj = paramClassRef->newInstance(val);
                    let val = paramObj;
                }
            }
            return this->{method}(val);
        }

        // rule break: hard code
        if is_scalar(val) || is_null(val) || is_array(val) || (is_object(val) && val instanceof ProtoBuffer) {
            let this->{key} = val;
            return this;
        } else {
            throw new BaseException("Please add " . method . " in your class, complex-type vars are not allowed to assign directly");
        }
    }

    public function __isset(string! key)
    {
        var method;
        let method = "get" . key->upperfirst();
        if method_exists(this, method) {
            return true;
        }
        if property_exists(this, key) {
            return true;
        }
        return false;
    }

    public function __get(string! key)
    {
        var method;
        let method = "get" . key->upperfirst();

        if method_exists(this, method) {
            return this->{method}();
        }

        if property_exists(this, key) {
            return this->{key};
        }

        return null;
    }

    public function __unset(string! key) -> void
    {
        var method;
        let method = "unset" . key->upperfirst();

        if method_exists(this, method) {
            this->{method}();
        }

        if property_exists(this, key) {
            %{
                zephir_unset_property(this_ptr, Z_STRVAL(key));
            }%
        }

    }

    protected function getSelfVars() -> array
    {
        var objReflection = null;
        var vars = [], pros = [], pro = null;

        let objReflection = new \ReflectionObject(this);
        let pros = objReflection->getProperties();

        for pro in pros {
            pro->setAccessible(true);
            let vars[pro->getName()] = pro->getValue(this);
        }
        return vars;
    }

    public function jsonSerialize()
    {
        return this->toArray();
    }

    public function toArray(array data = [])
    {
        var pros = [], newPros = [];

        if empty data {
            let pros = this->getSelfVars();
        } else {
            let pros = data;
        }

        var key, val;
        for key, val in pros {
            if is_array(val) && !empty(val) {
                let newPros[key] = this->toArray(val);
            } elseif is_object(val) && method_exists(val, "toArray") {
                let newPros[key] = val->toArray();
            } elseif is_object(val) && method_exists(val, "__toString") {
                let newPros[key] = val->__toString();
            } else {
                let newPros[key] = val;
            }
        }

        return newPros;

        /* Zephir 暂时不支持 引用传递
        array_walk_recursive(pros, function(&property, key){
            if is_object(property) {
                let property = property->toArray();
            }
        });
        return pros;
        */
    }

    public function offsetSet(offset, value) -> void
    {
        Assert::isString(offset);
        this->__set(offset, value);
    }

    public function offsetExists(offset) -> bool
    {
        Assert::isString(offset);
        return this->__isset(offset);
    }

    public function offsetUnset(offset) -> void
    {
        Assert::isString(offset);
        this->__unset(offset);
    }

    public function offsetGet(offset) 
    {
        Assert::isString(offset);
        return this->__get(offset);
    }

    public function count() -> int
    {
        return count(this->getSelfVars());
    }

    public function isEmpty() -> boolean
    {
        return empty(this->getSelfVars());
    }

    public function getIterator() -> <\RecursiveArrayIterator>
    {
        return new \RecursiveArrayIterator(this->getSelfVars());
    }
}
