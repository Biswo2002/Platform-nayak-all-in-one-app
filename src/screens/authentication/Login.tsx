import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  Box,
  Center,
  Image,
  Text,
  FormControl,
  Input,
  InputField,
  Pressable,
  VStack,
  HStack,
  ScrollView,
  useToast,
} from '@gluestack-ui/themed';
import CountryPicker from '../../components/core/CountryPicker';
import {PublicNavigationProps} from '../../routes/public/types';
import AppIcon from '../../components/core/AppIcon';
import {Btn} from '../../components/core';
import {IMAGES} from '../../assets';
import {FONTS} from '../../styles';
import {WIDTH} from '../../utils';
import ToastComponent from '../../components/core/ToastComponent';

export default function Login() {
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const {navigate} = useNavigation<PublicNavigationProps>();
  const [selectedCountry, setSelectedCountry] = useState({
    code: 'IN',
    name: 'India',
    phone: '91',
  });
  const toast = useToast();

  const showToast = (title: string, description: string) => {
    toast.show({
      placement: 'bottom',
      render: ({id}) => (
        <ToastComponent
          key={id}
          title={title}
          description={description}
          action="error"
          variant="accent"
        />
      ),
    });
  };

  const handlePhoneNumberChange = (txt: string) => {
    if (/^\d*$/.test(txt)) {
      setPhoneNumber(txt);
      //   if (txt.length < 10 && txt.length > 10) {
      //     showToast(
      //       'Invalid Phone Number',
      //       'Phone Enter number at least 10 digits.',
      //     );
      //   }
    } else {
      showToast('Invalid Input', 'Please enter only numbers.');
    }
  };

  const handleCountrySelect = (country: any) => {
    setSelectedCountry(country);
    setShowCountryPicker(false);
  };

  const handleContinue = () => {
    if (phoneNumber.length >= 10) {
      navigate('OTPVerificationScreen', {phoneNumber});
    } else {
      showToast('Invalid Phone Number', 'Please enter a valid phone number.');
    }
  };

  return (
    <Box flex={1} bg="#fff" px={16}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
        keyboardShouldPersistTaps="always">
        <Center mt={117}>
          <Image
            source={IMAGES.LOGO}
            w="$32"
            h="$32"
            resizeMode="contain"
            alt="LOGO"
          />
          <Text mt="$5" fontSize={16} fontFamily={FONTS[400].normal}>
            Services
          </Text>
        </Center>

        <VStack m="$2" mt="$20">
          <Text fontSize={15} fontFamily={FONTS[400].normal} mb="$2">
            Enter your Mobile Number
          </Text>
          <FormControl
            isRequired
            mt={1}
            flexDirection="row"
            justifyContent="space-between">
            <Pressable
              width={WIDTH / 4}
              flexDirection="row"
              alignItems="center"
              borderWidth="$1"
              justifyContent="space-between"
              borderColor="#CECECE"
              rounded={4}
              py="$4"
              pr="$2"
              onPress={() => setShowCountryPicker(true)}>
              <HStack>
                <Image
                  source={{
                    uri: `https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`,
                  }}
                  alt="India"
                  w="$6"
                  h="$5"
                  mx="$1"
                  key="$1"
                />
                <Text pl="$1">+{selectedCountry.phone}</Text>
              </HStack>
              <AppIcon AntDesignName="caretdown" size={14} color="#000" />
            </Pressable>
            <Input
              width={WIDTH / 1.65}
              h={56}
              pl="$5"
              borderColor="#CECECE"
              borderWidth={1}>
              <InputField
                type="text"
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
                keyboardType="number-pad"
                fontSize={16}
                fontFamily={FONTS[400].normal}
                color="#1C1C1C"
                lineHeight={20}
                maxLength={10}
              />
            </Input>
          </FormControl>
        </VStack>

        <TouchableOpacity style={{marginLeft: 10, marginTop: 25}}>
          <Text
            fontSize={14}
            fontFamily={FONTS[400].normal}
            color="$coolGray400">
            By clicking Continue, you agree to our
          </Text>
          <Text
            fontSize={14}
            fontFamily={FONTS[400].normal}
            color="$coolGray800">
            terms & conditions
          </Text>
        </TouchableOpacity>

        <Btn
          gradientStyle={{
            marginHorizontal: 12,
            height: 50,
            maxHeight: 100,
            marginTop: '20%',
          }}
          action={handleContinue}
          text="">
          <Text
            style={{
              color: '#fff',
              fontFamily: FONTS[400].normal,
              fontSize: 15,
              paddingRight: 10,
            }}>
            Continue
          </Text>
        </Btn>
      </ScrollView>

      <CountryPicker
        onClose={() => setShowCountryPicker(false)}
        onSelect={handleCountrySelect}
        visible={showCountryPicker}
      />
    </Box>
  );
}
