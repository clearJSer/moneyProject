var invest = require('../tpls/invest.string')
var headerTpl = require('../tpls/header-index.string')
var footerTpl = require('../tpls/footer.string')
var commonUtil = require('../utils/common')

commonUtil.renderBody(invest);
commonUtil.render(document.getElementById('header'), headerTpl)
commonUtil.render(document.getElementById('footer'), footerTpl)

var mySwiper = new Swiper('#swiper-container-main', {
	loop: true,
	//autoplay : 2000,
	speed:300,
	// 如果需要分页器
//	pagination: '.swiper-pagination',
//	paginationClickable :true,
//	// 如果需要前进后退按钮
//	nextButton: '.swiper-button-next',
//	prevButton: '.swiper-button-prev'
	onSlideChangeEnd: function(swiper){
		  var j=swiper.activeIndex;
		  console.log($('.month li'))
          $('.month li p').removeClass('active').eq(j-1).addClass('active');
	      $.ajax({	
//				url:'/api/dhapi/services/project/getProjectList',
//				type:'post',
//				data:{
//					from:2,
//					pageNo:1,
//					pageSize:6,
//					span:360
//				},
				url: '/mock/listmore',
				success:function(res){
					console.log(res)
					var html = template('investList',res)
					//console.log(html);
					document.getElementById("productList").innerHTML = html;
				}
		})
	 }
})


