import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Delivery = () => {
  return (
    <View>
      <Text>Delivery</Text>
      <Link href={"checkout/payment"}>Go to payment</Link>
    </View>
  )
}

export default Delivery

const styles = StyleSheet.create({})