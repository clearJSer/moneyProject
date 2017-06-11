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

	module.exports = __webpack_require__(10);


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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(11)






/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(12)
	var login = __webpack_require__(13)
	var commonUtil = __webpack_require__(6)

	commonUtil.renderBody(login)
	commonUtil.render(document.getElementById('header'), headerTpl)
	$("#phone").on('keydown',function(event){
		var codeNum=event.keyCode;
		//只允许输入数字,左右移动键,删除键,回车键
		if(codeNum==8||codeNum==37||codeNum==39||(codeNum>=48&&codeNum<=57)){
	    	event.returnValue=codeNum;
	  	}else{
	    	event.returnValue=false;
	  	}
	})
	//$("#phone").blur(function(event){
	//	if(!/^1[3|4|5|7|8][0-9]{9}$/.test(this.value)){
	//		$("#tip").html("手机号格式不正确").show();
	//	}
	//});
	$("input").focus(function(event){
		$("#tip").hide();
	})
	var flag = true;
	$("#eyes").click(function(event){
		if(flag){
			$("#password").attr("type","text");
			flag =false;
		}else{
			$("#password").attr("type","password");
			flag =true;
		}
	})
	$("#login").tap(function(){
		var phone = $("#phone").val();
		var passwordTxt = $("#password").val();
		if(!/^1[3|4|5|7|8][0-9]{9}$/.test(phone)){
			$("#tip").html("请输入正确完整的手机号！").show();
			return false;
		}
		if(passwordTxt == ""){
			return false;
		}
		$.ajax({
			type:"get",
			url:"cloud/login?password="+phone+"&phone="+passwordTxt,
			async:true,
			success:function(data){
				if(data == "0"){
					$("#tip").html("该用户不存在").show();
				}else if(data == "1"){
					window.location.href = "index.html";
				}else{
					$("#tip").html("密码错误！").show();
				}
			}
		});
	})




/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "<header>	<h1></h1>	<a href=\"javascript:;\">注册</a></header>"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"login-box\">  <div id=\"header\"></div>  <section>  		<div class=\"img-div\">	   		<img src=\"./images/login/login-logo.png\">  		</div>   		<div class=\"input-div phone\">   			<span>手机号码:</span>   			<input type=\"txt\" placeholder=\"请输入手机号码\" id=\"phone\" maxlength=\"11\" >   		</div>   		<div class=\"input-div\">   			<span>登录密码:</span>   			<input type=\"password\" placeholder=\"请输入密码\" id=\"password\">   			<span class=\"yo-ico\" id=\"eyes\">&#xe633;</span>   		</div>   		<div class=\"forget\">   		  <p class=\"tip\" id=\"tip\">该用户名不存在</p>   		   <a href=\"javascript:;\">忘记密码</a>   		</div>   		<div class=\"login-btn\">   			<a href=\"javascript:;\" id=\"login\">登录</a>   		  	<p>*市场有风险，投资需谨慎</p>   		</div>  </section></div>"

/***/ })
/******/ ]);