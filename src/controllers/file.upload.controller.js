
const fs = require('fs')
const faceExpressionRecognition =
  require('../face.recognition/face.expression.recognition');

module.exports = (req, res) => {
  if (!req.file || !req.file.path)
    return res.status(400).send()

  const path = req.file.path;

  faceExpressionRecognition(path)
    .then(result => {
      fs.unlink(path, (err) => {
        if (err)
          return res.status(500).send(err)
      })
      res.status(200).send(result)
    })
    .catch(err => res.status(500).send(err));
};
