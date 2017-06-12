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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = "<header>	<h1><a href=\"index.html\"><img src=\"./images/img-index/logo1.png\" /></a></h1>	<a href=\"login.html\">登录</a>	<a href=\"register.html\">注册</a>	<a href=\"###\" class=\"yo-ico\">&#xe600;</a>	<h2>个人账户</h2>	<a href=\"login.html\" class=\"yo-ico btn-back\">&#xe662;</a></header>"

/***/ }),

/***/ 6:
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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(21)




/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(3)
	var moreTpl = __webpack_require__(22)

	var commonUtil = __webpack_require__(6)

	commonUtil.renderBody(moreTpl)
	commonUtil.render(document.getElementById('header'), headerTpl)




/***/ }),

/***/ 22:
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-register\">	<div id=\"header\"></div>	<section>		<div class=\"mui-content\">			<div class=\"mg_logo\">		    	<img src=\"images/img-register/logo.png\">		    </div>		    <div class=\"login_con\">		    	<div class=\"login_input_group\">					<label for=\"mobile\">手机号码：</label>					<input type=\"text\" class=\"clear_input\" placeholder=\"请输入手机号\" id=\"mobile\" name=\"mobile\">	     	  	</div>	     	  		     	  	<div class=\"verification_input\">					<label for=\"verificationCode\">验证码：</label>					<input type=\"text\" class=\"verifica_input\" id=\"verificationCode\">					<p class=\"verifica_img\"><img src=\"http://www.dfhfax.com/dhapi/services/sm/getVerifyCode\"></p>					<a href=\"javascript:;\" class=\"verifica_a\">看不清楚，换一张</a>				</div>				<div class=\"login_next_con\">		     		<div class=\"login_input_group login_input_group_small\">			     	    <div class=\"login_input_group_s_w\">			     	  		<label for=\"code\">验证码：</label>			     	  		<input type=\"text\" class=\"clear_input\" placeholder=\"请输入手机验证码\" id=\"code\" name=\"code\">			     	  	</div>			     	  	<a href=\"javascript:;\" class=\"login_code\" id=\"btnSendCode\" onclick=\"sendMessage()\">获取验证码</a>			     	</div>			     	<div class=\"login_input_group\">			     	  	<label for=\"pwd\">登录密码：</label>			     	  	<input type=\"password\" class=\"clear_input\" placeholder=\"请输入密码\" id=\"pwd\" name=\"pwd\">			     	  	<i id=\"hidePwd\" class=\"yo-ico\">&#xe77d;</i>			     	  	<span id=\"showPwd\" class=\"yo-ico\">&#xe65a;</span>			     	</div>		     	</div>		     			     	<div class=\"login_input_group agreen_msg\">		     	    <input type=\"checkbox\" name=\"agreement\" class=\"clear_input\" checked=\"checked\" id=\"agreement\" value=\"\">	     	    	<span>我已阅读并同意<a href=\"###\">《用户协议》</a></span>		     	</div>		    </div>		    <div class=\"invest_btn\">				<a class=\"login_btn\" href=\"javascript:;\">注册  </a>			</div>		</div>		<div class=\"tip_msg_p\">* 市场有风险，投资需谨慎</div>	</section></div>"

/***/ })

/******/ });