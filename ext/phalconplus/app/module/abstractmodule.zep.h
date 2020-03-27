
extern zend_class_entry *phalconplus_app_module_abstractmodule_ce;

ZEPHIR_INIT_CLASS(PhalconPlus_App_Module_AbstractModule);

PHP_METHOD(PhalconPlus_App_Module_AbstractModule, getApp);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, getDef);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, getEngine);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, __construct);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, isPrimary);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, isCli);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, isWeb);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, isSrv);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, isMicro);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, getName);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, app);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, di);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, def);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, engine);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, __call);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, exec);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, registerAutoloaders);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, registerServices);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, registerEvents);
PHP_METHOD(PhalconPlus_App_Module_AbstractModule, registerEngine);

ZEND_BEGIN_ARG_INFO_EX(arginfo_phalconplus_app_module_abstractmodule___construct, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, app, PhalconPlus\\App\\App, 0)
	ZEND_ARG_OBJ_INFO(0, def, PhalconPlus\\App\\Module\\ModuleDef, 1)
ZEND_END_ARG_INFO()

#if PHP_VERSION_ID >= 70200
ZEND_BEGIN_ARG_WITH_RETURN_OBJ_INFO_EX(arginfo_phalconplus_app_module_abstractmodule_app, 0, 0, PhalconPlus\\App\\App, 0)
#else
ZEND_BEGIN_ARG_WITH_RETURN_TYPE_INFO_EX(arginfo_phalconplus_app_module_abstractmodule_app, 0, 0, IS_OBJECT, "PhalconPlus\\App\\App", 0)
#endif
ZEND_END_ARG_INFO()

#if PHP_VERSION_ID >= 70200
ZEND_BEGIN_ARG_WITH_RETURN_OBJ_INFO_EX(arginfo_phalconplus_app_module_abstractmodule_di, 0, 0, Phalcon\\Di, 0)
#else
ZEND_BEGIN_ARG_WITH_RETURN_TYPE_INFO_EX(arginfo_phalconplus_app_module_abstractmodule_di, 0, 0, IS_OBJECT, "Phalcon\\Di", 0)
#endif
ZEND_END_ARG_INFO()

#if PHP_VERSION_ID >= 70200
ZEND_BEGIN_ARG_WITH_RETURN_OBJ_INFO_EX(arginfo_phalconplus_app_module_abstractmodule_def, 0, 0, PhalconPlus\\App\\Module\\ModuleDef, 0)
#else
ZEND_BEGIN_ARG_WITH_RETURN_TYPE_INFO_EX(arginfo_phalconplus_app_module_abstractmodule_def, 0, 0, IS_OBJECT, "PhalconPlus\\App\\Module\\ModuleDef", 0)
#endif
ZEND_END_ARG_INFO()

#if PHP_VERSION_ID >= 70200
ZEND_BEGIN_ARG_WITH_RETURN_OBJ_INFO_EX(arginfo_phalconplus_app_module_abstractmodule_engine, 0, 0, PhalconPlus\\App\\Engine\\AppEngine, 0)
#else
ZEND_BEGIN_ARG_WITH_RETURN_TYPE_INFO_EX(arginfo_phalconplus_app_module_abstractmodule_engine, 0, 0, IS_OBJECT, "PhalconPlus\\App\\Engine\\AppEngine", 0)
#endif
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_phalconplus_app_module_abstractmodule___call, 0, 0, 1)
#if PHP_VERSION_ID >= 70200
	ZEND_ARG_TYPE_INFO(0, method, IS_STRING, 0)
#else
	ZEND_ARG_INFO(0, method)
#endif
	ZEND_ARG_ARRAY_INFO(0, params, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_phalconplus_app_module_abstractmodule_exec, 0, 0, 0)
	ZEND_ARG_ARRAY_INFO(0, params, 0)
ZEND_END_ARG_INFO()

#if PHP_VERSION_ID >= 70200
ZEND_BEGIN_ARG_WITH_RETURN_OBJ_INFO_EX(arginfo_phalconplus_app_module_abstractmodule_registerengine, 0, 0, PhalconPlus\\App\\Module\\AbstractModule, 0)
#else
ZEND_BEGIN_ARG_WITH_RETURN_TYPE_INFO_EX(arginfo_phalconplus_app_module_abstractmodule_registerengine, 0, 0, IS_OBJECT, "PhalconPlus\\App\\Module\\AbstractModule", 0)
#endif
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(phalconplus_app_module_abstractmodule_method_entry) {
	PHP_ME(PhalconPlus_App_Module_AbstractModule, getApp, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, getDef, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, getEngine, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, __construct, arginfo_phalconplus_app_module_abstractmodule___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, isPrimary, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, isCli, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, isWeb, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, isSrv, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, isMicro, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, getName, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, app, arginfo_phalconplus_app_module_abstractmodule_app, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, di, arginfo_phalconplus_app_module_abstractmodule_di, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, def, arginfo_phalconplus_app_module_abstractmodule_def, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, engine, arginfo_phalconplus_app_module_abstractmodule_engine, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, __call, arginfo_phalconplus_app_module_abstractmodule___call, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, exec, arginfo_phalconplus_app_module_abstractmodule_exec, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, registerAutoloaders, NULL, ZEND_ACC_ABSTRACT|ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, registerServices, NULL, ZEND_ACC_ABSTRACT|ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, registerEvents, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(PhalconPlus_App_Module_AbstractModule, registerEngine, arginfo_phalconplus_app_module_abstractmodule_registerengine, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
