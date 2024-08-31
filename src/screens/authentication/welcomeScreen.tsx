import React, {useEffect, useState} from 'react';
import {
  Box,
  Text,
  Switch,
  Image,
  Center,
  ScrollView,
  HStack,
} from '@gluestack-ui/themed';
import {IMAGES} from '../../assets';
import {FONTS} from '../../styles';
import {useAppContext} from '../../contexts';
import {HEIGHT, WIDTH} from '../../utils';
import {Btn} from '../../components/core';
import {useNavigation} from '@react-navigation/native';
import {PublicNavigationProps} from '../../routes/public/types';
import {TouchableOpacity} from 'react-native';

export default function WelcomeScreen() {
  const {isDarkMode, setIsDarkMode} = useAppContext();
  const {navigate} = useNavigation<PublicNavigationProps>();
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const fullText =
    'Nayak - Shop Beyond BoundariesDiscover Nayak, where shopping transcends the ordinary. From the latest trends to unique finds, our platform delivers a seamless experience with a diverse range of products. Committed to quality, affordability, and convenience, Nayak is your ultimate destination for innovative retail solutions and exceptional customer satisfaction. Explore and shop beyond boundaries with Nayak.';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const interval = setInterval(() => {
        setDisplayedText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 10); // Adjust typing speed by changing the interval duration
      return () => clearInterval(interval);
    } else {
      // Reset the text after a short delay
      setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 50000); // Adjust delay before restarting typing
    }
  }, [index]);

  return (
    <Box flex={1} bg={isDarkMode ? '#000' : '$coolGray100'}>
      <Box
        px={'$4'}
        py={'$3'}
        bg={isDarkMode ? '#000' : '#fff'}
        softShadow="2"
        borderBottomRightRadius={20}
        borderBottomLeftRadius={20}>
        <Image
          source={IMAGES.WELCOME2}
          width={WIDTH}
          height={HEIGHT / 1.8}
          alt="LOGO"
          resizeMode="contain"
        />
        <Box px={'$4'}>
          <Text
            fontSize={14}
            fontFamily={FONTS[400].normal}
            lineHeight={20}
            textAlign="justify"
            color={!isDarkMode ? '$coolGray800' : 'red'}>
            {displayedText}
          </Text>
        </Box>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          px={'$4'}
          pt={'$4'}>
          <TouchableOpacity
            onPress={() => {
              navigate('OnboardingScreen');
            }}>
            <Text
              fontSize={14}
              fontFamily={FONTS[600].normal}
              lineHeight={20}
              textAlign="justify"
              color={'$blue600'}
              underline>
              Skip
            </Text>
          </TouchableOpacity>
          <Switch
            isChecked={isDarkMode}
            onToggle={toggleDarkMode}
            value={isDarkMode}
          />
        </HStack>
      </Box>
      <Center mt={'$10'}>
        <Image
          source={IMAGES.LOGO}
          width={WIDTH / 1.6}
          height={HEIGHT / 8}
          alt="LOGO"
          resizeMode="contain"
        />
      </Center>
    </Box>
  );
}
