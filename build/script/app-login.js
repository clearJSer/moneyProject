/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	var common = {
		renderBody: function(tpl) {
			var body = document.body
			body.innerHTML = tpl + body.innerHTML
		},
		render: function(obj, tpl) {
			obj.innerHTML = tpl
		}
	}

	module.exports = common




/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(14)






/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(15)
	var login = __webpack_require__(16)
	var commonUtil = __webpack_require__(6)

	commonUtil.renderBody(login)
	commonUtil.render(document.getElementById('header'), headerTpl)


	console.log($);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = "<header>	<a href=\"index.html\"><h1></h1></a>	<a href=\"register.html\">注册</a></header>"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"login-box\">  <div id=\"header\"></div>  <section>  		<div class=\"img-div\">	   		<img src=\"./images/login/login-logo.png\">  		</div>   		<div class=\"input-div phone\">   			<span>手机号码:</span>   			<input type=\"txt\" placeholder=\"请输入手机号码\">   		</div>   		<div class=\"input-div\">   			<span>登录密码:</span>   			<input type=\"password\" placeholder=\"请输入密码\">   			<span class=\"yo-ico\">&#xe633;</span>   		</div>   		<div class=\"forget\">   		<a href=\"javascript:;\">忘记密码</a>   		</div>   		<div class=\"login-btn\">   			<a href=\"javascript:;\">登录</a>   		  	<p>*市场有风险，投资需谨慎</p>   		</div>  </section></div>"

/***/ })
/******/ ]);