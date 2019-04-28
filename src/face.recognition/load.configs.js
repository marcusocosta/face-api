const faceapi = require('face-api.js');

const {
  faceDetectionNet,
} = require('./commons');

module.exports = async () => {
  await faceDetectionNet.loadFromDisk('./weights');
  await faceapi.nets.faceExpressionNet.loadFromDisk('./weights');
}