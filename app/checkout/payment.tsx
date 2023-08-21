import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from "react-native-paper";
import { useRouter } from 'expo-router';

const Payment = () => {
  const router = useRouter()

  const handleSubmit = () => {
    console.log("Some submit logic executed");
    router.push("/");
  };

  return (
    <View>
      <Text>Payment</Text>
      <Button onPress={handleSubmit} mode='contained'>Submit</Button>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({})