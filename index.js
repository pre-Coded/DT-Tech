const express = require('express');
const { client } = require('./src/dbConnection/mongoDb');
const {apiProtected} = require('./src/routes/api');

const app = express();

const mongodbConnection =  async () => {
    try{
        await client.connect();
        console.log("Connected to db");
    }catch(e){
        console.log("Error in connection to db");
    }
}
mongodbConnection();

app.use(express.urlencoded({extended : true}))
app.use(express.json());

app.use('/api/v3/app', apiProtected);

const PORT = 8010;
app.listen(PORT, () => {
    console.log("Running on port", PORT);
})