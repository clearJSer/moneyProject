var headerTpl = require('../tpls/header-index.string')
var moreTpl = require('../tpls/register.string')

var commonUtil = require('../utils/common')

commonUtil.renderBody(moreTpl)
commonUtil.render(document.getElementById('header'), headerTpl)

