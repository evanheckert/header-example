import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HeaderRight from './components/HeaderRight'

import DetailsScreen from './DetailsScreen'
import TabScreen from './TabScreen'

const StackNav = createNativeStackNavigator()

const BusinessStack = () => {
  return (
    <StackNav.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#000' },
        headerTitleStyle: { color: '#fff' },
        contentStyle: { backgroundColor: '#000' },
      }}
    >
      <StackNav.Screen
        name="Stats"
        component={TabScreen}
        options={{
          headerLargeTitle: true,
          headerTitle: 'Home',
          headerRight: () => <HeaderRight />,
        }}
      />

      <StackNav.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ headerTitle: 'Details Screen', headerStyle: { backgroundColor: '#1C1C1E' } }}
      />
    </StackNav.Navigator>
  )
}

export default BusinessStack
