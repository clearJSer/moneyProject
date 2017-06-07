var common = {
  renderBody: function (tpl) {
    var body = document.body
    body.innerHTML = tpl + body.innerHTML
  },
  render: function (obj, tpl) {
    obj.innerHTML = tpl
  }
}

module.exports = common
