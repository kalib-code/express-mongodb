/**
 * uploadRoutes.js
 * @description :: routes of upload/download attachment
 */

const express = require('express');
const router = express.Router();
const fileUploadController = require('../../../controller/client/v1/fileUploadController');
const auth = require('../../../middleware/auth');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.post('/client/api/v1/upload',auth(PLATFORM.CLIENT),fileUploadController.upload);

module.exports = router;