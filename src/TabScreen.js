import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const TabScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 40, backgroundColor: 'black' }}>
      <TouchableOpacity
        style={{ borderWidth: 1, borderColor: 'red', padding: 20, alignItems: 'center' }}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
        <Text style={{ color: 'white', fontSize: 24 }}>Tap to Navigate</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TabScreen
