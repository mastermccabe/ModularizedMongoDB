var mongoose = require('mongoose')
var Animal = mongoose.model('Animal')



module.exports = {
  index: function(req, res) {
    res.render('index');
  },
  mongooses: function(req, res) {
    Animal.find({}).sort({
      'timestamps': -1
    }).exec(function(err, animals) {
      if (err) {
        console.log(err);
      }
      res.render('mongooses', {
        'animal': animals
      });

    })
  },
  mongeese: function(req, res) {
    var animals = Animal.find({
      _id: req.params.id
    }, function(err, animals) {
      if (err) {
        console.log("error, line 47");
      } else {
        res.render('mongeese', {
          'animal': animals[0]
        });
      }
    })
  },
  create: function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var animal = new Animal({
      name: req.body.name,
      info: req.body.info,
    });
    animal.save(function(err) {
      if (err) {
        console.log('something went wrong');
      } else {
        console.log('successfully added animal!');
        res.redirect('/mongooses');
      }
    })
  },
  edit: function(req, res) {
    var animals = Animal.find({
      _id: req.params.id
    }, function(err, animals) {
      if (err) {
        console.log("error, line 47");
      } else {
        res.render('edit', {
          'animal': animals[0]
        });
      }
    })


  },
  remove: function(req, res) {
    var animal = Animal.remove({
      _id: req.params.id
    }, function(err) {
      res.redirect('/mongooses')
    })
  },
  update: function(req, res) {
    console.log("inside edit route", req.params.id);
    console.log("POST DATA", req.body);
    var animal = Animal.update({
        _id: req.params.id
      }, {
        name: req.body.name,
        info: req.body.info
      },
      function(err) {
        if (err) {
          console.log("error on line 80");
        } else {
          res.redirect('/mongooses/' + req.params.id)
        }
      })
  }
}
