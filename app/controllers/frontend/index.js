let random = require('randomatic');
let baseUrl = 'rutgon.biz/';
module.exports = {
    home: function(req, res, next) {
        res.render('backend/index', { title: 'Trang chủ' });
    },
    shortUrl: function(req, res) {
        res.render('frontend/short_result', {
            title: 'Rút gọn',
            shortUrl: baseUrl + random('aA0', 6),
            url: req.body.url
        });
    }
}