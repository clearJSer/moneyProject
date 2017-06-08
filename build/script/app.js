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

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(2)




/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(3)
	var footerTpl = __webpack_require__(4)
	var indexTpl = __webpack_require__(5)

	var commonUtil = __webpack_require__(6)

	commonUtil.renderBody(indexTpl)
	commonUtil.render(document.getElementById('header'), headerTpl)
	commonUtil.render(document.getElementById('footer'), footerTpl)

	var mySwiper = new Swiper('.swiper-container', {
		loop: true,
		autoplay : 1000,
		speed:300,
		// 如果需要分页器
		pagination: '.swiper-pagination',
		paginationClickable :true,
		// 如果需要前进后退按钮
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	})


/***/ }),
/* 3 */
/***/ (function(module, exports) {

<<<<<<< HEAD
<<<<<<< HEAD
	module.exports = "<header>	<h1><a href=\"###\"><img src=\"./images/img-index/logo1.png\" /></a></h1>	<a href=\"###\" class=\"index-login\">登录</a>	<a href=\"###\" class=\"index-reg\">注册</a>	<a href=\"###\" class=\"index-refresh\"></a></header>"
=======
<<<<<<< HEAD
	module.exports = "<header>	<h1></h1>	<a href=\"javascript:;\">注册</a></header>"
=======
	module.exports = "<header>	<h1><a href=\"###\"><img src=\"./images/img-index/logo1.png\" /></a></h1>	<a href=\"###\">登录</a>	<a href=\"###\">注册</a>	<a href=\"###\" class=\"yo-ico\">&#xe600;</a></header>"
>>>>>>> qzh
>>>>>>> 6e0eb2b8e9b46ba68f6df9f0e4078d5614b04eae
=======
	module.exports = "<header>	<h1><a href=\"###\"><img src=\"./images/img-index/logo1.png\" /></a></h1>	<a href=\"###\" class=\"index-login\">登录</a>	<a href=\"###\" class=\"index-reg\">注册</a>	<a href=\"###\" class=\"index-refresh\"></a></header>"
>>>>>>> liuliang-rd

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<footer>	<ul>		<li>			<dl>				<dt class=\"yo-ico\">&#xe604;</dt>				<dd>首页</dd>			</dl>		</li>		<li>			<dl>				<dt class=\"yo-ico\">&#xe60b;</dt>				<dd>投资</dd>			</dl>		</li>		<li>			<dl>				<dt class=\"yo-ico\">&#xe601;</dt>				<dd>账户</dd>			</dl>		</li>		<li>			<dl>				<dt class=\"yo-ico\">&#xe627;</dt>				<dd>更多</dd>			</dl>		</li>	</ul></footer>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">	<div id=\"header\"></div>	<section>		<div class=\"index-banner\">			<div class=\"swiper-container\">			    <div class=\"swiper-wrapper\">			        <div class=\"swiper-slide\">Slide 1</div>			        <div class=\"swiper-slide\">Slide 2</div>			    </div>			    <!-- 如果需要分页器 -->			    <div class=\"swiper-pagination\"></div>			    			    <!-- 如果需要导航按钮 -->			    <div class=\"swiper-button-prev\"></div>			    <div class=\"swiper-button-next\"></div>			</div>		</div>		<div class=\"index-adv\">			<span class=\"yo-ico\">&#xe625;</span>		</div>		<div class=\"index-content\">			<div class=\"detail_content\">				<ul>					<li>						<dl>							<dt><img src=\"./images/img-index/detail-1.png\" /></dt>							<dd>立即充值</dd>						</dl>					</li>					<li>						<dl>							<dt><img src=\"images/img-index/detail-2.png\" /></dt>							<dd>邀请好友</dd>						</dl>					</li>					<li>						<dl>							<dt><img src=\"images/img-index/detail-3.png\" /></dt>							<dd>关于我们</dd>						</dl>					</li>				</ul>			</div>		</div>	</section>	<div id=\"footer\"></div></div>"

/***/ }),
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




/***/ })
/******/ ]);