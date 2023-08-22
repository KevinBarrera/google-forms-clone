import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { theme } from '../../src/common/theme';
import CheckoutContextProvider from '../../src/contexts/CheckoutContext';

const CheckoutStack = () => {
  return (
    <CheckoutContextProvider>
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
          name='personal'
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
    </CheckoutContextProvider>
  )
}

export default CheckoutStack