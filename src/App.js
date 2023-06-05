import React, { useState } from "react";
import axios, { Axios } from "axios";

function App() {
  // For API
  const [data,setData] = useState({});


  // For Location
  const [location,setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=dc22c313d813cc86305647e42a127ce7`;

  // For Search Location

  const searchLocation = (event) => {
    if(event.key == 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('');
    } 
  }

 
  return (
    <div className="App">
      <div className="search">
        
        <input type="text" value={location} onChange={event =>setLocation(event.target.value)} placeholder="Enter Location" onKeyPress={searchLocation}></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {/* To check main.temp is available? */}
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
  
            </div>
            <div className="description">
            {/* To check main.temp is available? */}
            {data.weather ? <p>{data.weather[0].main}</p> : null}
              
            </div>
        </div>

    {data.name != undefined &&
         <div className="bottom">
         <div className="feels">
         {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p> : null}
         
         <p>Fells Like</p>
         </div>
         <div className="humidity">
         {data.main ? <p className="bold">{data.main.humidity}%</p> : null}

           <p>Humidity</p>
         </div>
         <div className="wind">
         {data.main ? <p className="bold">{data.wind.speed.toFixed()}MPH</p> : null}
           
           <p>Wind Speed</p>
         </div>
       </div> 
        }
       
      </div>
    </div>
  );
}

export default App;
