const express = require('express')
const router = express.Router();

const {getAllTopics, getAllTopicsTesting} = require("../controllers/products")
router.route('/').get(getAllTopics);
router.route('/testing').get(getAllTopicsTesting);

module.exports = router;