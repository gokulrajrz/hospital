import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/Home'
import Account from './pages/Account'
import GroupChat from './pages/GroupChat'
import AdminChat from './pages/AdminChat'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Acount" component={Account} options={{headerShown:true}}/>
        <Stack.Screen name="GroupChat" component={GroupChat} />
        <Stack.Screen name="AdminChat" component={AdminChat} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {},
})
