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

	module.exports = "<header>	<h1><a href=\"index.html\"><img src=\"./images/img-index/logo1.png\" /></a></h1>	<a href=\"login.html\">登录</a>	<a href=\"register.html\">注册</a>	<a href=\"###\" class=\"yo-ico\">&#xe600;</a>	<h2>个人账户</h2>	<a onclick=\"javascript:history.go(-1);\" class=\"yo-ico btn-back\">&#xe662;</a></header>"

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



	function register(){
		var self = this;
		var msgCode = null;
		var arr = [false,false,false];
		
		self.init = function(){
			//获取短信验证码
			self.phoneCode();
			//验证码
			self.authCode();
			//输入检测
			self.check();
			//显示隐藏密码
			self.showpwd();
		}
		//获取短信验证码
		self.phoneCode = function(){
			$('#btnSendCode').on('click',function(){
				
				if($("#verificationCode").val()){
					//判断输入的验证码是否匹配随机验证码！	
					if($(".verifica_img").html() == $('#verificationCode').val()){
						$('.error_warning').css('display','none');
						
						$('#btnSendCode').attr('disabled','disabled');
						var time = 60;
						$('#btnSendCode').text('倒计时'+time+'s')
						
						//发送短信
						$.ajax({
							url: "http://redlemon.applinzi.com/sendMsg?phone=" + $('#mobile').val(),
							success:function(res){
								msgCode = res;
								
								$("#code").on("blur",function(){
									if($("#code").val()){
										//判断输入的验证码是否匹配随机验证码！	
										if(msgCode == $('#code').val()){
											$('.msg_error').css('display','none');
											arr[1]  = true;//成功
										}else{
											arr[1]  = false;//失败
											$(".mes_error").text("短信验证码输入有误");
											$('.msg_error').css('display','block');
										}
									}else{
										arr[1]  = false;//失败
										$(".mes_error").text("请输入短信验证码");
										$(".mes_error").css("display","block");
									}
								})
							}
						})
						
						var timer = setInterval(function(){
							$('#btnSendCode').text('倒计时'+(--time)+'s')
							if(time == 0){
								$('#btnSendCode').removeAttr('disabled');
								$('#btnSendCode').text('重新发送验证码');
								clearInterval(timer);
							}
						},1000)
					}else{
						$(".error_warning").text("您输入的验证码有误!");
						$('.error_warning').css('display','block');
					}
				}else{
					$(".error_warning").text("请输入验证码");
					$(".error_warning").css("display","block");
				}
			});
		}
		//验证码
		self.authCode = function(){
			$('.verifica_img').text(Math.round(Math.random()*9000+1000));
			$('.verifica_a').on('click',function(){
				$('.verifica_img').html(Math.round(Math.random()*9000+1000));
			});
		}
		//输入检测
		self.check = function(){
			//手机号
			$("#mobile").on("input",function(){
				if($("#mobile").val()){
					var reg = /1(3|4|5|7|8)\d{9}/;
					if($("#mobile").val().length == 11){
						$("#checkPhone").css("display","none");
						if(reg.test($('#mobile').val())){
							arr[0] = true;//成功
						}else{
							arr[0] = false;//失败
							$("#checkPhone").text("手机号码有误,请重新输入");
							$("#checkPhone").css("display","block");
						}
					}else{
						arr[0] = false;//失败
						$("#checkPhone").text("手机号码为11位");
						$("#checkPhone").css("display","block");
					}
				}else{
					arr[0] = false;//失败
					$("#checkPhone").text("手机号码不能为空");
					$("#checkPhone").css("display","block");
				}
			})
			//密码
			$("#pwd").on("input",function(){
				if($("#pwd").val()){
					var reg = /^\w{6,20}$/;
					if(reg.test($('#pwd').val())){
						arr[2] = true;//成功
						$("#pwdCheck").css("display","none");
					}else{
						arr[2] = false;//失败
						$("#pwdCheck").text("密码只能由6-20位数字或字母组成");
						$("#pwdCheck").css("display","block");
					}
				}else{
					$("#pwdCheck").text("密码不能为空");
					$("#pwdCheck").css("display","block");
					arr[2] = false;//失败
				}
			})
			//点击立即注册
			$(".submit").on("click",function(){
				
				var mobile = $('#mobile').val();
				var password = $('#pwd').val();
				var result = false;	//用来判断所有验证是否都已通过！
				
				for(var i = 0; i < arr.length-1; i++){
					if(arr[i] == false){
						result = false;
					}else{
						result = true;
					}
				}
				if(result){
	//				if($('.checkbox').is(':checked')){
	//					
	//					$('.loading').css('display','block');
	//					base.setCookie("username",user,10);
	//					base.setCookie("password",password,10);
	//					alert("用户注册成功！3s后将跳转到登陆页面！")
	//					var timer =	setTimeout(function(){
	//						window.location.href = "login.html";
	//					},3000);
	//				}else{
	//					alert('请阅读并同意服务协议！')
	//				}	
				}else{
					alert("您注册的信息有误，请重新注册！");
				}
			});
		}
		//显示隐藏密码
		self.showpwd = function(){
			$('#hidePwd').on('click',function(){
				$('#hidePwd').css('display','none');
				$('#showPwd').css('display','block');
				$('#pwd').attr('type','text');
			})
			$('#showPwd').on('click',function(){
				$('#showPwd').css('display','none');
				$('#hidePwd').css('display','block');
				$('#pwd').attr('type','password');
			})
		}
	}

	new register().init();


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-register\">	<div id=\"header\"></div>	<section>		<div class=\"mui-content\">			<div class=\"mg_logo\">		    	<img src=\"images/img-register/logo.png\">		    </div>		    <div class=\"login_con\">		    	<div class=\"login_input_group\">					<label for=\"mobile\">手机号码：</label>					<input type=\"text\" class=\"clear_input\" placeholder=\"请输入手机号\" id=\"mobile\" name=\"mobile\">	     	  	</div>	     	  	<div class=\"TBLgNameRem\">	                <div style=\"display: none;\" id=\"checkPhone\">手机号码格式错误</div>	            </div>	     	  	<div class=\"verification_input\">					<label for=\"verificationCode\">验证码：</label>					<input type=\"text\" class=\"verifica_input\" id=\"verificationCode\">					<p class=\"verifica_img\"></p>					<a href=\"javascript:;\" class=\"verifica_a\">看不清楚，换一张</a>				</div>				<div class=\"error_warning\" style=\"display: none;\">您输入的验证码有误!</div>				<div class=\"login_next_con\">		     		<div class=\"login_input_group login_input_group_small\">			     	    <div class=\"login_input_group_s_w\">			     	  		<label for=\"code\">验证码：</label>			     	  		<input type=\"text\" class=\"clear_input\" placeholder=\"请输入手机验证码\" id=\"code\" name=\"code\">			     	  	</div>			     	  	<button class=\"login_code\" id=\"btnSendCode\">获取验证码</button>			     	</div>					<div class=\"msg_error\" style=\"display: none;\">您输入的短信验证码有误!</div>			     	<div class=\"login_input_group\">			     	  	<label for=\"pwd\">登录密码：</label>			     	  	<input type=\"password\" class=\"clear_input\" placeholder=\"请输入密码\" id=\"pwd\" name=\"pwd\">			     	  	<i id=\"hidePwd\" class=\"yo-ico\">&#xe77d;</i>			     	  	<span id=\"showPwd\" class=\"yo-ico\">&#xe65a;</span>			     	</div>		     	</div>		     	<div class=\"TBLgNameRem\">	                <div style=\"display: none;\" id=\"pwdCheck\">密码只能由数字和字母组成</div>	            </div>		     	<div class=\"login_input_group agreen_msg\">		     	    <input type=\"checkbox\" name=\"agreement\" class=\"clear_input\" checked=\"checked\" id=\"agreement\" value=\"\">	     	    	<span>我已阅读并同意<a href=\"###\">《用户协议》</a></span>		     	</div>		    </div>		    <div class=\"invest_btn\">				<a class=\"login_btn\" href=\"javascript:;\">注册  </a>			</div>		</div>		<div class=\"tip_msg_p\">* 市场有风险，投资需谨慎</div>	</section></div>"

/***/ })

/******/ });