import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Button, Card, RadioButton, HelperText, useTheme } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeliveryInfoSchema, DeliveryInformation } from '../../src/schema/checkout.schema';
import ControlledInput from '../../src/common/components/ControlledInput';
import { useCheckoutContext } from '../../src/contexts/CheckoutContext';

const Delivery = () => {
  const { control, handleSubmit } = useForm<DeliveryInformation>({
    resolver: zodResolver(DeliveryInfoSchema),
    defaultValues: { shipping: "free" },
  })

  const router = useRouter();
  const theme = useTheme();

  const { setDeliveryInfo } = useCheckoutContext();

  const handleNavigation = (data: DeliveryInformation) => {
    setDeliveryInfo(data);
    router.push("/checkout/payment")
  };

  return (
    <ScrollView contentContainerStyle={{ gap: 16, maxWidth: 500, width: "100%", alignSelf: "center" }} showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Deliver address" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 8 }}>
          <ControlledInput
            control={control}
            name="city"
            label="City"
            placeholder="New York"
          />
          <ControlledInput
            control={control}
            name="postalCode"
            label="Postal Code"
            placeholder="12345"
          />
          <ControlledInput
            control={control}
            name="address"
            label="Address"
            placeholder="Bank street #303, Apt. 41"
          />
        </Card.Content>
      </Card>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Shipping options" titleVariant='titleLarge' />
        <Card.Content>
          <Controller
            control={control}
            name="shipping"
            render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
              <View>
                <RadioButton.Group value={value} onValueChange={onChange}>
                  <RadioButton.Item label='Free' value='free' />
                  <RadioButton.Item label='Fast' value='fast' />
                  <RadioButton.Item label='Same day' value='same_day' />
                </RadioButton.Group>
                <HelperText type='error' visible={invalid}>{error?.message}</HelperText>
              </View>
            )}
          />
        </Card.Content>
      </Card>
      <Button onPress={handleSubmit(handleNavigation)} mode='contained'>Next</Button>
    </ScrollView>
  )
}

export default Delivery

const styles = StyleSheet.create({})