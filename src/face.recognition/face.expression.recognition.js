const faceapi = require('face-api.js');

const { 
  canvas, 
  faceDetectionOptions } = require('./commons');

module.exports = async (path) => {
  const img = await canvas.loadImage(path);
  return await faceapi.detectAllFaces(img, faceDetectionOptions)
    .withFaceExpressions();
}