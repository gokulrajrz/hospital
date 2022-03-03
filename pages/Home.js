import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Appbar } from 'react-native-paper'
import { Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

import TabNavigator from '../TabNavigator'

const Home = ({navigation}) => {
  return (
    <>
      <SafeAreaProvider style={styles.container}>
        <Appbar style={[styles.top, {}]}>
          <Icon name='local-hospital' color={'white'} size={34}/>
          <Text style={styles.hospital}>Asla Hospital</Text>
          {/* <Appbar.Action
        icon="more"
        style={styles.more}
        onPress={() => console.log('Pressed delete')}
      /> */}
        </Appbar>
        <TabNavigator />
      </SafeAreaProvider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2eaf5',
  },
  hospital: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    left: 10,
  },
  top: {
    left: 0,
    right: 0,
    top: 0,
    marginTop: 40,
    paddingTop: 20,
    backgroundColor: '#4e4e4e',
    paddingHorizontal: 22,
    elevation: 0,
  },
  more: {},
})

export default Home
