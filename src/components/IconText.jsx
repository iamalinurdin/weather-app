import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'

const IconText = ({ icon, color, text, styleText }) => {
  return (
    <View style={styles.container}>
      <Feather name={icon} size={50} color={color} />
      <Text style={[styles.text, styleText]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold'
  },
  container: {
    alignItems: 'center'
  }
})

export default IconText