module.exports = {
  ajax: function (opt) {
    opt.type = opt.type || 'get'
    opt.dataType = opt.dataType || 'json'
    opt.contentType = opt.contentType || 'application/x-www-form-urlencoded'
    opt.data = opt.data || {}
    opt.callback = opt.callback || function(){}
    $.ajax({
      url: opt.url,
      type: opt.type,
      dataType: opt.dataType,
      contentType: opt.contentType,
      data: opt.data,
      success: function (res) {
        opt.callback(res)
      },
      error: function (err) {
        console.log(err);
      }
    })
  }
}
