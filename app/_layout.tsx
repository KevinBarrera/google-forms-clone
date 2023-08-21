
import React from 'react'
import { Slot } from 'expo-router'

import { PaperProvider, MD3LightTheme } from "react-native-paper";

const theme = {
  ...MD3LightTheme,
  roundness: 1
}

const RootLayout = () => {
  return (
    <PaperProvider theme={theme}>
      <Slot />
    </PaperProvider>
  )
}

export default RootLayout