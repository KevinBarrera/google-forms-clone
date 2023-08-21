import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Button } from "react-native-paper";

const Delivery = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/checkout/payment")
  };

  return (
    <View>
      <Text>Delivery</Text>
      <Button onPress={handleNavigation} mode='contained'>Next</Button>
    </View>
  )
}

export default Delivery

const styles = StyleSheet.create({})