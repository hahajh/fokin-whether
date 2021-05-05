import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "882e391268aa12c81b1546efb2dcd451";

export default class extends React.Component {
  state = {
      isLoading: true
  }
  getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data);
  }
  getLocation = async() => {
      try {
          await Location.requestForegroundPermissionsAsync();
          let {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync({});
          console.log(latitude, longitude);
          this.getWeather(latitude, longitude);
          this.setState({isLoading: false});
      }
      catch{
          Alert.alert("I can't find you", "So Sad")
      }
  }
  componentDidMount() {
      this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
