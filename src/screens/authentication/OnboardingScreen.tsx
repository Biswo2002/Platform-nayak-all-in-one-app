import React, {useState, useRef, useCallback} from 'react';
import {Box, Text, HStack, FlatList, Image} from '@gluestack-ui/themed';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PublicNavigationProps} from '../../routes/public/types';
import {HEIGHT, WIDTH} from '../../utils';
import {IMAGES} from '../../assets';
import {FONTS} from '../../styles';
import {COLORS} from '../../styles';

export default function OnboardingScreen() {
  const flatListRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {navigate} = useNavigation<PublicNavigationProps>();

  const sections = [
    {
      title: 'Welcome to Our App!',
      description:
        'Discover a world of features and enjoy a seamless experience with our app.',
    },
    {
      title: 'Easy Navigation',
      description:
        'Navigate through the app effortlessly with our intuitive interface.',
    },
    {
      title: 'Personalized Experience',
      description: 'Get recommendations and content tailored just for you.',
    },
    {
      title: '24/7 Support',
      description:
        'We are here to assist you anytime with our dedicated support team.',
    },
  ];

  // Define viewabilityConfig outside of render
  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  // Use useCallback to avoid creating a new function on each render
  const handleViewableItemsChanged = useCallback(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }, []);

  const handleContinue = () => {
    if (currentIndex === sections.length - 1) {
      // Navigate to the Login screen if on the last section
      navigate('Login');
    } else {
      // Scroll to the next section if not on the last section
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }
  };

  return (
    <Box flex={1} bg={'white'}>
      <FlatList
        data={sections}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: any) => (
          <Box
            width={WIDTH}
            flex={1}
            alignItems="center"
            justifyContent="center"
            px={4}>
            <Image
              source={IMAGES.LOGO}
              width={WIDTH - 40}
              height={HEIGHT / 2.5}
              alt="Onboarding Image"
              resizeMode="contain"
            />
            <Box mt={4} alignItems="center">
              <Text
                fontSize={24}
                fontFamily={FONTS[600].normal}
                color={'#000'}
                textAlign="center"
                mb={2}>
                {item.title}
              </Text>
              <Text
                fontSize={16}
                fontFamily={FONTS[400].normal}
                color={COLORS.textSecondary}
                textAlign="center">
                {item.description}
              </Text>
            </Box>
          </Box>
        )}
        onViewableItemsChanged={handleViewableItemsChanged}
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
      />
      <Box alignItems="center" justifyContent="center" mb={4}>
        <HStack mb={4}>
          {sections.map((_, index) => (
            <Box
              key={index}
              width={12}
              height={12}
              borderRadius={200}
              bg={
                currentIndex === index
                  ? COLORS.primary[600]
                  : COLORS.primary[500]
              }
            />
          ))}
        </HStack>
        <TouchableOpacity
          onPress={handleContinue}
          style={{
            backgroundColor: COLORS.primary[600],
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            fontSize={16}
            fontFamily={FONTS[600].normal}
            color="#fff"
            textAlign="center">
            {currentIndex === sections.length - 1 ? 'Get Started' : 'Continue'}
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
}
