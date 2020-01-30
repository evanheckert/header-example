import React from 'react'
import { View } from 'react-native'

import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TabNav from './TabNav'
import DetailsScreen from './DetailsScreen'

const Stack = createStackNavigator()

const AuthNavigator = () => {
  const token = 'asdfasdfasdfasdfasdfasdfasdf'
  const isLoading = false

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <NavigationNativeContainer>
        <Stack.Navigator initialRouteName="Main" headerMode="none">
          {isLoading ? (
            <Stack.Screen name="Splash" component={DetailsScreen} />
          ) : !token ? (
            <Stack.Screen name="SignIn" component={DetailsScreen} />
          ) : (
            <>
              <Stack.Screen name="Main" component={TabNav} />
              <Stack.Screen name="Logout" component={DetailsScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationNativeContainer>
    </View>
  )
}

export default AuthNavigator
