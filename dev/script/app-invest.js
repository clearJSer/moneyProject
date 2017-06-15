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
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<header>	<h1><a href=\"index.html\"><img src=\"./images/img-index/logo1.png\" /></a></h1>	<a href=\"login.html\">登录</a>	<a href=\"register.html\">注册</a>	<a href=\"###\" class=\"yo-ico\">&#xe600;</a>	<h2>个人账户</h2>	<a href=\"#\" class=\"yo-ico btn-back\">&#xe662;</a></header>"

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


	var invest = __webpack_require__(12)
	var headerTpl = __webpack_require__(3)
	var footerTpl = __webpack_require__(4)
	var commonUtil = __webpack_require__(6)

	commonUtil.renderBody(invest);
	commonUtil.render(document.getElementById('header'), headerTpl)
	commonUtil.render(document.getElementById('footer'), footerTpl)

	var list = [];

	var mySwiper = new Swiper('#swiper-container-main', {
		//loop: true,
		//autoplay : 2000,
		speed:300,
		//touchMoveStopPropagation : false,
		// 如果需要分页器
		onSlideChangeEnd: function(swiper){
			  var j=swiper.realIndex;
	          $('.month li p').removeClass('active').eq(j).addClass('active');
		      switch(j){
		      	case 0 :
		      	  getData('/mock/listmore','investList','productList',"#isroll-1");
		      	   break;
		      	case 1 : 
		      	    getData('/mock/listmore2','investList2','productList2',"#isroll-2");
		      	   break;
		      	case 2 :
		      	   getData('/mock/listmore3','investList3','productList3',"#isroll-3");
		      	   break;
		      }
		 }
	})
	//点击tap页
	$('#month li').tap(function(){
		var index  = $(this).index();
		$('.month li p').removeClass('active').eq(index).addClass('active');
		 switch(index){
		      	case 0 :
		      	  getData('/mock/listmore','investList','productList',"#isroll-1");
		      	   break;
		      	case 1 : 
		      	    getData('/mock/listmore2','investList2','productList2',"#isroll-2");
		      	   break;
		      	case 2 :
		      	   getData('/mock/listmore3','investList3','productList3',"#isroll-3");
		      	   break;
		  }
		mySwiper.slideTo(index,1000,false);
	})
	//页面初始化数据
	$.ajax({	
	//	url:'/api/dhapi/services/project/getProjectList',
	//	type:'post',
	//	data:{
	//		from:2,
	//		pageNo:1,
	//		pageSize:6,
	//		span:360
	//	},
		url: '/mock/listmore',
		success:function(res){
			list=res.data;
			var html = template('investList',res)
			//console.log(html);
			document.getElementById("productList").innerHTML = html;
			var myScroll = new IScroll("#isroll-1",{
	    		//scrollbars: true,
	    		mouseWheel :true,
	    		probeType :3
			});
			var head = $('.head img'),
			foot = $('.foot img');
			myScroll.scrollBy(0, -41);
			myScroll.on('scroll', function () {
		    	var y = this.y;
		        maxY = this.maxScrollY - y;
		        if (y >= 0) {
		          var topImgHasClass = head.hasClass('up'); 
		          !topImgHasClass && head.addClass('up');
		          return '';
		        }
		        if (maxY >= 100) {
		          var bottomImgHasClass = head.hasClass('down');
		          !bottomImgHasClass && foot.addClass('down');
		          return '';
		        }
	        });
		  myScroll.on('scrollEnd', function () {
	        // 下拉刷新
	        if (this.y >= -41 && this.y < 0) {
	          myScroll.scrollTo(0, -41);
	          head.removeClass('up');
	        } else if (this.y >= 0) {
	            $('.head img').attr('src', './images/ajax-loader.gif');
	            //ajax下拉刷新数据
				setTimeout(function(){
					$.ajax({
						url:'/mock/listmore',
						success:function(res){
							list = res.data;
							var html = template("investList",res)
							//console.log(html);
							document.getElementById("productList").innerHTML = html;
							myScroll.scrollTo(0, -41);
	           				head.removeClass('up');
	            			head.attr('src', '../images/arrow.png');
						}
					})
				},500);
	        }

	        // 上拉加载更多
	        var maxY = this.maxScrollY - this.y;
	        var self = this;
	        if (maxY > -100 && maxY < 0) {
	            myScroll.scrollTo(0, self.maxScrollY + 100);
	            $('.foot img').removeClass('down')
	        } else if (maxY >= 0) {
	          $('.foot img').attr('src', './images/ajax-loader.gif');
	          setTimeout(function(){
	          	$.ajax({
		          	type:"get",
		          	url:"/mock/listmore",
		          	success:function(res){
			          	  myScroll.scrollTo(0, self.y + 41);
			              $('.foot img').removeClass('down');
			              $('.foot img').attr('src', './images/arrow.png');
			              res.data = res.data.concat(list)
			              var html = template("investList", res)
			              document.getElementById("productList").innerHTML = html;
			
			              myScroll.refresh();
			              list = res.data;
		          	}
	           });	
	          },500)
	        }
	      })
	    }
	})

	//getData('/mock/listmore',"investList",'productList')

	//获取数据方法
	function getData(url,artTmp,box,isroll){
		$.ajax({	
			url:url,
			success:function(res){
				var html = template(artTmp,res)
				//console.log(html);
				document.getElementById(box).innerHTML = html;
				var isroll1 = new IScroll(isroll,{
					//scrollbars: true,
	    			mouseWheel :true
				});
				//new IScroll(".isroll");
			}
		})
	}

	//				url:'/api/dhapi/services/project/getProjectList',
	//				type:'post',
	//				data:{
	//					from:2,
	//					pageNo:1,
	//					pageSize:6,
	//					span:360
	//				},

	//iscroll




/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"invest-box\" id=\"invest-box\">	<div id=\"header\"></div>	<section id=\"invest-section\">		<ul class=\"month\" id=\"month\">			<li><p class=\"active\">1-3个月</p></li>			<li><p>6个月</p></li>			<li><p>12个月</p></li>		</ul>		<div class=\"swiperbox\">			<div class=\"swiper-container\" id=\"swiper-container-main\">		  <div class=\"swiper-wrapper\">		    <div class=\"swiper-slide\">		    	<div class=\"isroll\" id=\"isroll-1\">					<ul  id=\"productList\"  class=\"productList\">						<script id=\"investList\" type=\"text/html\">							<div class=\"head\">				                <img src=\"./images/arrow.png\" />				                <span>下拉刷新...</span>				             </div>							{{each data}}							<li>								<div class=\"info-box\">									<div class=\"listLeft\">										<h4>{{$value.name}}</h4>										<p>											<span><i class=\"active percent\">{{$value.rate}}</i><i class=\"active\">%</i></span>												<span><i>{{$value.amount}}</i><i>万元</i></span>												<span><i>{{$value.span}}</i><i>天</i></span>											</p>										<p>											<span><i class=\"active\">预期年化收益率</i></span>												<span>融资金额</span>												<span>还款期限</span>											</p>									</div>									<!--&#xe7bb; 还款中-->									<div class=\"listRight\">										<a href=\"javascript:;\" class=\"yo-ico ico-img\">&#xe624;</a>									</div>								</div>								<div class=\"progress-num\">									<span class=\"percent-num\">{{$value.stepAmount}}</span><span>%</span>								</div>								<div class=\"progress\">									<div class=\"progress-son\">																			</div>								</div>							</li>							{{/each}}							 <div class=\"foot\">			                    <img src=\"./images/arrow.png\"/>			                    <span>上拉加载更多...</span>				             <div>						</script>					</ul>				</div>		    </div>		    <div class=\"swiper-slide\">		    	<div id=\"isroll-2\" class=\"isroll\">		    	<ul  id=\"productList2\"  class=\"productList\">					<script id=\"investList2\" type=\"text/html\">						{{each data}}						<li>							<div class=\"info-box\">								<div class=\"listLeft\">									<h4>{{$value.name}}</h4>									<p>										<span><i class=\"active percent\">{{$value.rate}}</i><i class=\"active\">%</i></span>											<span><i>{{$value.amount}}</i><i>万元</i></span>											<span><i>{{$value.span}}</i><i>天</i></span>										</p>									<p>										<span><i class=\"active\">预期年化收益率</i></span>											<span>融资金额</span>											<span>还款期限</span>										</p>								</div>								<!--&#xe7bb; 还款中-->								<div class=\"listRight\">									<a href=\"javascript:;\" class=\"yo-ico ico-img\">&#xe624;</a>								</div>							</div>							<div class=\"progress-num\">								<span class=\"percent-num\">{{$value.stepAmount}}</span><span>%</span>							</div>							<div class=\"progress\">								<div class=\"progress-son\">																	</div>							</div>						</li>						{{/each}}					</script>				</ul>		    	</div>		    </div>		    <div class=\"swiper-slide\">		    	<div id=\"isroll-3\" class=\"isroll\">		    	<ul  id=\"productList3\"  class=\"productList\">					<script id=\"investList3\" type=\"text/html\">						{{each data}}						<li>							<div class=\"info-box\">								<div class=\"listLeft\">									<h4>{{$value.name}}</h4>									<p>										<span><i class=\"active percent\">{{$value.rate}}</i><i class=\"active\">%</i></span>											<span><i>{{$value.amount}}</i><i>万元</i></span>											<span><i>{{$value.span}}</i><i>天</i></span>										</p>									<p>										<span><i class=\"active\">预期年化收益率</i></span>											<span>融资金额</span>											<span>还款期限</span>										</p>								</div>								<!--&#xe7bb; 还款中-->								<div class=\"listRight\">									<a href=\"javascript:;\" class=\"yo-ico ico-img\">&#xe624;</a>								</div>							</div>							<div class=\"progress-num\">								<span class=\"percent-num\">{{$value.stepAmount}}</span><span>%</span>							</div>							<div class=\"progress\">								<div class=\"progress-son\">																	</div>							</div>						</li>						{{/each}}					</script>				</ul>		   		</div>		    </div>		  </div>		</div>		</div>				<!--使用artTemplate模板-->	</section>	<div id=\"footer\"></div></div>"

/***/ })
/******/ ]);