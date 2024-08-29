import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  Box,
  Center,
  Text,
  FormControl,
  Input,
  InputField,
  VStack,
  ScrollView,
} from '@gluestack-ui/themed';
import {AppRoutesTypes, PublicNavigationProps} from '../../routes/public/types';
import AppIcon from '../../components/core/AppIcon';
import {COLORS, FONTS} from '../../styles';
import {Btn} from '../../components/core';

type Props = NativeStackScreenProps<AppRoutesTypes, 'OTPVerificationScreen'>;

export default function OTPVerificationScreen({route: {params}}: Props) {
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const {navigate, goBack} = useNavigation<PublicNavigationProps>();
  const Number = params?.phoneNumber;
  return (
    <Box flex={1} bg="#fff" px={16}>
      <TouchableOpacity style={{marginTop: 24}} onPress={goBack}>
        <AppIcon AntDesignName="arrowleft" size={20} color={'#000'} />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
        keyboardShouldPersistTaps={'always'}>
        <Center mt={'$32'}>
          <Text mt={'$5'} fontSize={'$2xl'} fontFamily={FONTS[600].normal}>
            Verification
          </Text>
        </Center>

        <VStack m={'$2'} mt={'$20'}>
          <Text fontSize={14} fontFamily={FONTS[400].normal} mb={'$2'}>
            {`Enter 4 digit code sent to you at ${Number}`}
          </Text>
          <FormControl isRequired mt={10}>
            <Input h={56} pl={'$5'} borderColor="#CECECE" borderWidth={1}>
              <InputField
                type="text"
                placeholder="Enter 4 digit OTP"
                value={phoneNumber}
                onChangeText={txt => setPhoneNumber(txt)}
                keyboardType="number-pad"
                fontSize={16}
                fontFamily={FONTS[400].normal}
                color="#1C1C1C"
                lineHeight={20}
                maxLength={4}
              />
            </Input>
          </FormControl>
        </VStack>
        <TouchableOpacity
          style={{
            marginLeft: 10,
            marginTop: 24,
          }}>
          <Text
            fontSize={14}
            fontFamily={FONTS[400].normal}
            color={COLORS.primaryC1}>
            Resend in 18 s
          </Text>
        </TouchableOpacity>
        <Btn
          gradientStyle={{
            marginHorizontal: 12,
            marginTop: '50%',
          }}
          disabled={!phoneNumber}
          action={() => navigate('RegistrationScreen')}
          text={''}>
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
    </Box>
  );
}
