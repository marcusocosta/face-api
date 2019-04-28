const app = require('./src/application');
const configurations = require('./src/face.recognition/load.configs');

configurations().then(() => {
  app.listen(3000, () => console.log('App na porta 3000'));
})