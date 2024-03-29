const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("doctors"));
app.use(fileUpload());
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Hello medical care!");
});

app.get("/a", (req, res) => {
  res.send("Hello medical care!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kv6ok.mongodb.net/servie-master?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  // events
  const eventsCollection = client.db("museume").collection("events");
  // gallary
  const gallaryCollection = client.db("museume").collection("gallary");




  // post multiple Events
  // app.post("/addEvent", (req, res) => {
  //   const file = req.files
  //   console.log(file)
  //   // const fakeBlog = req.body;
  //   // // console.log(fakeBlog);
  //   // eventsCollection.insertOne(fakeBlog).then((result) => {
  //   //   console.log(result.insertedCount);
  //   // });
  // });

  // post multiple Events
  app.post("/addGallary", (req, res) => {
    const fakeBlog = req.body;
    // console.log(fakeBlog);
    gallaryCollection.insertOne(fakeBlog).then((result) => {
      console.log(result.insertedCount);
    });
  });

  //  get all Events
  app.get("/getEvent", (req, res) => {
    eventsCollection.find({}).toArray((err, document) => {
      res.send(document);
    });
  });


  //  get all Events
  app.get("/getGallary", (req, res) => {
    gallaryCollection.find({}).toArray((err, document) => {
      res.send(document);
    });
  });













  //  
  //   add some data
  // app.post("/addBlog", (req, res) => {
  //   const fakeBlog = req.body;
  //   console.log(fakeBlog);
  //   blogCollection.insertOne(fakeBlog).then((result) => {
  //     console.log(result.insertedCount);
  //   });
  // });

  // get some data

  // app.get("/getBlog", (req, res) => {
  //   blogCollection.find({}).toArray((err, document) => {
  //     res.send(document);
  //   });
  // });

  // // delete

  // const ObjectId = require("mongodb").ObjectId;

  // app.delete("/deletBlog/:id", (req, res) => {
  //   // console.log(req.params.id);
  //   blogCollection
  //     .deleteOne({ _id: ObjectId(req.params.id) })
  //     .then((result) => console.log(result));
  // });

  // const ObjectId = require("mongodb").ObjectId; age kora hyca tai akn kora lagbe na

  // app.delete("/deleteData/:id", (req, res) => {
  //   console.log(req.params.id);
  //   dataCollection
  //     .deleteOne({ _id: ObjectId(req.params.id) })
  //     .then((result) => console.log(result));
  // });

  // app.get("/blogs/:id", (req, res) => {
  //   blogCollection
  //     .find({ _id: ObjectId(req.params.id) })
  //     .toArray((err, document) => {
  //       res.send(document);
  //     });
  // });

  // // here we'll update our data
  // app.patch("/update", (req, res) => {
  //   // console.log(req.params.id);
  //   // console.log(req.params.id,req.body.status);
  //   console.log("four", req.body.status, req.body.id);
  //   // const ObjectId = require("mongodb").ObjectId;
  //   bookedServiceCollection
  //     .updateOne(
  //       { _id: ObjectId(req.body.id) },
  //       {
  //         $set: { status: req.body.status },
  //       }
  //     )

  //     .then((result) => {
  //       console.log("three", result);
  //       res.send(result);
  //     });
  // });
});

// git push heroku main
// heroku git:remote -a salty-inlet-50152