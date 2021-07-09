let express = require('express');
let cont = require('../../controllers/backend/index');
let router = express.Router();
/* GET user listing. */
router.get('/', cont.home);
router.post('/', cont.shortUrl);
router.get('/url/create', cont.createGet);
router.get('/url', cont.viewAll);
module.exports = router;