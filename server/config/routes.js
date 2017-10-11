var animalController = require('./../controllers/animals.js')

module.exports = function(app) {
  //************* Routes

  // app.get('/', function(req, res) {
  //   res.json({
  //     key: 'value'
  //   });
  // })
  app.get('/index', animalController.index);
  app.get('/', animalController.index);
  app.get('/mongooses', animalController.mongooses);
  app.get('/mongooses/:id', animalController.mongeese);
  app.post('/create', animalController.create);
  app.get('/mongooses/:id/edit', animalController.edit);
  app.post('/mongooses/:id', animalController.update);
  app.get('/mongooses/:id/delete', animalController.remove);
}
