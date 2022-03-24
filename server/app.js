const express = require("express");
const app = express();
const apikey = process.env.APIKEY;

const client =  [
    {
    id:123,
    api_key: '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c',
    from: 'Alexis',
    host: 'http://localhost:4545/test2'
 },
];

app.get('/DevOps', (req, res) => {
    res.send("This is our main endpoint4!");
})

app.listen(4545, () =>{
    console.log("Up and running! -- This is our books service");
})

app.get('/test2', async (req, res) => {
    console.log("This is the test 1");
    console.log("test: "+apikey);
    res.send(200, {users: []})
})

app.post('/test1', async (req, res) => {
    console.log("This is the test 1 post");

    res.send(200, {message: 'The user had been send'})
})


const validateKey = (req, res, next) => {
    //Where is the API key expected to be?
    let host = req.headers.origin;
    //let api_key = req.query.api_key; //version 1 with the querystring
    //let api_key = req.params.apikey; //version 2 with the URL params
    let api_key = req.header('x-api-key'); //version 3 using a header
    let account = users.find(
      (user) => user.host == host && user.api_key == api_key
    );
      //good match
      //check the usage
      let ApiKey = process.env.APIKEY;
      if (ApiKey == '') {
        
    } else {
      //stop and respond
      res.status(403).send({ error: { code: 403, message: 'You not allowed.' } });
    }
  };


module.exports = { client};