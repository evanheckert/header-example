import React from 'react'
import { View, Text } from 'react-native'

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, padding: 40, backgroundColor: 'black' }}>
      <View style={{ borderWidth: 0, borderColor: 'red', padding: 20, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 24 }}>Details</Text>
      </View>
    </View>
  )
}

export default DetailsScreen
