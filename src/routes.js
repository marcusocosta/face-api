const express = require('express');
const path = require('path');
const uuidv1 = require('uuid/v1');
const multer = require('multer');
const controllers = require('./controllers');
const router = new express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, `${uuidv1()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

router.post('/file/upload', upload.single('file'), controllers.fileUploadController);

module.exports = router;