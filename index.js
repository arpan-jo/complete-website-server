const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3505;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.eoxbt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

client.connect(err => {
   console.log(err);
   const adviceCollection = client.db('taxes').collection('advice');
});

app.get('/', (req, res) => {
   res.send('WELCOME TO TAX ADVISER!');
});

app.listen(port);