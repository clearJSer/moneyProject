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
		var html = template('investList',res)
		//console.log(html);
		document.getElementById("productList").innerHTML = html;
		var myScroll = new IScroll("#isroll-1",{
    		//scrollbars: true,
    		mouseWheel :true,
    		probeType :3
		});
		myScroll.on('scrollEnd', function () {
			console.log(this.y)
  		// 下拉刷新
	        if (this.y >= -45 && this.y < 0) {
	          myScroll.scrollTo(0, -45);
	          head.removeClass('up');
	        } else if (this.y >= 0) {
	            head.attr('src', './images/ajax-loader.gif');
	            //ajax下拉刷新数据
//	            ajaxUtil.ajax({
//	              url: opt.urlRefresh,
//	              data: {
//	                pageNo: 1,
//	                pageSize: 3
//	              },
//	              callback: function (res) {
//	                myScroll.scrollTo(0, -40);
//	                head.removeClass('up');
//	                head.attr('src', './images/arrow.png');
//	
//	                var page = res.content.data.page;
//	                page.result = page.result.concat(list)
//	                var html = template(opt.tplId, page)
//	                opt.tplContainer.html(html)
//	
//	                list = page.result
//	            }
//	          })
	        }
      	});
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
console.log(IScroll)
