var invest = require('../tpls/invest.string')
var headerTpl = require('../tpls/header-login.string')
var commonUtil = require('../utils/common')

commonUtil.renderBody(invest);
commonUtil.render(document.getElementById('header'), headerTpl)

console.log($);
