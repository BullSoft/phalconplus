
#ifdef HAVE_CONFIG_H
#include "../../ext_config.h"
#endif

#include <php.h>
#include "../../php_ext.h"
#include "../../ext.h"

#include <Zend/zend_operators.h>
#include <Zend/zend_exceptions.h>
#include <Zend/zend_interfaces.h>

#include "kernel/main.h"
#include "kernel/fcall.h"
#include "kernel/memory.h"
#include "kernel/operators.h"
#include "kernel/concat.h"
#include "kernel/exception.h"
#include "kernel/array.h"
#include "kernel/string.h"
#include "kernel/object.h"


/**
 *
 * @ref https://github.com/beberlei/assert
 */
ZEPHIR_INIT_CLASS(PhalconPlus_Assert_Assertion) {

	ZEPHIR_REGISTER_CLASS(PhalconPlus\\Assert, Assertion, phalconplus, assert_assertion, phalconplus_assert_assertion_method_entry, 0);

	return SUCCESS;

}

PHP_METHOD(PhalconPlus_Assert_Assertion, createException) {

	int ZEPHIR_LAST_CALL_STATUS;
	zval *constraints = NULL;
	zval *value, *message, *code, *propertyPath, *constraints_param = NULL;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 4, 1, &value, &message, &code, &propertyPath, &constraints_param);

	if (!constraints_param) {
		ZEPHIR_INIT_VAR(constraints);
		array_init(constraints);
	} else {
		zephir_get_arrval(constraints, constraints_param);
	}


	object_init_ex(return_value, phalconplus_assert_invalidargumentexception_ce);
	ZEPHIR_CALL_METHOD(NULL, return_value, "__construct", NULL, 1, message, code, propertyPath, value, constraints);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(PhalconPlus_Assert_Assertion, eq) {

	zval *_2;
	int ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *value, *value2, *message = NULL, *propertyPath = NULL, *v1 = NULL, *v2 = NULL, *_1 = NULL, *_3;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 2, &value, &value2, &message, &propertyPath);

	if (!message) {
		ZEPHIR_CPY_WRT(message, ZEPHIR_GLOBAL(global_null));
	} else {
		ZEPHIR_SEPARATE_PARAM(message);
	}
	if (!propertyPath) {
		propertyPath = ZEPHIR_GLOBAL(global_null);
	}


	if (!ZEPHIR_IS_EQUAL(value, value2)) {
		ZEPHIR_CALL_SELF(&v1, "stringify", &_0, 2, value);
		zephir_check_call_status();
		ZEPHIR_CALL_SELF(&v2, "stringify", &_0, 2, value2);
		zephir_check_call_status();
		if (Z_TYPE_P(message) == IS_NULL) {
			ZEPHIR_INIT_NVAR(message);
			ZEPHIR_CONCAT_SVSVS(message, "Value ", v1, " does not equal expected value ", v2, ".");
		}
		ZEPHIR_INIT_VAR(_2);
		zephir_create_array(_2, 1, 0 TSRMLS_CC);
		zephir_array_update_string(&_2, SL("expected"), &value2, PH_COPY | PH_SEPARATE);
		ZEPHIR_INIT_VAR(_3);
		ZVAL_LONG(_3, 34);
		ZEPHIR_CALL_STATIC(&_1, "createexception", NULL, 0, value, message, _3, propertyPath, _2);
		zephir_check_call_status();
		zephir_throw_exception_debug(_1, "phalconplus/Assert/Assertion.zep", 28 TSRMLS_CC);
		ZEPHIR_MM_RESTORE();
		return;
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(PhalconPlus_Assert_Assertion, same) {

	zval *_2;
	int ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *value, *value2, *message = NULL, *propertyPath = NULL, *v1 = NULL, *v2 = NULL, *_1 = NULL, *_3;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 2, &value, &value2, &message, &propertyPath);

	if (!message) {
		ZEPHIR_CPY_WRT(message, ZEPHIR_GLOBAL(global_null));
	} else {
		ZEPHIR_SEPARATE_PARAM(message);
	}
	if (!propertyPath) {
		propertyPath = ZEPHIR_GLOBAL(global_null);
	}


	if (!ZEPHIR_IS_IDENTICAL(value, value2)) {
		ZEPHIR_CALL_SELF(&v1, "stringify", &_0, 2, value);
		zephir_check_call_status();
		ZEPHIR_CALL_SELF(&v2, "stringify", &_0, 2, value2);
		zephir_check_call_status();
		if (Z_TYPE_P(message) == IS_NULL) {
			ZEPHIR_INIT_NVAR(message);
			ZEPHIR_CONCAT_SVSVS(message, "Value ", v1, " does not equal expected value ", v2, ".");
		}
		ZEPHIR_INIT_VAR(_2);
		zephir_create_array(_2, 1, 0 TSRMLS_CC);
		zephir_array_update_string(&_2, SL("expected"), &value2, PH_COPY | PH_SEPARATE);
		ZEPHIR_INIT_VAR(_3);
		ZVAL_LONG(_3, 33);
		ZEPHIR_CALL_STATIC(&_1, "createexception", NULL, 0, value, message, _3, propertyPath, _2);
		zephir_check_call_status();
		zephir_throw_exception_debug(_1, "phalconplus/Assert/Assertion.zep", 43 TSRMLS_CC);
		ZEPHIR_MM_RESTORE();
		return;
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(PhalconPlus_Assert_Assertion, notEmpty) {

	int ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *value, *message = NULL, *propertyPath = NULL, *v1 = NULL, *_1 = NULL, *_2;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 2, &value, &message, &propertyPath);

	if (!message) {
		ZEPHIR_CPY_WRT(message, ZEPHIR_GLOBAL(global_null));
	} else {
		ZEPHIR_SEPARATE_PARAM(message);
	}
	if (!propertyPath) {
		propertyPath = ZEPHIR_GLOBAL(global_null);
	}


	if (ZEPHIR_IS_EMPTY(value)) {
		ZEPHIR_CALL_SELF(&v1, "stringify", &_0, 2, value);
		zephir_check_call_status();
		if (Z_TYPE_P(message) == IS_NULL) {
			ZEPHIR_INIT_NVAR(message);
			ZEPHIR_CONCAT_SVS(message, "Value ", v1, " is empty, but non empty value was expected.");
		}
		ZEPHIR_INIT_VAR(_2);
		ZVAL_LONG(_2, 14);
		ZEPHIR_CALL_STATIC(&_1, "createexception", NULL, 0, value, message, _2, propertyPath);
		zephir_check_call_status();
		zephir_throw_exception_debug(_1, "phalconplus/Assert/Assertion.zep", 56 TSRMLS_CC);
		ZEPHIR_MM_RESTORE();
		return;
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(PhalconPlus_Assert_Assertion, notNull) {

	int ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *value, *message = NULL, *propertyPath = NULL, *v1 = NULL, *_1 = NULL, *_2;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 2, &value, &message, &propertyPath);

	if (!message) {
		ZEPHIR_CPY_WRT(message, ZEPHIR_GLOBAL(global_null));
	} else {
		ZEPHIR_SEPARATE_PARAM(message);
	}
	if (!propertyPath) {
		propertyPath = ZEPHIR_GLOBAL(global_null);
	}


	if (Z_TYPE_P(value) == IS_NULL) {
		ZEPHIR_CALL_SELF(&v1, "stringify", &_0, 2, value);
		zephir_check_call_status();
		if (Z_TYPE_P(message) == IS_NULL) {
			ZEPHIR_INIT_NVAR(message);
			ZEPHIR_CONCAT_SVS(message, "Value ", v1, " is null, but non null value was expected.");
		}
		ZEPHIR_INIT_VAR(_2);
		ZVAL_LONG(_2, 15);
		ZEPHIR_CALL_STATIC(&_1, "createexception", NULL, 0, value, message, _2, propertyPath);
		zephir_check_call_status();
		zephir_throw_exception_debug(_1, "phalconplus/Assert/Assertion.zep", 68 TSRMLS_CC);
		ZEPHIR_MM_RESTORE();
		return;
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(PhalconPlus_Assert_Assertion, numeric) {

	int ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *value, *message = NULL, *propertyPath = NULL, *v1 = NULL, *_1 = NULL, *_2;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 2, &value, &message, &propertyPath);

	if (!message) {
		ZEPHIR_CPY_WRT(message, ZEPHIR_GLOBAL(global_null));
	} else {
		ZEPHIR_SEPARATE_PARAM(message);
	}
	if (!propertyPath) {
		propertyPath = ZEPHIR_GLOBAL(global_null);
	}


	if (!(zephir_is_numeric(value))) {
		ZEPHIR_CALL_SELF(&v1, "stringify", &_0, 2, value);
		zephir_check_call_status();
		if (Z_TYPE_P(message) == IS_NULL) {
			ZEPHIR_INIT_NVAR(message);
			ZEPHIR_CONCAT_SVS(message, "Value ", v1, " is not numeric");
		}
		ZEPHIR_INIT_VAR(_2);
		ZVAL_LONG(_2, 23);
		ZEPHIR_CALL_STATIC(&_1, "createexception", NULL, 0, value, message, _2, propertyPath);
		zephir_check_call_status();
		zephir_throw_exception_debug(_1, "phalconplus/Assert/Assertion.zep", 80 TSRMLS_CC);
		ZEPHIR_MM_RESTORE();
		return;
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(PhalconPlus_Assert_Assertion, stringify) {

	zval *_2 = NULL;
	int ZEPHIR_LAST_CALL_STATUS;
	zval *value, *_0 = NULL, *val = NULL, *_1 = NULL, _3, _4, *_5;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &value);



	if (Z_TYPE_P(value) == IS_BOOL) {
		ZEPHIR_INIT_VAR(_0);
		if (zephir_is_true(value)) {
			ZVAL_STRING(_0, "<TRUE>", 1);
		} else {
			ZVAL_STRING(_0, "<FALSE>", 1);
		}
		RETURN_CCTOR(_0);
	}
	ZEPHIR_CALL_FUNCTION(&_1, "is_scalar", NULL, 3, value);
	zephir_check_call_status();
	if (zephir_is_true(_1)) {
		zephir_get_strval(_2, value);
		ZEPHIR_CPY_WRT(val, _2);
		if (zephir_fast_strlen_ev(val) > 100) {
			ZEPHIR_SINIT_VAR(_3);
			ZVAL_LONG(&_3, 0);
			ZEPHIR_SINIT_VAR(_4);
			ZVAL_LONG(&_4, 97);
			ZEPHIR_INIT_NVAR(_0);
			zephir_substr(_0, val, 0 , 97 , 0);
			ZEPHIR_INIT_VAR(_5);
			ZEPHIR_CONCAT_VS(_5, _0, "...");
			ZEPHIR_CPY_WRT(val, _5);
		}
		RETURN_CCTOR(val);
	}
	if (Z_TYPE_P(value) == IS_ARRAY) {
		RETURN_MM_STRING("<ARRAY>", 1);
	}
	if (Z_TYPE_P(value) == IS_OBJECT) {
		zephir_get_class(return_value, value, 0 TSRMLS_CC);
		RETURN_MM();
	}
	if (Z_TYPE_P(value) == IS_RESOURCE) {
		RETURN_MM_STRING("<RESOURCE>", 1);
	}
	if (Z_TYPE_P(value) == IS_NULL) {
		RETURN_MM_STRING("<NULL>", 1);
	}
	RETURN_MM_STRING("unknown", 1);

}

