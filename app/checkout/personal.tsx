import { useRouter } from 'expo-router'
import React from 'react'
import { ScrollView } from 'react-native'

import { Button, Card, useTheme } from "react-native-paper";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalInfoSchema, PersonalInformation } from '../../src/schema/checkout.schema';
import ControlledInput from '../../src/common/components/ControlledInput';
import { useCheckoutContext } from '../../src/contexts/CheckoutContext';

const PersonalDetails = () => {
  const { control, handleSubmit } = useForm<PersonalInformation>({
    resolver: zodResolver(PersonalInfoSchema)
  });

  const router = useRouter();
  const theme = useTheme()

  const { setPersonalInfo } = useCheckoutContext();

  const handleNavigation = (data: PersonalInformation) => {
    setPersonalInfo(data);
    router.push("/checkout/delivery");
  }

  return (
    <ScrollView contentContainerStyle={{ gap: 16, maxWidth: 500, width: "100%", alignSelf: "center" }} showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Persona information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 8 }}>
          <ControlledInput
            control={control}
            name="name"
            label="Name"
            placeholder="John Doe"
          />
          <ControlledInput
            control={control}
            name="email"
            label="Email"
            placeholder="your_email@email.com"
          />
        </Card.Content>
      </Card>
      <Button onPress={handleSubmit(handleNavigation)} mode="contained">Next</Button>
    </ScrollView>
  )
}

export default PersonalDetails
