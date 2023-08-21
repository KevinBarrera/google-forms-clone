import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import { Button, Card, TextInput, useTheme } from "react-native-paper";

const PersonalDetails = () => {
  const router = useRouter();
  const theme = useTheme()

  const handleNavigation = () => {
    router.push("/checkout/delivery");
  }

  return (
    <ScrollView contentContainerStyle={{ gap: 16, maxWidth: 500, width: "100%", alignSelf: "center" }} showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Persona information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 8 }}>
          <TextInput placeholder='Name' label="Name" style={{ backgroundColor: theme.colors.background }} />
          <TextInput placeholder='your_email@email.com' label="Email" style={{ backgroundColor: theme.colors.background }} />
        </Card.Content>
      </Card>
      <Button onPress={handleNavigation} mode="contained">Next</Button>
    </ScrollView>
  )
}

export default PersonalDetails

const styles = StyleSheet.create({
  h1: { fontSize: 40 }
})