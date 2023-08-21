import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const CheckoutStack = () => {
  return (
    <>
      <StatusBar style='light' />
      <Stack
        screenOptions={{
          contentStyle: { flex: 1, padding: 16, backgroundColor: "#F0EBF8" },
          headerStyle: { backgroundColor: "#673AB8" },
          headerTitleStyle: { color: "white" },
          headerTintColor: "#F0EBF8"
        }}
      >
        <Stack.Screen
          name='index'
          options={{
            title: "Personal information"
          }} />
        <Stack.Screen
          name='delivery'
          options={{
            title: "Delivery information"
          }} />
        <Stack.Screen
          name='payment'
          options={{
            title: "Payment information"
          }} />
      </Stack>
    </>
  )
}

export default CheckoutStack