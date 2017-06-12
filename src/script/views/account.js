var headerTpl = require('../tpls/header-index.string')
var footerTpl = require('../tpls/footer.string')
var accountTpl = require('../tpls/account.string')

var commonUtil = require('../utils/common')

commonUtil.renderBody(accountTpl)
commonUtil.render(document.getElementById('header'), headerTpl)
commonUtil.render(document.getElementById('footer'), footerTpl)

