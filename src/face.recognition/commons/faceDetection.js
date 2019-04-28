const faceapi = require("face-api.js");
const faceDetectionNet = faceapi.nets.mtcnn;
const minFaceSize = 20;
const scaleFactor = 0.7;

getFaceDetectorOptions = () =>
    new faceapi.MtcnnOptions({ minFaceSize: minFaceSize, scaleFactor: scaleFactor });

module.exports = {
    faceDetectionOptions: getFaceDetectorOptions(),
    faceDetectionNet
} 
