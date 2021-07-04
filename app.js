/* Global Variables */


// make a variabel for the api call that i get from openweathe sit
const pasurl ='http://api.openweathermap.org/data/2.5/weather?zip=';

// make a variabel for my api key that i get from openweather sit +  change Temperature  from Fahrenheit to Celsius
const apiKey = '&appid=a5b521a64037c9ab4f7f12cb857ccbea'+'&units=metric';





// Create a new date instance dynamically with JS
let d = new Date();
// add + 1 to get the right month
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// set up the perform action of click the generate button
document.querySelector(".generate").addEventListener('click',(e)=>{
    // make avariaple of the value of zipcode 
    const zipCode = document.getElementById('zip').value;
    // the call back function of getInfo
    getInfo (pasurl,zipCode,apiKey)
    // use .then syntax to chain actions , until we get tha data from openweather site
    .then(
        function sentData(data){
            const content = document.getElementById('feelings').value;
        // post the data that we get it from the openweather site
            postData('/add',{temp:data.main.temp,date:newDate,content})
            // function to dunamically update the UI
            updateUI(); 
        })
        
});
// set up the client sid get function to call the api useing asyncrenc
const getInfo = async(pasurl,zip,key)=>{
    const res = await fetch(pasurl+zip+key)
    try{
        const data = await res.json()
        console.log(data)
        return data ;
    }catch(error){
        console.log('error',error);
    }
};



// set up the client sid post request to the route
const postData = async (url='',data = {})=>{
    console.log(data)
    const response = await fetch(url,{
        method:'post',
        credentials:'same-origin',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        // transform data into json 
        const newData = await response.json();
        console.log(newData);
        return newData
    }catch(error){
        console.log('error',error);
    };
};

// identify data we want dunamically update it 
const updateUI = async ()=>{
    const response = await fetch('/all');
    
    
    try{
        const allData = await response.json();
        document.getElementById('temp').innerHTML = 'the temp is: '+ allData.temp;
        document.getElementById('date').innerHTML = ' date : '+allData.date;
        document.getElementById('content').innerHTML='i feel like '+allData.content;
    }catch(error){
        console.log('error',error);
    }
};