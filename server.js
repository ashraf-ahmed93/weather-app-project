// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
//dependacies
const bodyParser = require('body-Parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));



// Setup Server
// setup the port and but it in a variaple
const port = 8000;

// setup the server with arrow function
const server = app.listen(port,()=>{
    // set the console active whene the server run
    console.log('running on local host: '+ port);
});

// make the get request with return the js object end point data

app.get ('/all',(req,res)=>{
    res.send(projectData);
    projectData = {};

});


// make the post request the server side

app.post('/add',(req,res)=>{
    projectData = req.body;
    newEntry = {
        temp:req.body.temp,
        date:req.body.data,
        content:req.body.content
    }
    console.log(req.body);
    // projectData.push(newEntry);
    res.send(projectData);
})

// run the server at the terminal using  node server.js
