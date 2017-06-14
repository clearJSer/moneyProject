var invest = require('../tpls/invest.string')
var headerTpl = require('../tpls/header-index.string')
var footerTpl = require('../tpls/footer.string')
var commonUtil = require('../utils/common')

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

