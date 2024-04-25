import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from "./src/components/Tabs";
import { ActivityIndicator, View } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const Tab = createBottomTabNavigator()
const App = () => {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center'
    }}>
      {loading ? (
        <ActivityIndicator size={'large'} color={'blue'} />)
        : (
          <ErrorItem />
        )}
    </View>
  )
}

export default App;