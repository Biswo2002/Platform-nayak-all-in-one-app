import React from 'react';
import {Box, Text} from '@gluestack-ui/themed';
import {FONTS} from '../../styles';
import AppInput from '../../components/container/AppInput';
export default function EmergencyInformation() {
  const inputKey = [
    {
      id: '0',
      key: 'Emergency_Contact_Name',
      placeholder: 'Emergency Contact Name',
      rules: {required: 'Name is required'},
    },
    {
      id: '1',
      key: 'Emergency_Contact_Number',
      placeholder: 'Emergency Contact Number',
      rules: {required: 'Name is required'},
    },
    {
      id: '2',
      key: 'Relationship',
      placeholder: 'Relationship',
      rules: {required: 'Name is required'},
    },
  ];
  return (
    <Box flex={1} p={4} bg="white">
      <Text mt={'$6'} mb={'$8'} fontSize={'$md'} fontFamily={FONTS[400].normal}>
        Emergency Details
      </Text>
      {inputKey?.map((i: any) => (
        <AppInput
          key={i.id} // Add key for mapping
          input={{
            key: i.key, // Replace with your input key
            placeholder: i.placeholder, // Placeholder text
            rules: i.rules, // Validation rules
          }}
          TextColor="#333"
          BorderColor="#ccc"
          rounded
          fontFamily={FONTS[400].normal}
          errorMessage={i.rules?.required} // Error message
          marginBottom={18}
          backgroundColor={'#f3f4f6'}
        />
      ))}
    </Box>
  );
}
