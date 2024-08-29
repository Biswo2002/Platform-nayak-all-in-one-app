import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  Box,
  Text,
  VStack,
  Image,
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioIcon,
  CircleIcon,
  HStack,
} from '@gluestack-ui/themed';
import {IMAGES} from '../../assets';
import {FONTS} from '../../styles';

const genderOptions = [
  {
    key: 'Service_Expert',
    label: 'Service Expert',
    image: IMAGES?.SERVICE_EXPERT,
  },
  {
    key: 'Delivery_person',
    label: 'Delivery person',
    image: IMAGES?.DELIVERY_PERSON,
  },
];

const ServiceTypeInformation = () => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <Box flex={1} p={4} bg="white">
      <Text
        mt={'$10'}
        mb={'$8'}
        fontSize={'$md'}
        fontFamily={FONTS[400].normal}>
        Select Service type
      </Text>

      {genderOptions.map(option => (
        <LinearGradient
          key={option.key}
          colors={[
            selectedGender === option.key ? '#F5F1EC' : '#FFFFFF',
            selectedGender === option.key ? '#FFFFFF' : '#ffff',
          ]}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 1}}
          style={{borderRadius: 16, marginBottom: 18}}>
          <TouchableOpacity
            onPress={() => handleGenderSelect(option.key)}
            accessible={true}
            accessibilityLabel={option.label}
            style={{
              flexDirection: 'row',
              paddingLeft: 10,
              paddingTop: 10,
              overflow: 'hidden',
              borderWidth: 1,
              borderRadius: 16,
              borderColor:
                selectedGender === option.key ? '#ECC7A3' : '#B9B9B9',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
            }}>
            <HStack ml={'$6'} alignItems="center">
              <RadioGroup
                value={selectedGender === option.key ? option.key : ''}>
                <Radio
                  value={option.key}
                  size="md"
                  isInvalid={false}
                  isDisabled={false}>
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} size="xs" color="#ECC7A3" />
                  </RadioIndicator>
                </Radio>
              </RadioGroup>
              <Text
                fontSize={'$sm'}
                ml={'$4'}
                fontFamily={FONTS[400].normal}
                color={selectedGender === option.key ? '#FF8000' : '#000000'}>
                {option.label}
              </Text>
            </HStack>
            <Image
              source={option?.image}
              alt={option.label}
              width={100}
              height={99}
            />
          </TouchableOpacity>
        </LinearGradient>
      ))}
    </Box>
  );
};

export default ServiceTypeInformation;
