// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // same as above, using destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log("Unable to connect to MongDB server.");
  }
  console.log("Connected to MongoDB server.");

  // db.collection('Todos').find({
  //   _id: new ObjectID('583b2ddae30715d58986b28c')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to fetch Todos', error);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (error) => {
    console.log('Unable to fetch Todos', error);
  });

  db.close();
});
