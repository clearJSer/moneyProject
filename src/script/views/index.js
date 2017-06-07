var headerTpl = require('../tpls/header.string')
var footerTpl = require('../tpls/footer.string')
var indexTpl = require('../tpls/index.string')


var body = document.body
body.innerHTML = indexTpl + body.innerHTML
var header = document.getElementById('header')
header.innerHTML = headerTpl
var footer = document.getElementById('footer')
footer.innerHTML = footerTpl
