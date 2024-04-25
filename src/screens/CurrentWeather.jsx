import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData
  const condition = weather[0].main

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        {
          backgroundColor: weatherType[condition].backgroundColor
        }
      ]}
    >
      <View style={styles.container}>
        <Feather name={weatherType[condition].icon} size={100} color={'white'} />
        <Text style={styles.temp}>{temp}</Text>
        <Text style={styles.feels}>Feels like {feels_like}</Text>
        <RowText
          containerStyle={styles.highlowWrapper}
          text1Style={styles.highlow}
          text2Style={styles.highlow}
          text1={`High: ${temp_max}`}
          text2={`Low: ${temp_min}`}
        />
      </View>
      <RowText
        containerStyle={styles.bodyWrapper}
        text1Style={styles.description}
        text2Style={styles.message}
        text1={weather[0].description}
        text2={weatherType[condition].message}
      />
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highlow: {
    color: 'black',
    fontSize: 20
  },
  highlowWrapper: {
    flexDirection: 'row',
    gap: 10
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 30
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  },
})

export default CurrentWeather;