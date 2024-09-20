// stackRoutes.js
const express = require('express');
const stackControl = require('../controllers/stackController');

const router = express.Router();

router.route('/')
    .post(stackControl.addItem) 
    .get(stackControl.getItem);

module.exports = router;
