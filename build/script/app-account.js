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

	module.exports = "<header>	<h1><a href=\"index.html\"><img src=\"./images/img-index/logo1.png\" /></a></h1>	<a href=\"login.html\">登录</a>	<a href=\"register.html\">注册</a>	<a href=\"###\" class=\"yo-ico\">&#xe600;</a>	<h2>个人账户</h2>	<a href=\"login.html\" class=\"yo-ico btn-back\">&#xe662;</a></header>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<footer>	<ul>		<li>			<a href=\"index.html\">				<dl>					<dt class=\"yo-ico\">&#xe604;</dt>					<dd>首页</dd>				</dl>			</a>		</li>		<li>			<a href=\"invest.html\">				<dl>					<dt class=\"yo-ico\">&#xe60b;</dt>					<dd>投资</dd>				</dl>			</a>		</li>		<li>			<a href=\"account.html\">				<dl>					<dt class=\"yo-ico\">&#xe601;</dt>					<dd>账户</dd>				</dl>			</a>		</li>		<li>			<a href=\"more.html\">				<dl>					<dt class=\"yo-ico\">&#xe627;</dt>					<dd>更多</dd>				</dl>			</a>		</li>	</ul></footer>"

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


	var headerTpl = __webpack_require__(3)
	var footerTpl = __webpack_require__(4)
	var accountTpl = __webpack_require__(9)

	var commonUtil = __webpack_require__(6)

	commonUtil.renderBody(accountTpl)
	commonUtil.render(document.getElementById('header'), headerTpl)
	commonUtil.render(document.getElementById('footer'), footerTpl)




/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-account\">	<div id=\"header\"></div>	<section>		<div class=\"account_head_wrap\">			<div class=\"account_head\">				<img src=\"images/img-account/account-head.png\">				<p class=\"font_size30\">账户总资产</p>				<p class=\"font_size30\" id=\"account_total_amount\">0.0</p>				<a href=\"###\"><span class=\"yo-ico\">&#xe63c;</span></a>			</div>			<div class=\"head_li\">				<ul>					<li class=\"fl\">						<p class=\"font_size30\">可用余额</p>						<p class=\"font_size30\" id=\"account_available_amount\">0.0</p>					</li>					<li class=\"fl\">						<p class=\"font_size30\">累计收益</p>						<p class=\"font_size30\" id=\"accumulated_earnings\">0.0</p>					</li>				</ul>			</div>		</div>		<div class=\"mui-content\">			<ul>				<li>					<a href=\"###\">						<dl>							<dt><span class=\"yo-ico\">&#xe51a;</span></dt>							<dd>提现</dd>						</dl>					</a>				</li>				<li>					<a href=\"###\">						<dl>							<dt><span class=\"yo-ico\">&#xe66d;</span></dt>							<dd>充值</dd>						</dl>					</a>				</li>				<li>					<a href=\"###\">						<dl>							<dt><span class=\"yo-ico\">&#xe648;</span></dt>							<dd>邀请好友</dd>						</dl>					</a>				</li>				<li>					<a href=\"###\">						<dl>							<dt><span class=\"yo-ico\">&#xe691;</span></dt>							<dd>账户总览</dd>						</dl>					</a>				</li>				<li>					<a href=\"###\">						<dl>							<dt><span class=\"yo-ico\">&#xe6af;</span></dt>							<dd>交易记录</dd>						</dl>					</a>				</li>				<li>					<a href=\"###\">						<dl>							<dt><span class=\"yo-ico\">&#xe638;</span></dt>							<dd>我的投资</dd>						</dl>					</a>				</li>				<li>					<a href=\"###\">						<dl>							<dt><span class=\"yo-ico\">&#xe609;</span></dt>							<dd>现金红包</dd>						</dl>					</a>				</li>				<li>					<a href=\"###\">						<dl>							<dt><span class=\"yo-ico\">&#xe644;</span></dt>							<dd>账户设置</dd>						</dl>					</a>				</li>			</ul>			<div class=\"tip_msg_p\">* 市场有风险，投资需谨慎</div>		</div>			</section>	<div id=\"footer\"></div></div>"

/***/ })
/******/ ]);