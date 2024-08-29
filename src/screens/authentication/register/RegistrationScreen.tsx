import React, {useState} from 'react';
import {Center, Box, Text, ScrollView} from '@gluestack-ui/themed';
import {PrivateContainer} from '../../../components/container';
import {
  BasicsInformation,
  EmergencyInformation,
  GenderInformation,
  IdentityAndBankInformation,
  PreferAreaInformation,
  SelectServicesInformation,
  ServiceTypeInformation,
  VehicleInformation,
} from '../../../components';
import {Btn} from '../../../components/core';
import {FONTS} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {PublicNavigationProps} from '../../../routes/public/types';

const inputKey = [
  {
    id: '0',
    key: 'name',
    placeholder: 'Enter your name',
    rules: {required: 'Name is required'},
  },
  {
    id: '1',
    key: 'number',
    placeholder: 'Enter your Mobile Number',
    rules: {
      required: 'Mobile Number is required',
      pattern: {
        value: /^[0-9]{10}$/,
        message: 'Invalid Mobile Number',
      },
    },
  },
  {
    id: '2',
    key: 'whatsapp',
    placeholder: 'Enter your Whatsapp number',
    rules: {
      required: 'Whatsapp number is required',
      pattern: {
        value: /^[0-9]{10}$/,
        message: 'Invalid Whatsapp number',
      },
    },
  },
  {
    id: '3',
    key: 'email',
    placeholder: 'Enter your email',
    rules: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email address',
      },
    },
  },
  {
    id: '4',
    key: 'dob',
    placeholder: 'Enter your date of birth',
    rules: {required: 'Date of Birth is required'},
  },
];
const sections = [
  () => <BasicsInformation inputKey={inputKey} />,
  () => <GenderInformation />,
  () => <ServiceTypeInformation />,
  () => <SelectServicesInformation />,
  () => <VehicleInformation />,
  () => <EmergencyInformation />,
  () => <PreferAreaInformation />,
  () => <IdentityAndBankInformation />,
];
export default function RegistrationScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const {navigate} = useNavigation<PublicNavigationProps>();
  const handleNext = () => {
    if (activeIndex < sections.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0); // Reset to the first section after the last one
      navigate('RegisterSuccessScreen'); // Navigate to RegisterSuccessScreen
    }
  };

  const renderBars = () => {
    return sections.map((SectionComponent, index) => (
      <Box
        key={index}
        bg={index <= activeIndex ? '#2A3359' : '#D9D9D9'} // Blue up to activeIndex, gray after
        rounded={'$2xl'}
        w={44}
        h={6}
        mx={3}
        my={10}></Box>
    ));
  };

  const renderComponent = () => {
    const Component = sections[activeIndex];
    return <Component />;
  };

  return (
    <PrivateContainer title="Registration" bg={'white'} hasBackIcon={true}>
      <Center flexDirection={'row'} justifyContent="space-between">
        {renderBars()}
      </Center>
      <ScrollView showsVerticalScrollIndicator={false}>
        <>{renderComponent()}</>
      </ScrollView>
      <Btn
        gradientStyle={{
          marginHorizontal: 12,
          height: 50,
          maxHeight: 100,
          marginVertical: 20,
        }}
        action={handleNext}
        text="">
        <Text
          style={{
            color: '#fff',
            fontFamily: FONTS[400].normal,
            fontSize: 15,
            paddingRight: 10,
          }}>
          Next
        </Text>
      </Btn>
    </PrivateContainer>
  );
}
