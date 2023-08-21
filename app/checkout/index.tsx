import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from "react-native-paper";

const PersonalDetails = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/checkout/delivery");
  }

  return (
    <View>
      <Text style={styles.h1}>PersonalDetails</Text>
      <Button onPress={handleNavigation} mode="contained">Next</Button>
    </View>
  )
}

export default PersonalDetails

const styles = StyleSheet.create({
  h1: { fontSize: 40 }
})