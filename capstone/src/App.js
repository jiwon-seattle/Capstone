import * as React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY= "64f606f4c956d314b74c3fb5e267823a";

//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}


export default class App extends React.Component {
  state= {
    isLoaded: false,
    error: null
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState(
          {isLoaded: true}
        )
      },
      error => {
        this.setState( 
          {error: error}
        )
      }
    )
  }
render () {
  const { isLoaded, error } = this.state;
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      {isLoaded ? (<Weather/>) : (<View style={styles.loading}><Text style={styles.loadingText}>Getting weather</Text> {error ? <Text style={styles.errorText}>(error)</Text> : null }</View>)}
    </View>
  )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent"
  },
  loading:{
    flex: 1,
    backgroundColor: "#FDF6AA",
    //bottom 
    justifyContent: "flex-end",
    paddingLeft: 25,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }

});