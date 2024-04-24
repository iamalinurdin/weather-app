import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, Image, ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons';
import ListItem from "../components/ListItem";

const data = [
  {
    "main": {
      "temp": 296.34,
      "feels_like": 296.02,
      "temp_min": 296.34,
      "temp_max": 298.24,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 933,
      "humidity": 50,
      "temp_kf": -1.9
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "dt_txt": "2022-08-30 16:00:00"
  },
  {
    "main": {
      "temp": 296.31,
      "feels_like": 296.07,
      "temp_min": 296.2,
      "temp_max": 296.31,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 932,
      "humidity": 53,
      "temp_kf": 0.11
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "dt_txt": "2022-08-30 17:00:00"
  },
  {
    "main": {
      "temp": 294.94,
      "feels_like": 294.74,
      "temp_min": 292.84,
      "temp_max": 294.94,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 931,
      "humidity": 60,
      "temp_kf": 2.1
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "dt_txt": "2022-08-30 18:00:00"
  },
  {
    "main": {
      "temp": 294.14,
      "feels_like": 293.99,
      "temp_min": 294.14,
      "temp_max": 294.14,
      "pressure": 1014,
      "sea_level": 1014,
      "grnd_level": 931,
      "humidity": 65,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "dt_txt": "2022-09-03 15:00:00"
  }
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/upcoming-weather.jpg')} style={styles.image}>
        <Text>Upcoming Weather</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather;