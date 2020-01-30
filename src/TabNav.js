import React from 'react'
import { View, StyleSheet } from 'react-native'
import { BlurView } from 'expo-blur'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import { NavigationNativeContainer } from '@react-navigation/native'

import IconPeople from './components/IconPeople'
import StackOne from './StackOne'
import TabScreen from './TabScreen'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <NavigationNativeContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => <MyTabBar {...props} />}
        tabBarOptions={{ activeTintColor: '#0A84FF', inactiveTintColor: '#8E8E93' }}
        screenOptions={{ contentStyle: { backgroundColor: '#000' } }}
      >
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <IconPeople color={color} /> }} name="Home" component={StackOne} />
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <IconPeople color={color} /> }} name="Screen" component={TabScreen} />
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <IconPeople color={color} /> }} name="Another" component={TabScreen} />
      </Tab.Navigator>
    </NavigationNativeContainer>
  )
}

const MyTabBar = props => (
  <View style={styles.tabBar}>
    <BlurView tint="dark" intensity={100} style={{}}>
      <BottomTabBar {...props} style={{ borderTopWidth: 0, backgroundColor: 'transparent' }} />
    </BlurView>
  </View>
)

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
})
