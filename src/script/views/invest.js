var invest = require('../tpls/invest.string')
var headerTpl = require('../tpls/header-index.string')
var footerTpl = require('../tpls/footer.string')
var commonUtil = require('../utils/common')

commonUtil.renderBody(invest);
commonUtil.render(document.getElementById('header'), headerTpl)
commonUtil.render(document.getElementById('footer'), footerTpl)

$.ajax({	
//	url:'/api/dhapi/services/project/getProjectList',
//	type:'post',
	url: '/mock/listmore',
	success:function(res){
		console.log(res)
		var html = template('investList',res)
		console.log(html);
		document.getElementById("productList").innerHTML = html;
	}
})
