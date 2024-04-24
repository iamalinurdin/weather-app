import React from "react"
import { View, Text } from "react-native"

const RowText = ({ text1, text2, containerStyle, text1Style, text2Style }) => {
  return (
    <View style={containerStyle}>
      <Text style={text1Style}>{text1}</Text>
      <Text style={text2Style}>{text2}</Text>
    </View>
  )
}

export default RowText