const express = require('express');
const keyValueStore = require('../controllers/keyValueStoreController');

const router = express.Router();

// Route to set a key-value pair (with optional TTL)
router.post('/set', keyValueStore.setItem);

// Route to get a value for a key
router.get('/get/:key', keyValueStore.getItem);

// Route to delete a key
router.delete('/delete/:key', keyValueStore.deleteItem);

module.exports = router;
