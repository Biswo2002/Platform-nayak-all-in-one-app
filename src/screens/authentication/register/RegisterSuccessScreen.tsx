import {Box, Center, Image, ScrollView, Text} from '@gluestack-ui/themed';
import {PrivateContainer} from '../../../components/container';
import React from 'react';
import {IMAGES} from '../../../assets';
import {FONTS} from '../../../styles';
import {Btn} from '../../../components/core';
import {HEIGHT, WIDTH} from '../../../utils';
import {useAppContext} from '../../../contexts';
export default function RegisterSuccessScreen() {
  const {setIsLoggedIn} = useAppContext();
  return (
    <PrivateContainer title="Registration" bg={'white'} hasBackIcon={true}>
      <ScrollView>
        <Center mt={'$5'}>
          <Image
            source={IMAGES.REGISTER_SUCCESS}
            w={WIDTH / 1.2}
            h={HEIGHT / 2}
            resizeMode="contain"
            alt="LOGO"
          />
        </Center>
        <Text
          alignItems="center"
          fontSize={36}
          textAlign="center"
          color="black"
          fontFamily={FONTS[600].normal}>
          Thank You!
        </Text>
        <Text
          alignItems="center"
          fontSize={17}
          mt={'$2'}
          textAlign="center"
          color="black"
          fontFamily={FONTS[500].normal}>
          Registration Successful
        </Text>
      </ScrollView>
      <Btn
        gradientStyle={{
          marginHorizontal: 12,
          height: 50,
          maxHeight: 100,
          marginVertical: 20,
        }}
        action={() => setIsLoggedIn(true)}
        text="">
        <Text
          style={{
            color: '#fff',
            fontFamily: FONTS[400].normal,
            fontSize: 15,
            paddingRight: 10,
          }}>
          Done
        </Text>
      </Btn>
    </PrivateContainer>
  );
}
