var headerTpl = require('../tpls/header-index.string')
var moreTpl = require('../tpls/register.string')

var commonUtil = require('../utils/common')

commonUtil.renderBody(moreTpl)
commonUtil.render(document.getElementById('header'), headerTpl)



function register(){
	var self = this;
	var msgCode;
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
						url: "/cloud/sendMsg?phone=" + $('#mobile').val(),
						success:function(res){
							msgCode = res;
							//console.log(msgCode)
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
		//短信验证
		$("#code").on("blur",function(){
			if($("#code").val()){
				//判断输入的验证码是否匹配随机验证码！	
				if(msgCode == $('#code').val()){
					$('.msg_error').css('display','none');
					arr[1]  = true;//成功
				}else{
					arr[1]  = false;//失败
					$(".msg_error").text("短信验证码输入有误");
					$('.msg_error').css('display','block');
				}
			}else{
				arr[1]  = false;//失败
				$(".msg_error").text("请输入短信验证码");
				$(".msg_error").css("display","block");
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
		$(".login_btn").on("click",function(){
			
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
				if($('#agreement').is(':checked')){
					//注册
					$.ajax({
						url: '/cloud/register?phone='+mobile+'&password='+password,
						success:function(res){
							if(res != 0){
								if(res == 1){
									alert("用户注册成功！3s后将跳转到登陆页面！")
									var timer =	setTimeout(function(){
										window.location.href = "login.html";
									},3000);
								}else{
									alert("用户注册失败！请重新注册！")
								}
							}else{
								$("#checkPhone").text("该移动电话已在【东宏金融】平台注册！");
								$("#checkPhone").css("display","block");
							}
						}
					})
				}else{
					alert('请阅读并同意服务协议！')
				}	
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