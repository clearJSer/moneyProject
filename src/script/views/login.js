var headerTpl = require('../tpls/header.string')
var login = require('../tpls/login.string')
var commonUtil = require('../utils/common')

commonUtil.renderBody(login)
commonUtil.render(document.getElementById('header'), headerTpl)