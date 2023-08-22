import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { Button, Card, Checkbox, useTheme } from "react-native-paper";
import { useRouter } from 'expo-router';
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentInfoSchema, PaymentInformation } from '../../src/schema/checkout.schema';
import ControlledInput from '../../src/common/components/ControlledInput';

const Payment = () => {
  const { control, handleSubmit } = useForm<PaymentInformation>({
    resolver: zodResolver(PaymentInfoSchema)
  })

  const router = useRouter();
  const theme = useTheme();

  const handleSubmitForm = () => {
    console.log("Some submit logic executed");
    router.push("/");
  };

  return (
    <ScrollView contentContainerStyle={{ gap: 16, maxWidth: 500, width: "100%", alignSelf: "center" }} showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Payment details" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 8 }}>
          <ControlledInput
            control={control}
            name="cardNumber"
            label="Card number"
            placeholder='1234 2345 3456 4567'
          />
          <View style={{ flexDirection: "row", gap: 16 }}>
            <ControlledInput
              control={control}
              name="expirationDate"
              label="Expiration date"
              placeholder='mm/yyyy'
              style={{ backgroundColor: theme.colors.background, flex: 5 }}
            />
            <ControlledInput
              control={control}
              name="securityCode"
              label="Security code"
              placeholder='0000'
              style={{ backgroundColor: theme.colors.background, flex: 4 }}
            />
          </View>
          <Controller
            control={control}
            name="saveInfo"
            render={({ field: { value, onChange } }) => (
              <Checkbox.Item
                label='Save payment information'
                status={value ? "checked" : "unchecked"}
                onPress={() => onChange(!value)}
              />
            )}
          />
        </Card.Content>
      </Card>
      <Button onPress={handleSubmit(handleSubmitForm)} mode='contained'>Submit</Button>
    </ScrollView>
  )
}

export default Payment

const styles = StyleSheet.create({})