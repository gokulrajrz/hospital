import React from 'react'
import { View, ImageBackground, Text, Image, Dimensions, StyleSheet, TextInput } from 'react-native'
import { Icon } from 'react-native-elements'

const h = Dimensions.get('window').height - 80;

const AdminChat = () => {
  return (
    <View style={StyleSheet.container}>
      <View
        style={{
          height: 80,
          flexDirection: 'row',
          alignItems: 'center',
          top: 40,
        }}
      >
        <Image style={styles.icn} source={require('../assets/images.jpeg')} />
        <Text style={styles.txt}>Admin</Text>
      </View>
      <ImageBackground resizeMode="cover" source={require('../assets/hosp.jpeg')} style={{height: h, top:40}}></ImageBackground>
      <View
        style={{
            top:-30,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TextInput style={styles.input} placeholder="Type here..." />
        <Icon raised name="send" onPress={() => console.log('hello')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  icn: {
    left: 20,
    height: 60,
    width: 60,
    borderRadius: 15,
  },
  txt: {
    left: 35,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '80%',
    borderRadius: 30,
    marginRight: 8,
    left: 10,
  },
})

export default AdminChat
