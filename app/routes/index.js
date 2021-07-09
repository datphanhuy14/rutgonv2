let express = require('express');
let router = express.Router();
let frontend = require('./frontend/index');
let backend = require('./backend/index');
/* GET home page. */
router.use('/', frontend);
router.use('/admin', backend);

module.exports = router;
