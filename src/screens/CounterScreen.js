import React, { Component, useState } from 'react'
import { View, Text, Button } from 'react-native'

class CounterScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  render () {
    return (
      <View>
        <Button
          title='Increase'
          onPress={() => {
            this.setState(prevState => ({
              counter: prevState.counter + 1
            }))
          }}
        />

        <Text>{this.state.counter}</Text>
      </View>
    )
  }
}

export default CounterScreen
