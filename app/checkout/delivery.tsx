import { StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { Button, Card, TextInput, RadioButton, useTheme } from "react-native-paper";

const Delivery = () => {
  const router = useRouter();
  const theme = useTheme();

  const [shipping, setShipping] = useState("free");

  const handleNavigation = () => {
    router.push("/checkout/payment")
  };

  return (
    <ScrollView contentContainerStyle={{ gap: 16, maxWidth: 500, width: "100%", alignSelf: "center" }} showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Deliver address" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 8 }}>
          <TextInput placeholder='City' label="City" style={{ backgroundColor: theme.colors.background }} />
          <TextInput placeholder='12345' label="Postal Code" style={{ backgroundColor: theme.colors.background }} />
          <TextInput placeholder='Address' label="Adress" style={{ backgroundColor: theme.colors.background }} />
        </Card.Content>
      </Card>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Shipping options" titleVariant='titleLarge' />
        <Card.Content>
          <RadioButton.Group value={shipping} onValueChange={setShipping}>
            <RadioButton.Item label='Free' value='free' />
            <RadioButton.Item label='Fast' value='fast' />
            <RadioButton.Item label='Same day' value='sameDay' />
          </RadioButton.Group>
        </Card.Content>
      </Card>
      <Button onPress={handleNavigation} mode='contained'>Next</Button>
    </ScrollView>
  )
}

export default Delivery

const styles = StyleSheet.create({})