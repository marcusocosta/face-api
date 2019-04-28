require("@tensorflow/tfjs-node");
const canvas = require('canvas');
const faceapi = require("face-api.js");

const Canvas = canvas.Canvas, Image = canvas.Image, ImageData = canvas.ImageData;
faceapi.env.monkeyPatch({ Canvas: Canvas, Image: Image, ImageData: ImageData });

module.exports = {
  canvas
}