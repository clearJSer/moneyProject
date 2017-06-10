var headerTpl = require('../tpls/header-index.string')
var footerTpl = require('../tpls/footer.string')
var moreTpl = require('../tpls/more.string')

var commonUtil = require('../utils/common')

commonUtil.renderBody(moreTpl)
commonUtil.render(document.getElementById('header'), headerTpl)
commonUtil.render(document.getElementById('footer'), footerTpl)

