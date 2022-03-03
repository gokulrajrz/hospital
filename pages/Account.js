import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

const Account = ({ navigation }) => {
  return (
    <View style={StyleSheet.container}>
      <View style={styles.card}>
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: 1,
          }}
        >
          Details
        </Text>
        <Text style={{ color: 'white', top: 15, fontSize: 18 }}>
          Name Basith
        </Text>
        <Text style={{ color: 'white', top: 20, fontSize: 18 }}>
          Phone 9876543210
        </Text>
        <View style={{ top: 130 }}>
          <Icon name="local-hospital" size={50} color="white" />
        </View>
      </View>
      <Text style={{ textDecorationLine: 'underline', top: 20, left: 10 }}>
        Change Password
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  card: {
    top: 10,
    minHeight: 300,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#6da065',
  },
})

export default Account
