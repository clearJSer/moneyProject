var invest = require('../tpls/invest.string')
var headerTpl = require('../tpls/header-index.string')
var footerTpl = require('../tpls/footer.string')
var commonUtil = require('../utils/common')

commonUtil.renderBody(invest);
commonUtil.render(document.getElementById('header'), headerTpl)
commonUtil.render(document.getElementById('footer'), footerTpl)

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
	      	  getData('/mock/listmore','investList','productList');
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
	      	  getData('/mock/listmore','investList','productList');
	      	   break;
	      	case 1 : 
	      	    getData('/mock/listmore2','investList2','productList2');
	      	   break;
	      	case 2 :
	      	   getData('/mock/listmore3','investList3','productList3');
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
		var html = template('investList',res)
		//console.log(html);
		document.getElementById("productList").innerHTML = html;
		var isroll1 = new IScroll("#isroll-1");
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
			var isroll1 = new IScroll(isroll);
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
console.log(IScroll)
