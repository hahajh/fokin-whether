import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from './weather';

const API_KEY = "882e391268aa12c81b1546efb2dcd451";

export default class extends React.Component {
  state = {
      isLoading: true
  }
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main,
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric `
    );
    this.setState({
      isLoading: false, 
      condition : weather[0].main,
      temp: main.temp
    });
  }
  getLocation = async() => {
      try {
          await Location.requestForegroundPermissionsAsync();
          let {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync({});
          this.getWeather(latitude, longitude);
      }
      catch{
          Alert.alert("I can't find you", "So Sad")
      }
  }
  componentDidMount() {
      this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state; 
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
