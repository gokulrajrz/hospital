import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Card, Icon } from 'react-native-elements'

const Calender = () => {
  return (
    <>
      <ScrollView>
        <View style={StyleSheet.container}>
          <Card>
            <Text style={{fontSize: 18}}>07-12-2022</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop:5,
              }}
            >
              <Icon name="schedule" />
              <Text style={{left:10, fontSize:18}}>1:00 - 2:00 AM</Text>
            </View>
          </Card>
          <Card>
            <Text style={{fontSize: 18}}>08-12-2022</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop:5,
              }}
            >
              <Icon name="schedule" />
              <Text style={{left:10, fontSize:18}}>1:00 - 2:00 AM</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Calender
