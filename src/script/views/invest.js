var invest = require('../tpls/invest.string')
var headerTpl = require('../tpls/header-index.string')
var footerTpl = require('../tpls/footer.string')
var commonUtil = require('../utils/common')

commonUtil.renderBody(invest);
commonUtil.render(document.getElementById('header'), headerTpl)
commonUtil.render(document.getElementById('footer'), footerTpl)

var html = template('investList',{value:"hello art-template"})
document.getElementById("productList").innerHTML = html;
$.ajax({	
	url:'/mock/listmore',
	success:function(res){
	}
})
