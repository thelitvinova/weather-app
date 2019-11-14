import React from 'react';

class Weather extends React.Component {
  render (){
    return (
      <div>
          {this.props.temp &&
            <div className = "infoWeath">
            <p>Местоположение: {this.props.city}, {this.props.country}</p>
            <p>Температура: {this.props.temp}</p>
            <p>Восход солнца: {this.props.sunrise}</p>
            <p>Закат солнца: {this.props.sunset}</p>
            </div>
          }

          <p className = "error">{ this.props.error} </p>
      </div>
    );
  }
}

export default Weather;