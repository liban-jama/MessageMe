import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import messagesModel from "./dbMessages.js";
import Pusher from 'pusher';

const app = express();

const port = process.env.PORT;

const pusher = new Pusher({
  appId: process.env.APPID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: process.env.CLUSTER,
  useTLS: process.env.USETLS
});

app.use(express.json());

app.use((req, res, next) => {
  
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();
});

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true

})
.then(() => console.log("MongoDB connection established"))
.catch((error) => console.error("MongoDB connection failed: ", error.message));


const db = mongoose.connection;

db.once("open", () => {

  const messageCollection = db.collection('messagecontents');
  const changeStream = messageCollection.watch();
  
  changeStream.on("change", (change) => {
    console.log("A change has occured: ", change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
         name: messageDetails.name,
         message: messageDetails.message,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

app.get('/', (req, res) => res.status(200).send("Hello World")); 

app.get("/messages/sync", (req, res) => {
  messagesModel.find((err, data) => {
    if (err) {
      console.error("Error finding messaages: ", err.message);
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  messagesModel.create(dbMessage, (err, data) => {
    if (err) {
      console.error("Error creating message: ", err.message);
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  });
});


app.listen(port, () => console.log(`We are listening at local host:${port}`));