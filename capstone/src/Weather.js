import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; //importing icons
import PropTypes from "prop-types"

const weatherCases = {
  Rain: {
    colors:["#00C6FB", "#005BEA"],
    title: "Raining",
    subtitle: "It's time to have a coffee!",
    icon: "ios-raining"
  },
  Clear: {
    colors:["#FEF253", "#FF7300"],
    title: "Sunny",
    subtitle: "Let's go out side!",
    icon: "ios-sunny"
  },
  Thunderstorm: {
    colors:["#00ECBC", "#007ADF"],
    title: "Thunderstorm",
    subtitle: "Stay safe",
    icon: "ios-thunderstorm"
  },
  Clouds: {
    colors:["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "Feel the fresh of the air",
    icon: "ios-cloudy"
  },
  Snow: {
    colors:["#7DE2FC", "#B9B6E5"],
    title: "Snowing",
    subtitle: "Do you want to build a snowman?",
    icon: "ios-snow"
  },
  Drizzle: {
    colors:["#89F7FE", "#66A6FF"],
    title: "Drizzling",
    subtitle: "Natural moistrizure :P ",
    icon: "ios-rainy-outline"
  },
  Haze: {
    colors:["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "That goes well with Hazel coffee",
    icon: "ios-rainy-outline"
  },
}
function Weather({temp, weatherName}) {
  return (
    <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
       <View style={styles.upper}>
         <Ionicons color="white" size={144} name={weatherCases[weatherName].icon}/>
         <Text style={styles.temp}>{temp}</Text>
       </View>
       <View style={styles.lower}>
         <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
         <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
       </View>
    </LinearGradient>
  )
}

Weather.propTypes = {
  temp:PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  temp: {
    fontSize: 48,
    color: "white",
    marginTop: 10 
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
  },
  title: {
    fontSize: 38,
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    color: "white",
    marginBottom: 24 
  }
});