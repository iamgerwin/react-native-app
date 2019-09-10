import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const name = 'Gerwin'

  return (
    <View>
      <Text style={styles.textStyle}>Getting started</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 25
  }
})

export default ComponentsScreen
