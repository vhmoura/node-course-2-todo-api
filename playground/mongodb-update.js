const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('593aabb360df9c9c89a4ef6f')
  }, {
      $set: {
          text: 'done walking the dog'
      }
  }, {
      returnOriginal: false
  }).then((result) => {
      console.log(result);
  })


});