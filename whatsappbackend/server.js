import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import messagesModel from "./dbMessages.js";

const app = express();

const port = process.env.PORT;

app.use(express.json());

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true

})
.then(() => console.log("MongoDB connection established"))
.catch((error) => console.error("MongoDB connection failed: ", error.message));

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