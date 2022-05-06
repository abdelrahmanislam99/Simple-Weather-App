import React, {Component} from 'react';
import Form from './components/Form'
import Weather from './components/Weather'

const API_key ='fb7f8accb7ae175bd4a193eeae519ce6'

class App extends Component {

  state  ={

    city :"",
    timezone :"",
    weathercondition :"",
    temperature :"",
    windspeed :"",
    error :""

  }

  getInfo=async(e)=>{
    e.preventDefault()

    const city=e.target.elements.city.value;
    //console.log(city,country); // test
    const api = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C&appid=${API_key}`);
    const data = await api.json ();
    // console.log(data)  //  test

    if( city ){
      this.setState({

        

        city : data.name,
        timezone :data.timezone,
        weathercondition :data.weather[0].description,
        temperature :data.main.temp,
        windspeed :data.wind.speed,
        error :""
  
      })
    } else {
      this.setState({

        city :"",
        timezone :"",
        weathercondition :"",
        temperature :"",
        windspeed :"",
        error :"Please enter valid data"
      })
    }

    

  }

  render(){
  return (
    <div className='parent-section'>

      <div>

      <Form getInfo={this.getInfo}/>
      <Weather
      
      city = {this.state.city}
      timezone={this.state.timezone}
      weathercondition={this.state.weathercondition}
      temperature ={this.state.temperature}
      windspeed={this.state.windspeed}
      error ={this.state.error}

      />

      
      </div>


    </div>
  );
}
}

export default App;