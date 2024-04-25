import React from "react";
import { SafeAreaView, View, ImageBackground, StyleSheet, StatusBar, Text } from "react-native";
import { Feather } from '@expo/vector-icons'
import IconText from "../components/IconText";
import moment from 'moment'

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/city-bg.jpg')} style={styles.imageBackground}>
        <Text style={[styles.city, styles.locationDetail]}>{name}</Text>
        <Text style={[styles.country, styles.locationDetail]}>{country}</Text>
        <View style={[styles.populationContainer, styles.rowLayout]}>
          <IconText icon="user" color="red" text={population} />
        </View>
        <View style={[styles.riseSetContainer, styles.rowLayout]}>
          <IconText icon="sunrise" color="white" text={moment(sunrise).format('h:mm:ss a')} styleText={styles.riseSet} />
          <IconText icon="sunset" color="white" text={moment(sunset).format('h:mm:ss a')} styleText={styles.riseSet} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageBackground: {
    flex: 1
  },
  city: {
    fontSize: 40,
  },
  country: {
    fontSize: 30,
  },
  locationDetail: {
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  population: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  populationContainer: {
    justifyContent: 'center',
    marginTop: 30,
  },
  riseSetContainer: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSet: {
    fontSize: 20,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City;