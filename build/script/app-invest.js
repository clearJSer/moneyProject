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

	module.exports = __webpack_require__(7);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<header>	<h1><a href=\"###\"><img src=\"./images/img-index/logo1.png\" /></a></h1>	<a href=\"login.html\">登录</a>	<a href=\"###\">注册</a>	<a href=\"###\" class=\"yo-ico\">&#xe600;</a></header>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<footer>	<ul>		<li>			<dl>				<dt class=\"yo-ico\">&#xe604;</dt>				<dd>首页</dd>			</dl>		</li>		<li>			<dl>				<dt class=\"yo-ico\">&#xe60b;</dt>				<dd>投资</dd>			</dl>		</li>		<li>			<dl>				<dt class=\"yo-ico\">&#xe601;</dt>				<dd>账户</dd>			</dl>		</li>		<li>			<dl>				<dt class=\"yo-ico\">&#xe627;</dt>				<dd>更多</dd>			</dl>		</li>	</ul></footer>"

/***/ }),
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(8)






/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var invest = __webpack_require__(9)
	var headerTpl = __webpack_require__(3)
	var footerTpl = __webpack_require__(4)
	var commonUtil = __webpack_require__(6)

	commonUtil.renderBody(invest);
	commonUtil.render(document.getElementById('header'), headerTpl)
	commonUtil.render(document.getElementById('footer'), footerTpl)

	var html = template('investList',{value:"hello art-template"})
	document.getElementById("productList").innerHTML = html;
	$.ajax({	
		url:'/mock/listmore',
		success:function(res){
		}
	})



/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"invest-box\" id=\"invest-box\">	<div id=\"header\"></div>	<section id=\"invest-section\">		<ul class=\"month\">			<li><p class=\"active\">1-3个月</p></li>			<li><p>6个月</p></li>			<li><p>12个月</p></li>		</ul>		<ul  id=\"productList\" >			<script id=\"investList\" type=\"text/html\">				<li></li>							</script>		</ul>		<!--使用artTemplate模板-->	</section>	<div id=\"footer\"></div></div>"

/***/ })
/******/ ]);