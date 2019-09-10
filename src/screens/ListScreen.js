import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend #0', age: 20 },
    { name: 'Friend #1', age: 21 },
    { name: 'Friend #2', age: 21 },
    { name: 'Friend #3', age: 21 },
    { name: 'Friend #4', age: 21 },
    { name: 'Friend #5', age: 21 },
    { name: 'Friend #6', age: 21 },
    { name: 'Friend #7', age: 21 },
    { name: 'Friend #8', age: 21 },
    { name: 'Friend #9', age: 21 },
    { name: 'Friend #10', age: 21 }
  ]

  return (
    <FlatList
      keyExtractor={item => item.name}
      data={friends}
      renderItem={({ item, index }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age: {item.age}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})

export default ListScreen
