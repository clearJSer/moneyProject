var headerTpl = require('../tpls/header-login.string')
var login = require('../tpls/login.string')
var commonUtil = require('../utils/common')

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
		url:"cloud/login?password="+passwordTxt+"&phone="+phone,
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

