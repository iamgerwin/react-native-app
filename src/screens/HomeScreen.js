import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = props => {
  console.log(props)
  return (
    <View>
      <Text style={styles.text}>Hi</Text>
      <Button onPress={() => props.navigation.navigate('Components')} title='Go to Components Demo' />
      <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Image')}>
        <Text>Go to Image Demo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen
