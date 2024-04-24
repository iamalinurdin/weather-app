import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color={'black'} />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <RowText
          containerStyle={styles.highlowWrapper}
          text1Style={styles.highlow}
          text2Style={styles.highlow}
          text1={'High: 8'}
          text2={'Low: 6'}
        />
      </View>
      <RowText
        containerStyle={styles.bodyWrapper}
        text1Style={styles.description}
        text2Style={styles.message}
        text1={'Its sunny'}
        text2={'Its perfect t-shirt weather'}
      />
    </SafeAreaView>
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