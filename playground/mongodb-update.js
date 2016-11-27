// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // same as above, using destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log("Unable to connect to MongDB server.");
  }
  console.log("Connected to MongoDB server.");

  // findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('583b2ddae30715d58986b28c')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  db.close();
});
