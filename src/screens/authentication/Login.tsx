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
  Switch,
} from '@gluestack-ui/themed';
import CountryPicker from '../../components/core/CountryPicker';
import {PublicNavigationProps} from '../../routes/public/types';
import AppIcon from '../../components/core/AppIcon';
import {Btn} from '../../components/core';
import {IMAGES} from '../../assets';
import {COLORS, FONTS} from '../../styles';
import {WIDTH} from '../../utils';
import ToastComponent from '../../components/core/ToastComponent';
import {useAppContext} from '../../contexts';

export default function Login() {
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const {navigate} = useNavigation<PublicNavigationProps>();
  const [selectedCountry, setSelectedCountry] = useState({
    code: 'IN',
    name: 'India',
    phone: '91',
  });
  // const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  const {isDarkMode, setIsDarkMode} = useAppContext();
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box flex={1} bg={isDarkMode ? '#000' : '#fff'} px={16}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
        keyboardShouldPersistTaps="always">
        <Center mt={117}>
          {isDarkMode ? (
            <Image
              source={IMAGES.SECOND_LOGO}
              w="$56"
              h="$48"
              alt="LOGO"
              mb={'$6'}
              rounded={'$full'}
            />
          ) : (
            <Image
              source={IMAGES.THIRD_LOGO}
              w="$48"
              h="$48"
              alt="LOGO"
              mb={'$6'}
              rounded={'$lg'}
              resizeMode="contain"
            />
          )}
          <HStack mt={'$7'} alignItems="center">
            <Text
              fontSize={16}
              fontFamily={FONTS[400].normal}
              color={isDarkMode ? 'white' : COLORS.textSecondary}
              mr={'$5'}>
              Nayak - Shop Beyond Boundaries
            </Text>
            <Switch
              isChecked={isDarkMode}
              onToggle={toggleDarkMode}
              value={isDarkMode}
            />
          </HStack>
        </Center>

        <VStack m="$2" mt="$20">
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
              borderColor={isDarkMode ? 'white' : '#CECECE'}
              rounded={4}
              py="$4"
              pr="$2"
              onPress={() => setShowCountryPicker(true)}>
              <HStack>
                <Image
                  source={{
                    uri: `https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`,
                  }}
                  alt={selectedCountry.name}
                  w="$6"
                  h="$5"
                  mx="$1"
                  key="$1"
                />
                <Text pl="$1" color={isDarkMode ? 'white' : '#000'}>
                  +{selectedCountry.phone}
                </Text>
              </HStack>
              <AppIcon
                AntDesignName="caretdown"
                size={14}
                color={isDarkMode ? 'white' : '#000'}
              />
            </Pressable>
            <Input
              width={WIDTH / 1.65}
              h={56}
              pl="$5"
              borderColor={isDarkMode ? 'white' : '#CECECE'}
              borderWidth={1}>
              <InputField
                type="text"
                placeholder="Enter Phone Number"
                placeholderTextColor={isDarkMode ? 'white' : '#CECECE'}
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
                keyboardType="number-pad"
                fontSize={16}
                fontFamily={FONTS[400].normal}
                color={isDarkMode ? 'white' : '#1C1C1C'}
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
            color={isDarkMode ? 'white' : '$coolGray400'}>
            By clicking Continue, you agree to our
          </Text>
          <Text
            fontSize={14}
            fontFamily={FONTS[400].normal}
            color={isDarkMode ? 'white' : '$coolGray800'}>
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
