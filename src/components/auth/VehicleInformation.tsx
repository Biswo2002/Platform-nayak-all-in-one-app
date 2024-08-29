import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
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
  Pressable,
} from '@gluestack-ui/themed';
import {IMAGES} from '../../assets';
import {FONTS} from '../../styles';
import AppIcon from '../../components/core/AppIcon';
import AppInput from '../../components/container/AppInput';
import {DocumentPickerType} from '../../utils';
import {pickDocument} from '../../utils/PickDoc';

const genderOptions = [
  {
    key: 'Bike',
    label: 'Bike',
    image: IMAGES?.BIKE,
  },
  {
    key: 'Scooter',
    label: 'Scooter',
    image: IMAGES?.SCOOTER,
  },
];
const inputKey = [
  {
    id: '0',
    key: 'Vehicle_name',
    placeholder: 'Vehicle Name',
    rules: {required: 'Name is required'},
  },
  {
    id: '1',
    key: 'Vehicle_number',
    placeholder: 'Vehicle Number',
    rules: {required: 'Name is required'},
  },
];
export default function VehicleInformation() {
  const [selectedVehicleInfo, setSelectedVehicleInfo] = useState<string | null>(
    null,
  );

  const handleVehicleSelect = (gender: string) => {
    setSelectedVehicleInfo(gender);
  };
  const [docPick, setDocPick] = useState<DocumentPickerType | any>([]);
  const documentPicker = useCallback(() => {
    pickDocument(setDocPick);
  }, []);
  return (
    <Box flex={1} p={4} bg="white">
      <Text
        mt={'$10'}
        mb={'$8'}
        fontSize={'$md'}
        fontFamily={FONTS[400].normal}>
        Vehicle Details
      </Text>

      {genderOptions.map(option => (
        <LinearGradient
          key={option.key}
          colors={[
            selectedVehicleInfo === option.key ? '#F5F1EC' : '#FFFFFF',
            selectedVehicleInfo === option.key ? '#FFFFFF' : '#ffff',
          ]}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 1}}
          style={{borderRadius: 16, marginBottom: 18}}>
          <TouchableOpacity
            onPress={() => handleVehicleSelect(option.key)}
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
                selectedVehicleInfo === option.key ? '#ECC7A3' : '#B9B9B9',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
            }}>
            <HStack ml={'$6'} alignItems="center">
              <RadioGroup
                value={selectedVehicleInfo === option.key ? option.key : ''}>
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
                  selectedVehicleInfo === option.key ? '#FF8000' : '#000000'
                }>
                {option.label}
              </Text>
            </HStack>
            <Image
              source={option?.image}
              alt={option.label}
              width={112}
              resizeMode="contain"
              height={99}
            />
          </TouchableOpacity>
        </LinearGradient>
      ))}
      <Pressable
        onPress={documentPicker}
        alignItems="center"
        justifyContent="center"
        bg="$coolGray100"
        borderWidth={1}
        mt={'$2'}
        rounded={8}
        borderColor="#ccc"
        p={'$10'}>
        <AppIcon FontAwesome5Name="image" size={20} color={'#343434'} />
        <Text
          fontSize={'$sm'}
          mt={'$2'}
          color={'#333'}
          fontFamily={FONTS[400].normal}>
          {docPick?.length === 0 ? 'Upload License Photo' : docPick?.name}
        </Text>
      </Pressable>
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
