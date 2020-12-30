import React, { useState } from 'react';
import './weather.css';
const api = {
  key:"9db9e0cfe9938b76b999deb179dd02c0",
  base1:"http://api.openweathermap.org/data/2.5/weather?q=",
  base2:"&appid=9db9e0cfe9938b76b999deb179dd02c0"
}



function Weather() {

  const [query,  setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = evt => {
    if(evt.key === "Enter")
    {
      fetch(`${api.base1}${query}${api.base2}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      })
    }
  }

  const dateBuilder=(d) => {
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();
    
    return `${day} ${date} ${month} ${year}`
  }
    return (
      <div className={
        (typeof weather.main!="undefined") ? 
          ((weather.main.temp>16+273) ? 'weather hot' :'weather') 
        :'weather'}>
        <main>
          <div className="search-box">
          <input type="text" 
            className="search-bar" 
            placeholder="search..." 
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            ></input>
          </div>
             {(typeof weather.main!="undefined") ? (
                <div>
                  <div className="location-box">
                  <div className="location">{weather.name},{weather.sys.country}</div>
                  <div className="date">{dateBuilder(new Date())}</div>
                  </div>
                  <div className="weather-box">
                  <div className="temp">"{Math.round(weather.main.temp)-273} °C Approx"</div>
                  <div className="mosm">{weather.weather[0].main}</div>
                  </div>
                </div>
             ) : ('')}
        </main>
      </div>
    );
  }
  
  export default Weather;