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
  FormControl,
  Input,
  InputIcon,
  SearchIcon,
  InputField,
} from '@gluestack-ui/themed';
import {IMAGES} from '../../assets';
import {FONTS} from '../../styles';
export default function PreferAreaInformation() {
  const [selectedAreaInfo, setSelectedAreaInfo] = useState<string | null>(null);
  const info = [
    {
      key: 'Tollygunge',
      label: 'Tollygunge',
    },
    {
      key: 'Kolkata',
      label: 'Kolkata',
    },
    {
      key: 'Jadavpur',
      label: 'Jadavpur',
    },
    {
      key: 'Gariahat',
      label: 'Gariahat',
    },
    {
      key: 'Gariahat',
      label: 'Gariahat',
    },
  ];

  const handleInfoSelect = (gender: string) => {
    setSelectedAreaInfo(gender);
  };
  return (
    <Box flex={1} p={4} bg="white">
      <Text mt={'$6'} mb={'$8'} fontSize={'$md'} fontFamily={FONTS[400].normal}>
        Preferred Area
      </Text>
      <FormControl isRequired>
        <Input
          h={56}
          pl="$5"
          borderRadius={8}
          borderColor="#CECECE"
          borderWidth={1}
          alignItems="center">
          <InputIcon as={SearchIcon} color="$coolGray500" pl="$8" size="lg" />

          <InputField
            type="text"
            keyboardType="default"
            placeholder="Search for location"
            placeholderTextColor={'#87929E'}
            fontSize={16}
            fontFamily={FONTS[600].normal}
            color="#1C1C1C"
            lineHeight={20}
          />
        </Input>
      </FormControl>
      <Box
        mt={'$12'}
        overflow="hidden"
        borderWidth={1}
        borderColor="#B9B9B9"
        px={'$5'}
        borderRadius={16}>
        {info?.map((option, i) => (
          <React.Fragment key={i}>
            <LinearGradient
              key={option.key}
              colors={[
                selectedAreaInfo === option.key ? '#F5F1EC' : '#FFFFFF',
                selectedAreaInfo === option.key ? '#FFFFFF' : '#ffff',
              ]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}>
              <TouchableOpacity
                onPress={() => handleInfoSelect(option.key)}
                accessible={true}
                accessibilityLabel={option.label}
                style={{
                  flexDirection: 'row',
                  paddingLeft: 24,
                  borderBottomWidth: i !== 4 ? 1 : 0,
                  borderColor:
                    selectedAreaInfo === option.key ? '#ECC7A3' : '#E6E6E6',
                  alignItems: 'center',
                  padding: 18,
                }}>
                <HStack ml={'$6'} alignItems="center">
                  <RadioGroup
                    value={selectedAreaInfo === option.key ? option.key : ''}>
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
                    color={
                      selectedAreaInfo === option.key ? '#FF8000' : '#000000'
                    }>
                    {option.label}
                  </Text>
                </HStack>
              </TouchableOpacity>
            </LinearGradient>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
