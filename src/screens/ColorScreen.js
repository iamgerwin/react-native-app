import React, { PureComponent } from 'react'
import { View, Button } from 'react-native'

class ColorScreen extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      colors: []
    }
  }

  randomRgb () {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
  }

  render () {
    return (
      <View>
        <Button
          title='Add Color'
          onPress={() => {
            this.setState({ colors: [...this.state.colors, this.randomRgb()] })
          }}
        />
        <View style={{ height: 100, width: 100, backgroundColor: this.randomRgb() }} />
      </View>
    )
  }
}

export default ColorScreen
