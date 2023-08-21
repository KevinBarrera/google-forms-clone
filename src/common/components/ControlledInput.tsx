import { View } from 'react-native'
import React from 'react'

import { Controller, Control } from "react-hook-form";
import { TextInput, HelperText, useTheme } from "react-native-paper";

type ControlledInputProps = {
  control: Control,
  name: string,
} & React.ComponentProps<typeof TextInput>

const ControlledInput = ({ control, name, ...textInputProps }: ControlledInputProps) => {
  const theme = useTheme();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error, invalid }
      }) => (
        <View>
          <TextInput
            {...textInputProps}
            style={{ backgroundColor: theme.colors.background }}

            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={invalid}
          />
          <HelperText type='error' visible={invalid}>{error?.message}</HelperText>
        </View>
      )}
    />
  )
}

export default ControlledInput