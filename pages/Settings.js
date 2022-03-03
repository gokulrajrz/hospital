import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

const Settings = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View style={StyleSheet.container}>
          <View
            style={[styles.item, {marginTop:10}]}
            onStartShouldSetResponder={() => navigation.navigate('Acount')}
          >
            <Icon name="account-circle" size={40} />
            <Text style={styles.txt}>Account</Text>
          </View>
          <View
            style={styles.item}
            onStartShouldSetResponder={() => console.log('Pressed Contact')}
          >
            <Icon name="phone" size={40} />
            <Text style={styles.txt}>Contact</Text>
          </View>
          <View
            style={styles.item}
            onStartShouldSetResponder={() => console.log('Pressed Logout')}
          >
            <Icon name="logout" size={40} />
            <Text style={styles.txt}>Logout</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.img}
              source={require('../assets/hospital.jpeg')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  txt: {
    left: 15,
    fontSize: 18,
    letterSpacing: 1,
  },
  img: {
    width: '90%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    borderRadius: 25,
  },
})

export default Settings
