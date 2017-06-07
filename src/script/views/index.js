var headerTpl = require('../tpls/header-index.string')
var footerTpl = require('../tpls/footer.string')
var indexTpl = require('../tpls/index.string')

var commonUtil = require('../utils/common')

commonUtil.renderBody(indexTpl)
commonUtil.render(document.getElementById('header'), headerTpl)
commonUtil.render(document.getElementById('footer'), footerTpl)

var mySwiper = new Swiper('.swiper-container', {
	loop: true,
	autoplay : 1000,
	speed:300,
	// 如果需要分页器
	pagination: '.swiper-pagination',
	paginationClickable :true,
	// 如果需要前进后退按钮
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev'
})