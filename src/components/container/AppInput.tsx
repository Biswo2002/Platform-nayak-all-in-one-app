import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {View, TextInput, Text} from 'react-native'; // Assuming standard React Native components

type Props = {
  input: {
    key: string;
    label?: string;
    placeholder: string;
    icon?: any; // Adjust type based on your AppIcon component
    rules: Object;
    inputProps?: any; // Adjust as per your requirements
    value?: any;
  };
  TextColor?: string;
  BorderColor?: string;
  rounded?: boolean;
  paddingBottom?: number;
  variant?: string;
  fontFamily?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  errorMessage?: string;
  backgroundColor?: string;
  marginBottom?: any;
  width?: any;
  padding?: any;
};

export default function AppInput({
  paddingBottom,
  errorMessage,
  BorderColor,
  isDisabled,
  fontFamily,
  TextColor,
  isInvalid,
  input,
  variant,
  marginBottom,
  rounded,
  backgroundColor,
  width,
  padding,
}: Props): JSX.Element {
  const {control} = useForm();

  return (
    <View>
      <Controller
        control={control}
        name={input.key}
        rules={input.rules}
        render={({field: {onBlur, onChange, value}}) => (
          <View>
            <View style={{marginBottom: marginBottom ? marginBottom : 8}}>
              {input.label && (
                <Text
                  style={{
                    fontFamily: fontFamily ? fontFamily : 'defaultFont',
                    color: TextColor ? TextColor : '#9ca3af',
                    paddingBottom: paddingBottom ? paddingBottom : 0,
                  }}>
                  {input.label}
                </Text>
              )}
            </View>
            <TextInput
              placeholder={input.placeholder}
              placeholderTextColor={'#6b7280'}
              style={{
                width: width ? width : '100%',
                borderColor: BorderColor ? BorderColor : '#151515',
                borderRadius: rounded ? 8 : 0, // Example radius, adjust as needed
                borderWidth: 1,
                padding: padding ? padding : 12,
                color: '#000', // Example text color
                fontFamily: fontFamily ? fontFamily : 'defaultFont',
                backgroundColor: backgroundColor ? backgroundColor : '#ffff',
              }}
              editable={!isDisabled}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              {...input.inputProps}
            />
            {isInvalid && (
              <View style={{marginTop: 4}}>
                <Text style={{color: '#f00', fontSize: 12}}>
                  {errorMessage}
                </Text>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}
