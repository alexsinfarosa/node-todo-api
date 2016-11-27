// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // same as above, using destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log("Unable to connect to MongDB server.");
  }
  console.log("Connected to MongoDB server.");

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (error) {
      return console.log("Unable to insert todo", error);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({
    name: 'Alex',
    age: 38,
    location: 'Ithaca'
  }, (error, return) => {
    if (error) {
      return console.log('Unable to insert user', error);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
