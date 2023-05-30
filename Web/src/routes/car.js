const express = require('express')
const router = express.Router();
const carController = require('../controllers/car')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })



router.get('/addNew', carController.addNew);
router.get('/screenUpdate:_id', carController.screenUpdate);
router.get('/delete/:_id', carController.delete);
router.post('/add', upload.single('image'), carController.add)
router.get('/', carController.car);
module.exports = router;