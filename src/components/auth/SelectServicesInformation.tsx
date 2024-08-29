import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Box,
  Text,
  HStack,
  Checkbox,
  CheckboxIcon,
  CheckIcon,
  CheckboxIndicator,
} from '@gluestack-ui/themed';
import {FONTS} from '../../styles';

const genderOptions = [
  {
    key: 'House_Cleaning',
    label: 'House Cleaning',
  },
  {
    key: 'Plumbing',
    label: 'Plumbing',
  },
  {
    key: 'Electrical',
    label: 'Electrical',
  },
  {
    key: 'HVAC',
    label: 'HVAC (Heating, Ventilation, and Air Conditioning)',
  },
  {
    key: 'Pest_Control',
    label: 'Pest Control',
  },
  {
    key: 'Landscaping_and_Lawn_Care',
    label: 'Landscaping and Lawn Care',
  },
  {
    key: 'Painting',
    label: 'Painting',
  },
];

const SelectServicesInformation = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleServiceSelection = (serviceKey: string) => {
    if (selectedServices.includes(serviceKey)) {
      setSelectedServices(selectedServices.filter(item => item !== serviceKey));
    } else {
      setSelectedServices([...selectedServices, serviceKey]);
    }
  };

  const isServiceSelected = (serviceKey: string) =>
    selectedServices.includes(serviceKey);

  return (
    <Box flex={1} p={4} bg="white">
      <Text
        mt={'$10'}
        mb={'$8'}
        fontSize={'$md'}
        fontFamily={FONTS[400].normal}>
        Select your services
      </Text>

      {genderOptions.map(option => (
        <LinearGradient
          key={option.key}
          colors={[
            isServiceSelected(option.key) ? '#F5F1EC' : '#FFFFFF',
            isServiceSelected(option.key) ? '#FFFFFF' : '#FFFFFF',
          ]}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 1}}
          style={{borderRadius: 16, marginBottom: 18}}>
          <TouchableOpacity
            onPress={() => toggleServiceSelection(option.key)}
            accessible={true}
            accessibilityLabel={option.label}
            style={{
              flexDirection: 'row',
              padding: 16,
              overflow: 'hidden',
              borderWidth: 1,
              borderRadius: 8,
              borderColor: isServiceSelected(option.key)
                ? '#ECC7A3'
                : '#B9B9B9',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <HStack alignItems="center">
              <Checkbox
                size="md"
                isInvalid={false}
                isDisabled={false}
                value={isServiceSelected(option.key) ? 'selected' : ''}
                // colorScheme="orange"
                accessibilityLabel={option.label}>
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
              </Checkbox>

              <Text
                fontSize={'$sm'}
                ml={'$4'}
                fontFamily={FONTS[400].normal}
                color={
                  isServiceSelected(option.key) ? '$coolGray600' : '#000000'
                }>
                {option.label}
              </Text>
            </HStack>
          </TouchableOpacity>
        </LinearGradient>
      ))}
    </Box>
  );
};

export default SelectServicesInformation;
