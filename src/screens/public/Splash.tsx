import { Box, Center, Image, Text } from '@gluestack-ui/themed';
import { IMAGES } from '../../assets';
import React from 'react';
import { useEffect } from 'react';
import { PublicNavigationProps } from '../../routes/public/types';
import { useNavigation } from '@react-navigation/native';
import { FONTS } from '../../styles';

export default function Splash() {
  const { navigate } = useNavigation<PublicNavigationProps>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box bg="$white" h="$full">
      <Center w="$full" h="$full">
        <Image
          source={IMAGES.LOGO}
          w="$32"
          h="$32"
          resizeMode="contain"
          alt="LOGO"
        />
        <Text mt={'$5'} fontSize={16} fontFamily={FONTS[600].normal} >Services</Text>
      </Center>
    </Box>
  );
}
