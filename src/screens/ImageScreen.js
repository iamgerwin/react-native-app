import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import ImageDetail from '../components/ImageDetail'

export default class ImageScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <SafeAreaView>
        <ImageDetail title='marmar' imageSource={require('../../assets/house_1.png')} score='1' />
        <ImageDetail title='gerger' imageSource={require('../../assets/house_2.png')} score='3' />
      </SafeAreaView>
    )
  }

  styles () {
    return StyleSheet.create({})
  }
}
