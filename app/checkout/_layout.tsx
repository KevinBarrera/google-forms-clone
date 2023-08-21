import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { theme } from '../common/theme'

const CheckoutStack = () => {
  return (
    <>
      <StatusBar style='light' />
      <Stack
        screenOptions={{
          contentStyle: { flex: 1, padding: 16, backgroundColor: theme.colors.background.cloud },
          headerStyle: { backgroundColor: theme.colors.background.accent },
          headerTitleStyle: { color: theme.colors.white },
          headerTintColor: theme.colors.text.secondary
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