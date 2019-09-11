import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default class ImageDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { title, imageSource, score } = this.props
    return (
      <View>
        <Image source={imageSource} />
        <Text>{title}</Text>
        <Text>{score}</Text>
      </View>
    )
  }

  styles () {
    return StyleSheet.create({})
  }
}
