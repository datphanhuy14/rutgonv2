let random = require('randomatic');
let baseUrl = 'rutgon.biz/';
module.exports = {
    home: function(req, res, next) {
        res.render('backend/index', { title: 'Trang chủ' });
    },
    shortUrl: function(req, res) {
        res.render('backend/index', {
            title: 'Rút gọn',
            shortUrl: baseUrl + random('aA0', 6),
            url: req.body.url
        });
    },
    createGet: function(req, res) {
        res.render('backend/url/create', {
            title: 'Tạo liên kết'
        });
    },
    viewAll: function(req, res) {
        res.render('backend/url/list', {
            title: 'Tất cả liên kết'
        });
    }
}