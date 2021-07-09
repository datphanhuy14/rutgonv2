let express = require('express');
let cont = require('../../controllers/frontend/index');
let router = express.Router();
/* GET user listing. */
router.get('/', cont.home);
router.post('/', cont.shortUrl);
module.exports = router;