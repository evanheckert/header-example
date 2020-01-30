import React from 'react'
import { View } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
import { enableScreens } from 'react-native-screens'

import TabNav from './src/TabNav'

enableScreens()

const App = () => {
  return (
    <AppearanceProvider>
      <View style={{ backgroundColor: '#333', flex: 1 }}>
        <TabNav />
      </View>
    </AppearanceProvider>
  )
}

export default App
