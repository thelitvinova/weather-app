import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const ApiKey = '5c82cc7ff466e13fa1b489c6890160bf';

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined

  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await 
      fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`);
      const data = await api_url.json();
      console.log(data);
    if(city) {
    
      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunsetDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      var sunrise = data.sys.sunrise;
      var date2 = new Date();
      date2.setTime(sunrise);
      var sunriseDate = date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds();



      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: sunriseDate,
        sunset: sunsetDate,
        error: undefined
      });

    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "ОШИБКА! Введите название города!"
      });

    }
  }

  render (){
    return (
      <div className = "wrapper">
        <div className = "container">
          <div className = "main">
            <div className = "row">
              <div className = "col-sm-5 info">  </div>

              <div className = "col-sm-7 form">
              
                <Info/>
                <Form weatherMethod = {this.gettingWeather} />
                <Weather  
                  temp = {this.state.temp}
                  city = {this.state.city}
                  country = {this.state.country}
                  sunrise = {this.state.sunrise}
                  sunset = {this.state.sunset}
                  error = {this.state.error}/>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;