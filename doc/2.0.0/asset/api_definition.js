var ZephirApi = {"allClasses":{"PhalconPlus\\Facades\\AbstractFacade":{"type":"class","name":"PhalconPlus\\Facades\\AbstractFacade","shortname":"AbstractFacade"},"PhalconPlus\\Contracts\\ArrayOf":{"type":"interface","name":"PhalconPlus\\Contracts\\ArrayOf","shortname":"ArrayOf"},"PhalconPlus\\Contracts\\EmptyOrNot":{"type":"interface","name":"PhalconPlus\\Contracts\\EmptyOrNot","shortname":"EmptyOrNot"},"PhalconPlus\\Base\\ProtoBuffer":{"type":"class","name":"PhalconPlus\\Base\\ProtoBuffer","shortname":"ProtoBuffer"},"PhalconPlus\\Enum\\AbstractEnum":{"type":"class","name":"PhalconPlus\\Enum\\AbstractEnum","shortname":"AbstractEnum"},"PhalconPlus\\App\\Engine\\AbstractEngine":{"type":"class","name":"PhalconPlus\\App\\Engine\\AbstractEngine","shortname":"AbstractEngine"},"PhalconPlus\\Base\\Exception":{"type":"class","name":"PhalconPlus\\Base\\Exception","shortname":"Exception"},"PhalconPlus\\Contracts\\Stringer":{"type":"interface","name":"PhalconPlus\\Contracts\\Stringer","shortname":"Stringer"},"PhalconPlus\\Logger\\Processor\\AbstractProcessor":{"type":"class","name":"PhalconPlus\\Logger\\Processor\\AbstractProcessor","shortname":"AbstractProcessor"},"PhalconPlus\\Rpc\\Client\\AbstractClient":{"type":"class","name":"PhalconPlus\\Rpc\\Client\\AbstractClient","shortname":"AbstractClient"},"PhalconPlus\\Db\\UnitOfWork\\AbstractValue":{"type":"class","name":"PhalconPlus\\Db\\UnitOfWork\\AbstractValue","shortname":"AbstractValue"},"PhalconPlus\\Rpc\\AbstractYar":{"type":"class","name":"PhalconPlus\\Rpc\\AbstractYar","shortname":"AbstractYar"},"PhalconPlus\\Assert\\AssertionFailedException":{"type":"interface","name":"PhalconPlus\\Assert\\AssertionFailedException","shortname":"AssertionFailedException"},"PhalconPlus\\Base\\AbstractRequest":{"type":"class","name":"PhalconPlus\\Base\\AbstractRequest","shortname":"AbstractRequest"},"PhalconPlus\\Base\\AbstractResponse":{"type":"class","name":"PhalconPlus\\Base\\AbstractResponse","shortname":"AbstractResponse"},"PhalconPlus\\Contracts\\Auth\\Access\\ModelEvent":{"type":"interface","name":"PhalconPlus\\Contracts\\Auth\\Access\\ModelEvent","shortname":"ModelEvent"},"PhalconPlus\\Contracts\\Auth\\Policy":{"type":"interface","name":"PhalconPlus\\Contracts\\Auth\\Policy","shortname":"Policy"},"PhalconPlus\\Contracts\\Auth\\UserProvider":{"type":"interface","name":"PhalconPlus\\Contracts\\Auth\\UserProvider","shortname":"UserProvider"},"PhalconPlus\\Db\\Pdo\\AbstractMysql":{"type":"class","name":"PhalconPlus\\Db\\Pdo\\AbstractMysql","shortname":"AbstractMysql"},"PhalconPlus\\Rpc\\Server\\AbstractServer":{"type":"class","name":"PhalconPlus\\Rpc\\Server\\AbstractServer","shortname":"AbstractServer"},"PhalconPlus\\App\\App":{"type":"class","name":"PhalconPlus\\App\\App","shortname":"App"},"PhalconPlus\\App\\Engine\\Cli":{"type":"class","name":"PhalconPlus\\App\\Engine\\Cli","shortname":"Cli"},"PhalconPlus\\App\\Engine\\Srv":{"type":"class","name":"PhalconPlus\\App\\Engine\\Srv","shortname":"Srv"},"PhalconPlus\\App\\Engine\\Web":{"type":"class","name":"PhalconPlus\\App\\Engine\\Web","shortname":"Web"},"PhalconPlus\\App\\Module\\AbstractModule":{"type":"class","name":"PhalconPlus\\App\\Module\\AbstractModule","shortname":"AbstractModule"},"PhalconPlus\\App\\Module\\ModuleDef":{"type":"class","name":"PhalconPlus\\App\\Module\\ModuleDef","shortname":"ModuleDef"},"PhalconPlus\\Assert\\Assertion":{"type":"class","name":"PhalconPlus\\Assert\\Assertion","shortname":"Assertion"},"PhalconPlus\\Assert\\InvalidArgumentException":{"type":"class","name":"PhalconPlus\\Assert\\InvalidArgumentException","shortname":"InvalidArgumentException"},"PhalconPlus\\Auth\\Exception":{"type":"class","name":"PhalconPlus\\Auth\\Exception","shortname":"Exception"},"PhalconPlus\\Auth\\Model":{"type":"class","name":"PhalconPlus\\Auth\\Model","shortname":"Model"},"PhalconPlus\\Auth\\Policy":{"type":"class","name":"PhalconPlus\\Auth\\Policy","shortname":"Policy"},"PhalconPlus\\Auth\\UserProvider":{"type":"class","name":"PhalconPlus\\Auth\\UserProvider","shortname":"UserProvider"},"PhalconPlus\\Base\\Model":{"type":"class","name":"PhalconPlus\\Base\\Model","shortname":"Model"},"PhalconPlus\\Base\\Pagable":{"type":"class","name":"PhalconPlus\\Base\\Pagable","shortname":"Pagable"},"PhalconPlus\\Base\\Page":{"type":"class","name":"PhalconPlus\\Base\\Page","shortname":"Page"},"PhalconPlus\\Base\\ProtoOrderBy":{"type":"class","name":"PhalconPlus\\Base\\ProtoOrderBy","shortname":"ProtoOrderBy"},"PhalconPlus\\Base\\Service":{"type":"class","name":"PhalconPlus\\Base\\Service","shortname":"Service"},"PhalconPlus\\Base\\SimpleRequest":{"type":"class","name":"PhalconPlus\\Base\\SimpleRequest","shortname":"SimpleRequest"},"PhalconPlus\\Base\\SimpleResponse":{"type":"class","name":"PhalconPlus\\Base\\SimpleResponse","shortname":"SimpleResponse"},"PhalconPlus\\Bootstrap":{"type":"class","name":"PhalconPlus\\Bootstrap","shortname":"Bootstrap"},"PhalconPlus\\Contracts\\Auth\\Access\\Authorizable":{"type":"interface","name":"PhalconPlus\\Contracts\\Auth\\Access\\Authorizable","shortname":"Authorizable"},"PhalconPlus\\Contracts\\Auth\\Access\\DispatchEvent":{"type":"interface","name":"PhalconPlus\\Contracts\\Auth\\Access\\DispatchEvent","shortname":"DispatchEvent"},"PhalconPlus\\Contracts\\Auth\\Access\\ResourceAware":{"type":"interface","name":"PhalconPlus\\Contracts\\Auth\\Access\\ResourceAware","shortname":"ResourceAware"},"PhalconPlus\\Contracts\\Auth\\Access\\RouterEvent":{"type":"interface","name":"PhalconPlus\\Contracts\\Auth\\Access\\RouterEvent","shortname":"RouterEvent"},"PhalconPlus\\Contracts\\Dump":{"type":"interface","name":"PhalconPlus\\Contracts\\Dump","shortname":"Dump"},"PhalconPlus\\Contracts\\EventAttachable":{"type":"interface","name":"PhalconPlus\\Contracts\\EventAttachable","shortname":"EventAttachable"},"PhalconPlus\\Contracts\\Invoke":{"type":"interface","name":"PhalconPlus\\Contracts\\Invoke","shortname":"Invoke"},"PhalconPlus\\Curl\\Curl":{"type":"class","name":"PhalconPlus\\Curl\\Curl","shortname":"Curl"},"PhalconPlus\\Curl\\Exception":{"type":"class","name":"PhalconPlus\\Curl\\Exception","shortname":"Exception"},"PhalconPlus\\Curl\\Request":{"type":"class","name":"PhalconPlus\\Curl\\Request","shortname":"Request"},"PhalconPlus\\Curl\\Response":{"type":"class","name":"PhalconPlus\\Curl\\Response","shortname":"Response"},"PhalconPlus\\Db\\Mysql":{"type":"class","name":"PhalconPlus\\Db\\Mysql","shortname":"Mysql"},"PhalconPlus\\Db\\Pdo\\Mysql":{"type":"class","name":"PhalconPlus\\Db\\Pdo\\Mysql","shortname":"Mysql"},"PhalconPlus\\Db\\UnitOfWork":{"type":"class","name":"PhalconPlus\\Db\\UnitOfWork","shortname":"UnitOfWork"},"PhalconPlus\\Db\\UnitOfWork\\Field":{"type":"class","name":"PhalconPlus\\Db\\UnitOfWork\\Field","shortname":"Field"},"PhalconPlus\\Db\\UnitOfWork\\LastInsertId":{"type":"class","name":"PhalconPlus\\Db\\UnitOfWork\\LastInsertId","shortname":"LastInsertId"},"PhalconPlus\\Enum\\AssertionCode":{"type":"class","name":"PhalconPlus\\Enum\\AssertionCode","shortname":"AssertionCode"},"PhalconPlus\\Enum\\Exception":{"type":"class","name":"PhalconPlus\\Enum\\Exception","shortname":"Exception"},"PhalconPlus\\Enum\\Facade":{"type":"class","name":"PhalconPlus\\Enum\\Facade","shortname":"Facade"},"PhalconPlus\\Enum\\OrderByDirection":{"type":"class","name":"PhalconPlus\\Enum\\OrderByDirection","shortname":"OrderByDirection"},"PhalconPlus\\Enum\\RunEnv":{"type":"class","name":"PhalconPlus\\Enum\\RunEnv","shortname":"RunEnv"},"PhalconPlus\\Enum\\RunMode":{"type":"class","name":"PhalconPlus\\Enum\\RunMode","shortname":"RunMode"},"PhalconPlus\\Enum\\Sys":{"type":"class","name":"PhalconPlus\\Enum\\Sys","shortname":"Sys"},"PhalconPlus\\Facades\\Acl":{"type":"class","name":"PhalconPlus\\Facades\\Acl","shortname":"Acl"},"PhalconPlus\\Facades\\Annotations":{"type":"class","name":"PhalconPlus\\Facades\\Annotations","shortname":"Annotations"},"PhalconPlus\\Facades\\App":{"type":"class","name":"PhalconPlus\\Facades\\App","shortname":"App"},"PhalconPlus\\Facades\\AppEngine":{"type":"class","name":"PhalconPlus\\Facades\\AppEngine","shortname":"AppEngine"},"PhalconPlus\\Facades\\AppModule":{"type":"class","name":"PhalconPlus\\Facades\\AppModule","shortname":"AppModule"},"PhalconPlus\\Facades\\Assets":{"type":"class","name":"PhalconPlus\\Facades\\Assets","shortname":"Assets"},"PhalconPlus\\Facades\\Config":{"type":"class","name":"PhalconPlus\\Facades\\Config","shortname":"Config"},"PhalconPlus\\Facades\\Cookies":{"type":"class","name":"PhalconPlus\\Facades\\Cookies","shortname":"Cookies"},"PhalconPlus\\Facades\\Crypt":{"type":"class","name":"PhalconPlus\\Facades\\Crypt","shortname":"Crypt"},"PhalconPlus\\Facades\\Di":{"type":"class","name":"PhalconPlus\\Facades\\Di","shortname":"Di"},"PhalconPlus\\Facades\\Dispatcher":{"type":"class","name":"PhalconPlus\\Facades\\Dispatcher","shortname":"Dispatcher"},"PhalconPlus\\Facades\\Escaper":{"type":"class","name":"PhalconPlus\\Facades\\Escaper","shortname":"Escaper"},"PhalconPlus\\Facades\\EventsManager":{"type":"class","name":"PhalconPlus\\Facades\\EventsManager","shortname":"EventsManager"},"PhalconPlus\\Facades\\Filter":{"type":"class","name":"PhalconPlus\\Facades\\Filter","shortname":"Filter"},"PhalconPlus\\Facades\\Flash":{"type":"class","name":"PhalconPlus\\Facades\\Flash","shortname":"Flash"},"PhalconPlus\\Facades\\FlashSession":{"type":"class","name":"PhalconPlus\\Facades\\FlashSession","shortname":"FlashSession"},"PhalconPlus\\Facades\\Log":{"type":"class","name":"PhalconPlus\\Facades\\Log","shortname":"Log"},"PhalconPlus\\Facades\\ModelsCache":{"type":"class","name":"PhalconPlus\\Facades\\ModelsCache","shortname":"ModelsCache"},"PhalconPlus\\Facades\\ModelsManager":{"type":"class","name":"PhalconPlus\\Facades\\ModelsManager","shortname":"ModelsManager"},"PhalconPlus\\Facades\\ModelsMetadata":{"type":"class","name":"PhalconPlus\\Facades\\ModelsMetadata","shortname":"ModelsMetadata"},"PhalconPlus\\Facades\\Redis":{"type":"class","name":"PhalconPlus\\Facades\\Redis","shortname":"Redis"},"PhalconPlus\\Facades\\Request":{"type":"class","name":"PhalconPlus\\Facades\\Request","shortname":"Request"},"PhalconPlus\\Facades\\Response":{"type":"class","name":"PhalconPlus\\Facades\\Response","shortname":"Response"},"PhalconPlus\\Facades\\Router":{"type":"class","name":"PhalconPlus\\Facades\\Router","shortname":"Router"},"PhalconPlus\\Facades\\Security":{"type":"class","name":"PhalconPlus\\Facades\\Security","shortname":"Security"},"PhalconPlus\\Facades\\Service":{"type":"class","name":"PhalconPlus\\Facades\\Service","shortname":"Service"},"PhalconPlus\\Facades\\Session":{"type":"class","name":"PhalconPlus\\Facades\\Session","shortname":"Session"},"PhalconPlus\\Facades\\SessionBag":{"type":"class","name":"PhalconPlus\\Facades\\SessionBag","shortname":"SessionBag"},"PhalconPlus\\Facades\\Tag":{"type":"class","name":"PhalconPlus\\Facades\\Tag","shortname":"Tag"},"PhalconPlus\\Facades\\TransactionManager":{"type":"class","name":"PhalconPlus\\Facades\\TransactionManager","shortname":"TransactionManager"},"PhalconPlus\\Facades\\Url":{"type":"class","name":"PhalconPlus\\Facades\\Url","shortname":"Url"},"PhalconPlus\\Facades\\User":{"type":"class","name":"PhalconPlus\\Facades\\User","shortname":"User"},"PhalconPlus\\Facades\\View":{"type":"class","name":"PhalconPlus\\Facades\\View","shortname":"View"},"PhalconPlus\\FeatureTest\\SplObjectStorageTest":{"type":"class","name":"PhalconPlus\\FeatureTest\\SplObjectStorageTest","shortname":"SplObjectStorageTest"},"PhalconPlus\\Helper\\Arr":{"type":"class","name":"PhalconPlus\\Helper\\Arr","shortname":"Arr"},"PhalconPlus\\Helper\\Exception":{"type":"class","name":"PhalconPlus\\Helper\\Exception","shortname":"Exception"},"PhalconPlus\\Helper\\Ns":{"type":"class","name":"PhalconPlus\\Helper\\Ns","shortname":"Ns"},"PhalconPlus\\Helper\\Str":{"type":"class","name":"PhalconPlus\\Helper\\Str","shortname":"Str"},"PhalconPlus\\Helper\\Variable":{"type":"class","name":"PhalconPlus\\Helper\\Variable","shortname":"Variable"},"PhalconPlus\\Http\\NonPsrRequest":{"type":"class","name":"PhalconPlus\\Http\\NonPsrRequest","shortname":"NonPsrRequest"},"PhalconPlus\\Http\\NonPsrResponse":{"type":"class","name":"PhalconPlus\\Http\\NonPsrResponse","shortname":"NonPsrResponse"},"PhalconPlus\\Http\\PsrResponseFactory":{"type":"class","name":"PhalconPlus\\Http\\PsrResponseFactory","shortname":"PsrResponseFactory"},"PhalconPlus\\Logger\\MultiPleFile":{"type":"class","name":"PhalconPlus\\Logger\\MultiPleFile","shortname":"MultiPleFile"},"PhalconPlus\\Logger\\Processor\\LogId":{"type":"class","name":"PhalconPlus\\Logger\\Processor\\LogId","shortname":"LogId"},"PhalconPlus\\Logger\\Processor\\Msec":{"type":"class","name":"PhalconPlus\\Logger\\Processor\\Msec","shortname":"Msec"},"PhalconPlus\\Logger\\Processor\\Trace":{"type":"class","name":"PhalconPlus\\Logger\\Processor\\Trace","shortname":"Trace"},"PhalconPlus\\Mvc\\PsrApplication":{"type":"class","name":"PhalconPlus\\Mvc\\PsrApplication","shortname":"PsrApplication"},"PhalconPlus\\Rpc\\Client\\Adapter\\Curl":{"type":"class","name":"PhalconPlus\\Rpc\\Client\\Adapter\\Curl","shortname":"Curl"},"PhalconPlus\\Rpc\\Client\\Adapter\\Local":{"type":"class","name":"PhalconPlus\\Rpc\\Client\\Adapter\\Local","shortname":"Local"},"PhalconPlus\\Rpc\\Client\\Adapter\\Remote":{"type":"class","name":"PhalconPlus\\Rpc\\Client\\Adapter\\Remote","shortname":"Remote"},"PhalconPlus\\Rpc\\Server\\SimpleServer":{"type":"class","name":"PhalconPlus\\Rpc\\Server\\SimpleServer","shortname":"SimpleServer"},"PhalconPlus\\Rpc\\Yar":{"type":"class","name":"PhalconPlus\\Rpc\\Yar","shortname":"Yar"},"PhalconPlus\\Rpc\\YarServerWrapper":{"type":"class","name":"PhalconPlus\\Rpc\\YarServerWrapper","shortname":"YarServerWrapper"},"PhalconPlus\\Volt\\Extension\\PhpFunction":{"type":"class","name":"PhalconPlus\\Volt\\Extension\\PhpFunction","shortname":"PhpFunction"}},"allNamespaces":{"PhalconPlus":{"name":"PhalconPlus","shortName":"PhalconPlus","parentName":"","classes":["PhalconPlus\\Bootstrap"],"namespaces":["PhalconPlus\\Facades","PhalconPlus\\Contracts","PhalconPlus\\Base","PhalconPlus\\Enum","PhalconPlus\\App","PhalconPlus\\Logger","PhalconPlus\\Rpc","PhalconPlus\\Db","PhalconPlus\\Assert","PhalconPlus\\Auth","PhalconPlus\\Curl","PhalconPlus\\FeatureTest","PhalconPlus\\Helper","PhalconPlus\\Http","PhalconPlus\\Mvc","PhalconPlus\\Volt"]},"PhalconPlus\\Facades":{"name":"PhalconPlus\\Facades","shortName":"Facades","parentName":"PhalconPlus","classes":["PhalconPlus\\Facades\\AbstractFacade","PhalconPlus\\Facades\\Acl","PhalconPlus\\Facades\\Annotations","PhalconPlus\\Facades\\App","PhalconPlus\\Facades\\AppEngine","PhalconPlus\\Facades\\AppModule","PhalconPlus\\Facades\\Assets","PhalconPlus\\Facades\\Config","PhalconPlus\\Facades\\Cookies","PhalconPlus\\Facades\\Crypt","PhalconPlus\\Facades\\Di","PhalconPlus\\Facades\\Dispatcher","PhalconPlus\\Facades\\Escaper","PhalconPlus\\Facades\\EventsManager","PhalconPlus\\Facades\\Filter","PhalconPlus\\Facades\\Flash","PhalconPlus\\Facades\\FlashSession","PhalconPlus\\Facades\\Log","PhalconPlus\\Facades\\ModelsCache","PhalconPlus\\Facades\\ModelsManager","PhalconPlus\\Facades\\ModelsMetadata","PhalconPlus\\Facades\\Redis","PhalconPlus\\Facades\\Request","PhalconPlus\\Facades\\Response","PhalconPlus\\Facades\\Router","PhalconPlus\\Facades\\Security","PhalconPlus\\Facades\\Service","PhalconPlus\\Facades\\Session","PhalconPlus\\Facades\\SessionBag","PhalconPlus\\Facades\\Tag","PhalconPlus\\Facades\\TransactionManager","PhalconPlus\\Facades\\Url","PhalconPlus\\Facades\\User","PhalconPlus\\Facades\\View"],"namespaces":[]},"PhalconPlus\\Contracts":{"name":"PhalconPlus\\Contracts","shortName":"Contracts","parentName":"PhalconPlus","classes":["PhalconPlus\\Contracts\\ArrayOf","PhalconPlus\\Contracts\\EmptyOrNot","PhalconPlus\\Contracts\\Stringer","PhalconPlus\\Contracts\\Dump","PhalconPlus\\Contracts\\EventAttachable","PhalconPlus\\Contracts\\Invoke"],"namespaces":["PhalconPlus\\Contracts\\Auth"]},"PhalconPlus\\Base":{"name":"PhalconPlus\\Base","shortName":"Base","parentName":"PhalconPlus","classes":["PhalconPlus\\Base\\ProtoBuffer","PhalconPlus\\Base\\Exception","PhalconPlus\\Base\\AbstractRequest","PhalconPlus\\Base\\AbstractResponse","PhalconPlus\\Base\\Model","PhalconPlus\\Base\\Pagable","PhalconPlus\\Base\\Page","PhalconPlus\\Base\\ProtoOrderBy","PhalconPlus\\Base\\Service","PhalconPlus\\Base\\SimpleRequest","PhalconPlus\\Base\\SimpleResponse"],"namespaces":[]},"PhalconPlus\\Enum":{"name":"PhalconPlus\\Enum","shortName":"Enum","parentName":"PhalconPlus","classes":["PhalconPlus\\Enum\\AbstractEnum","PhalconPlus\\Enum\\AssertionCode","PhalconPlus\\Enum\\Exception","PhalconPlus\\Enum\\Facade","PhalconPlus\\Enum\\OrderByDirection","PhalconPlus\\Enum\\RunEnv","PhalconPlus\\Enum\\RunMode","PhalconPlus\\Enum\\Sys"],"namespaces":[]},"PhalconPlus\\App":{"name":"PhalconPlus\\App","shortName":"App","parentName":"PhalconPlus","classes":["PhalconPlus\\App\\App"],"namespaces":["PhalconPlus\\App\\Engine","PhalconPlus\\App\\Module"]},"PhalconPlus\\App\\Engine":{"name":"PhalconPlus\\App\\Engine","shortName":"Engine","parentName":"PhalconPlus\\App","classes":["PhalconPlus\\App\\Engine\\AbstractEngine","PhalconPlus\\App\\Engine\\Cli","PhalconPlus\\App\\Engine\\Srv","PhalconPlus\\App\\Engine\\Web"],"namespaces":[]},"PhalconPlus\\Logger":{"name":"PhalconPlus\\Logger","shortName":"Logger","parentName":"PhalconPlus","classes":["PhalconPlus\\Logger\\MultiPleFile"],"namespaces":["PhalconPlus\\Logger\\Processor"]},"PhalconPlus\\Logger\\Processor":{"name":"PhalconPlus\\Logger\\Processor","shortName":"Processor","parentName":"PhalconPlus\\Logger","classes":["PhalconPlus\\Logger\\Processor\\AbstractProcessor","PhalconPlus\\Logger\\Processor\\LogId","PhalconPlus\\Logger\\Processor\\Msec","PhalconPlus\\Logger\\Processor\\Trace"],"namespaces":[]},"PhalconPlus\\Rpc":{"name":"PhalconPlus\\Rpc","shortName":"Rpc","parentName":"PhalconPlus","classes":["PhalconPlus\\Rpc\\AbstractYar","PhalconPlus\\Rpc\\Yar","PhalconPlus\\Rpc\\YarServerWrapper"],"namespaces":["PhalconPlus\\Rpc\\Client","PhalconPlus\\Rpc\\Server"]},"PhalconPlus\\Rpc\\Client":{"name":"PhalconPlus\\Rpc\\Client","shortName":"Client","parentName":"PhalconPlus\\Rpc","classes":["PhalconPlus\\Rpc\\Client\\AbstractClient"],"namespaces":["PhalconPlus\\Rpc\\Client\\Adapter"]},"PhalconPlus\\Db":{"name":"PhalconPlus\\Db","shortName":"Db","parentName":"PhalconPlus","classes":["PhalconPlus\\Db\\Mysql","PhalconPlus\\Db\\UnitOfWork"],"namespaces":["PhalconPlus\\Db\\UnitOfWork","PhalconPlus\\Db\\Pdo"]},"PhalconPlus\\Db\\UnitOfWork":{"name":"PhalconPlus\\Db\\UnitOfWork","shortName":"UnitOfWork","parentName":"PhalconPlus\\Db","classes":["PhalconPlus\\Db\\UnitOfWork\\AbstractValue","PhalconPlus\\Db\\UnitOfWork\\Field","PhalconPlus\\Db\\UnitOfWork\\LastInsertId"],"namespaces":[]},"PhalconPlus\\Assert":{"name":"PhalconPlus\\Assert","shortName":"Assert","parentName":"PhalconPlus","classes":["PhalconPlus\\Assert\\AssertionFailedException","PhalconPlus\\Assert\\Assertion","PhalconPlus\\Assert\\InvalidArgumentException"],"namespaces":[]},"PhalconPlus\\Contracts\\Auth":{"name":"PhalconPlus\\Contracts\\Auth","shortName":"Auth","parentName":"PhalconPlus\\Contracts","classes":["PhalconPlus\\Contracts\\Auth\\Policy","PhalconPlus\\Contracts\\Auth\\UserProvider"],"namespaces":["PhalconPlus\\Contracts\\Auth\\Access"]},"PhalconPlus\\Contracts\\Auth\\Access":{"name":"PhalconPlus\\Contracts\\Auth\\Access","shortName":"Access","parentName":"PhalconPlus\\Contracts\\Auth","classes":["PhalconPlus\\Contracts\\Auth\\Access\\ModelEvent","PhalconPlus\\Contracts\\Auth\\Access\\Authorizable","PhalconPlus\\Contracts\\Auth\\Access\\DispatchEvent","PhalconPlus\\Contracts\\Auth\\Access\\ResourceAware","PhalconPlus\\Contracts\\Auth\\Access\\RouterEvent"],"namespaces":[]},"PhalconPlus\\Db\\Pdo":{"name":"PhalconPlus\\Db\\Pdo","shortName":"Pdo","parentName":"PhalconPlus\\Db","classes":["PhalconPlus\\Db\\Pdo\\AbstractMysql","PhalconPlus\\Db\\Pdo\\Mysql"],"namespaces":[]},"PhalconPlus\\Rpc\\Server":{"name":"PhalconPlus\\Rpc\\Server","shortName":"Server","parentName":"PhalconPlus\\Rpc","classes":["PhalconPlus\\Rpc\\Server\\AbstractServer","PhalconPlus\\Rpc\\Server\\SimpleServer"],"namespaces":[]},"PhalconPlus\\App\\Module":{"name":"PhalconPlus\\App\\Module","shortName":"Module","parentName":"PhalconPlus\\App","classes":["PhalconPlus\\App\\Module\\AbstractModule","PhalconPlus\\App\\Module\\ModuleDef"],"namespaces":[]},"PhalconPlus\\Auth":{"name":"PhalconPlus\\Auth","shortName":"Auth","parentName":"PhalconPlus","classes":["PhalconPlus\\Auth\\Exception","PhalconPlus\\Auth\\Model","PhalconPlus\\Auth\\Policy","PhalconPlus\\Auth\\UserProvider"],"namespaces":[]},"PhalconPlus\\Curl":{"name":"PhalconPlus\\Curl","shortName":"Curl","parentName":"PhalconPlus","classes":["PhalconPlus\\Curl\\Curl","PhalconPlus\\Curl\\Exception","PhalconPlus\\Curl\\Request","PhalconPlus\\Curl\\Response"],"namespaces":[]},"PhalconPlus\\FeatureTest":{"name":"PhalconPlus\\FeatureTest","shortName":"FeatureTest","parentName":"PhalconPlus","classes":["PhalconPlus\\FeatureTest\\SplObjectStorageTest"],"namespaces":[]},"PhalconPlus\\Helper":{"name":"PhalconPlus\\Helper","shortName":"Helper","parentName":"PhalconPlus","classes":["PhalconPlus\\Helper\\Arr","PhalconPlus\\Helper\\Exception","PhalconPlus\\Helper\\Ns","PhalconPlus\\Helper\\Str","PhalconPlus\\Helper\\Variable"],"namespaces":[]},"PhalconPlus\\Http":{"name":"PhalconPlus\\Http","shortName":"Http","parentName":"PhalconPlus","classes":["PhalconPlus\\Http\\NonPsrRequest","PhalconPlus\\Http\\NonPsrResponse","PhalconPlus\\Http\\PsrResponseFactory"],"namespaces":[]},"PhalconPlus\\Mvc":{"name":"PhalconPlus\\Mvc","shortName":"Mvc","parentName":"PhalconPlus","classes":["PhalconPlus\\Mvc\\PsrApplication"],"namespaces":[]},"PhalconPlus\\Rpc\\Client\\Adapter":{"name":"PhalconPlus\\Rpc\\Client\\Adapter","shortName":"Adapter","parentName":"PhalconPlus\\Rpc\\Client","classes":["PhalconPlus\\Rpc\\Client\\Adapter\\Curl","PhalconPlus\\Rpc\\Client\\Adapter\\Local","PhalconPlus\\Rpc\\Client\\Adapter\\Remote"],"namespaces":[]},"PhalconPlus\\Volt":{"name":"PhalconPlus\\Volt","shortName":"Volt","parentName":"PhalconPlus","classes":[],"namespaces":["PhalconPlus\\Volt\\Extension"]},"PhalconPlus\\Volt\\Extension":{"name":"PhalconPlus\\Volt\\Extension","shortName":"Extension","parentName":"PhalconPlus\\Volt","classes":["PhalconPlus\\Volt\\Extension\\PhpFunction"],"namespaces":[]}},"classes":[],"namespaces":["PhalconPlus"]};