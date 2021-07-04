# project name 

// weather jornal app

# language used
//  HTML
 //  css 
 //  javascript 
 // node

 ------------------------------

 
---------------------------------

Here is a detail of what was done in the project
________________________
# HTMl:
_________________________
// i changed the id(generate) to class(generate) ther is no reason for that i just wanted to change it  
_________________________
# css
________________________________________
// i made some changes at the css file In order to improve the look of the start page
 
_______________________________
# javascript (app.js client side)
_______________________________

// make a variabel for the api call that i get from openweathe sit
//make a variabel for my api key that i get from openweathe sit and change Temperature  from Fahrenheit to Celsius
* + &units=metric
// make avariaple of the value of zipcode 
// set up the perform action of click the generate button using
* document.querySelector
* addEventListener 
// make a call back function 
* using the (pasurl,newZip,apiKey) the variables i  created at the top
// post the data that we get it from the openweather sit
* using postData function
// function to dunamically update the UI
* set the fuction at the end using asyncrones 
// set up the client sid get function to call the api
* using asyncrones ( await , tray and catch)
 // set up the client sid post request to the route
/ transform data into json 
* response.json
// identify data we want dunamically update it
* using the updateUI fuction
________________________________________ 

# javascript (server.js server side)
_______________________________
// downloded express
* npm i express
// downloded body-parser
* npm i body-parser
// downloded cors
* npm i corss
// creat the pacjage.json that will contain what i downloded
* npm init
// creat avaribles for the downlode items
// setup the port and but it in a variaple
* port 8000
//set the console active whene the server run
* console.log
// make the get request with return the js object end point data
* app.get
// make the post request
* app.post
// run the srver at the terminal
* node server.js





