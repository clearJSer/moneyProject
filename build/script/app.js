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

	var mySwiper = new Swiper('#swiper-container-main', {
		loop: true,
		autoplay : 2000,
		speed:300,
		// 如果需要分页器
		pagination: '.swiper-pagination',
		paginationClickable :true,
		// 如果需要前进后退按钮
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	})
	var mySwiper1 = new Swiper('#swiper-container-adv', {
		direction : 'vertical',
		loop: true,
		autoplay : 2000,
		speed:300,
		effect : 'fade',
		fade: {
		  crossFade: false,
		}
	})


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<header>	<h1><a href=\"###\"><img src=\"./images/img-index/logo1.png\" /></a></h1>	<a href=\"login.html\">登录</a>	<a href=\"###\">注册</a>	<a href=\"###\" class=\"yo-ico\">&#xe600;</a></header>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<footer>	<ul>		<li>			<dl>				<dt class=\"yo-ico\">&#xe604;</dt>				<dd>首页</dd>			</dl>		</li>		<li>			<dl>				<dt class=\"yo-ico\">&#xe60b;</dt>				<dd>投资</dd>			</dl>		</li>		<li>			<dl>				<dt class=\"yo-ico\">&#xe601;</dt>				<dd>账户</dd>			</dl>		</li>		<li>			<dl>				<dt class=\"yo-ico\">&#xe627;</dt>				<dd>更多</dd>			</dl>		</li>	</ul></footer>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">	<div id=\"header\"></div>	<section>		<div class=\"index-banner\">			<div class=\"swiper-container\" id=\"swiper-container-main\">			    <div class=\"swiper-wrapper\">			        <div class=\"swiper-slide\"><a href=\"###\"><img src=\"./images/img-index/banner-1.png\" /></a></div>			        <div class=\"swiper-slide\"><a href=\"###\"><img src=\"./images/img-index/banner-2.png\" /></a></div>			    </div>			    <!-- 如果需要分页器 -->			    <div class=\"swiper-pagination\"></div>			    			    <!-- 如果需要导航按钮 -->			    <div class=\"swiper-button-prev\"></div>			    <div class=\"swiper-button-next\"></div>			</div>		</div>		<div class=\"index-adv\">			<span class=\"yo-ico\">&#xe625;</span>			<div class=\"adv\">				<div class=\"swiper-container\" id=\"swiper-container-adv\">				    <div class=\"swiper-wrapper\">				        <div class=\"swiper-slide\"><a href=\"###\">【重磅】东宏金融与恒丰银行正式签署资金存管协议</a></div>				        <div class=\"swiper-slide\"><a href=\"###\">【新手活动】新人专享210元现金红包+专享12%高息！</a></div>				        <div class=\"swiper-slide\"><a href=\"###\">新标“贸易供应链D3CD003-3”上线</a></div>				        <div class=\"swiper-slide\"><a href=\"###\">新标“贸易供应链D3CD003-1（一期）”上线</a></div>				    </div>				</div>			</div>		</div>		<div class=\"index-content\">			<div class=\"detail_content\">				<ul>					<li>						<dl>							<dt><img src=\"./images/img-index/detail-1.png\" /></dt>							<dd>立即充值</dd>						</dl>					</li>					<li>						<dl>							<dt><img src=\"images/img-index/detail-2.png\" /></dt>							<dd>邀请好友</dd>						</dl>					</li>					<li>						<dl>							<dt><img src=\"images/img-index/detail-3.png\" /></dt>							<dd>关于我们</dd>						</dl>					</li>				</ul>			</div>			<div class=\"water\">				<div class=\"water-top\">					<span class=\"yo-ico\">&#xe629;</span>					<span>【新手专享标】贸易供应链</span>					<span>可投金额:500000</span>				</div>				<div class=\"water_content\">					<ul>						<li>							<p>10<i>%</i></p>							<span>预期年化收益率</span>						</li>						<li>							<p>50万元</p>							<span>融资金额</span>						</li>						<li>							<p>30天</p>							<span>项目期限</span>						</li>					</ul>				</div>			</div>			<div class=\"water\">				<div class=\"water-top\">					<span class=\"yo-ico\">&#xe629;</span>					<span>【新手专享标】贸易供应链</span>					<span>可投金额:500000</span>				</div>				<div class=\"water_content\">					<ul>						<li>							<p>10<i>%</i></p>							<span>预期年化收益率</span>						</li>						<li>							<p>50万元</p>							<span>融资金额</span>						</li>						<li>							<p>30天</p>							<span>项目期限</span>						</li>					</ul>				</div>			</div>						<div class=\"more\">				<a><p><span class=\"yo-ico\">&#xe60a;</span>查看更多项目</p></a>			</div>		</div>	</section>	<div id=\"footer\"></div></div>"

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