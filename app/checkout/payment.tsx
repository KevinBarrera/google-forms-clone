import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Button, Card, TextInput, Checkbox, useTheme } from "react-native-paper";
import { useRouter } from 'expo-router';

const Payment = () => {
  const router = useRouter();
  const theme = useTheme();

  const handleSubmit = () => {
    console.log("Some submit logic executed");
    router.push("/");
  };

  return (
    <ScrollView contentContainerStyle={{ gap: 16, maxWidth: 500, width: "100%", alignSelf: "center" }} showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Payment details" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 8 }}>
          <TextInput placeholder='1234 2345 3456 4567' label="Card number" style={{ backgroundColor: theme.colors.background }} />
          <View style={{ flexDirection: "row", gap: 16 }}>
            <TextInput placeholder='mm/yyyy' label="Expiration date" style={{ backgroundColor: theme.colors.background, flex: 5 }} />
            <TextInput placeholder='1234' label="Security code" style={{ backgroundColor: theme.colors.background, flex: 4 }} />
          </View>
          <Checkbox.Item label='Save payment information' status='checked' />
        </Card.Content>
      </Card>
      <Button onPress={handleSubmit} mode='contained'>Submit</Button>
    </ScrollView>
  )
}

export default Payment

const styles = StyleSheet.create({})