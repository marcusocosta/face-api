const env = require('./env');
const faceDetection = require('./faceDetection');

module.exports = {
  canvas: env.canvas,
  faceDetectionNet: faceDetection.faceDetectionNet,
  faceDetectionOptions: faceDetection.faceDetectionOptions,
};
