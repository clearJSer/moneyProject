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

	module.exports = __webpack_require__(14);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<header>	<h1><a href=\"index.html\"><img src=\"./images/img-index/logo1.png\" /></a></h1>	<a href=\"login.html\">登录</a>	<a href=\"invest.html\">注册</a>	<a href=\"###\" class=\"yo-ico\">&#xe600;</a></header>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<footer>	<ul>		<li>			<a href=\"index.html\">				<dl>					<dt class=\"yo-ico\">&#xe604;</dt>					<dd>首页</dd>				</dl>			</a>		</li>		<li>			<a href=\"###\">				<dl>					<dt class=\"yo-ico\">&#xe60b;</dt>					<dd>投资</dd>				</dl>			</a>		</li>		<li>			<a href=\"###\">				<dl>					<dt class=\"yo-ico\">&#xe601;</dt>					<dd>账户</dd>				</dl>			</a>		</li>		<li>			<a href=\"more.html\">				<dl>					<dt class=\"yo-ico\">&#xe627;</dt>					<dd>更多</dd>				</dl>			</a>		</li>	</ul></footer>"

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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(15)




/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(3)
	var footerTpl = __webpack_require__(4)
	var moreTpl = __webpack_require__(16)

	var commonUtil = __webpack_require__(6)

	commonUtil.renderBody(moreTpl)
	commonUtil.render(document.getElementById('header'), headerTpl)
	commonUtil.render(document.getElementById('footer'), footerTpl)




/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-more\">	<div id=\"header\"></div>	<section>		<div class=\"mui-content\">			<div class=\"more_wrap\">				<ul class=\"mui-table-view\">					<li class=\"mui-table-view-cell\">					    <span class=\"more_icon yo-ico\" style=\"color: #47ADE3;\">&#xe621;</span>						<a href=\"###\" class=\"mui-navigate-right\">关于我们</a>						<span class=\"more_icon-right yo-ico\">&#xe662;</span>					</li>					<li class=\"mui-table-view-cell\">					    <span class=\"more_icon yo-ico\" style=\"color: #FFA97C;\">&#xe607;</span>						<a href=\"###\" class=\"mui-navigate-right\">安全保障</a>						<span class=\"more_icon-right yo-ico\">&#xe662;</span>					</li>			    </ul>			    <div class=\"more_bar_01\"></div>			    <ul class=\"mui-table-view\">					<li class=\"mui-table-view-cell\">					    <span class=\"more_icon yo-ico\" style=\"color: #6FEAC3;\">&#xe614;</span>						<a href=\"###\" class=\"mui-navigate-right\">平台公告</a>						<span class=\"more_icon-right yo-ico\">&#xe662;</span>					</li>					<li class=\"mui-table-view-cell\">					    <span class=\"more_icon yo-ico\" style=\"color: #C2A7F0;\">&#xe627;</span>						<a href=\"###\" class=\"mui-navigate-right\">帮助中心</a>						<span class=\"more_icon-right yo-ico\">&#xe662;</span>					</li>			    </ul>			    <div class=\"more_bar_01\"></div>			    <ul class=\"mui-table-view\">					<li class=\"mui-table-view-cell\">					    <span class=\"more_icon yo-ico\" style=\"color: #5BC836;\">&#xe70a;</span>						<a href=\"###\" class=\"mui-navigate-right\">联系我们</a>						<span class=\"more_icon-right yo-ico\">&#xe662;</span>					</li>					<li class=\"mui-table-view-cell\">					    <span class=\"more_icon yo-ico\" style=\"color: #7687F0;\">&#xe6d9;</span>						<a href=\"###\" class=\"mui-navigate-right\">投诉与建议</a>						<span class=\"more_icon-right yo-ico\">&#xe662;</span>					</li>			    </ul>			</div>			<div class=\"tip_msg_p\">* 市场有风险，投资需谨慎</div>		</div>	</section>	<div id=\"footer\"></div></div>"

/***/ })
/******/ ]);