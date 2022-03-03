import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ChatScreen = ({ navigation }) => {
  return (
    <View style={StyleSheet.container}>
      <View
        style={[styles.item, { marginTop: 10 }]}
        onStartShouldSetResponder={() => navigation.navigate('GroupChat')}
      >
        <Image style={styles.icn} source={require('../assets/grp.jpg')} />
        <Text style={styles.txt}>Group</Text>
      </View>
      <View
        style={styles.item}
        onStartShouldSetResponder={() => navigation.navigate('AdminChat')}
      >
        <Image style={styles.icn} source={require('../assets/images.jpeg')} />
        <Text style={styles.txt}>Admin</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 80,
    alignItems: 'center',
    // backgroundColor: 'yellow',
    padding: 10,
    flexDirection: 'row',
  },
  icn: {
    left: 10,
    height: 60,
    width: 60,
    borderRadius: 15,
  },
  txt: {
    left: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default ChatScreen
