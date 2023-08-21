import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PersonalDetails = () => {
  return (
    <View>
      <Text style={styles.h1}>PersonalDetails</Text>
      <Link href={"checkout/delivery"}>Go to delivery</Link>
    </View>
  )
}

export default PersonalDetails

const styles = StyleSheet.create({
  h1: { fontSize: 40 }
})