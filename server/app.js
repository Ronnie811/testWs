import express from "express";
import cors from "cors";
import "dotenv/config";

import {get_random} from './database';
// New comment... dfkgjbadfgvliabv
// Fix error encountered during npm test: 
// ReferenceError: regeneratorRuntime is not defined 
import "core-js/stable";
import "regenerator-runtime/runtime";

// Setup server
const app = express();
app.use(cors())
app.use(express.static('client'))

// API
app.get('/DevOps', async (req, res) => {
    console.log("Processing get at /DevOps");
    if(req.body.message){
    const { message1 } = 'This is a test';
    const { to } = 'Juan Perez';
    const { from } = '“Rita Asturia';
    const { timeToLifeSec } = 45;
    const newWs = {
        message1,
        to,
        from,
        timeToLifeSec
    };
    console.log("Message :"+ newMs);
    res.send(200, {message: [newWs]})
    res.redirect('/DevOps',{newWs});
    res.send(await get_random());
    }else{
        res.send("ERROR")
    }
})

app.get('/test1', async (req, res) => {
    if(req.body.message){
        console.log("This is the test 1");
        res.send(200, {users: []})
    }else{
        res.send("ERROR")
    }
    
})

app.post('/test1', async (req, res) => {
    console.log("This is the test 1 post");
    res.send(200, {message: 'The user had been send'})
})

export default app;