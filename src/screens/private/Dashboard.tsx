import {
  Box,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Switch,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {PrivateContainer} from '../../components/container';
import React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../../styles';
import AppIcon from '../../components/core/AppIcon';
export default function Dashboard() {
  const calender = [
    {
      id: '0',
      date: 'Fri 31, May ',
      status: 'Working ',
    },
    {
      id: '1',
      date: 'Sat 01, Jun ',
      status: 'Working ',
    },
    {
      id: '2',
      date: 'Sat 02, Jun ',
      status: 'Working ',
    },
  ];
  const pendingTask = [
    {
      id: '0',
      img: 'https://img.freepik.com/free-photo/adorable-young-girl-sitting-chair-barber-using-hair-dryer-shape-her-hair-high-quality-photo_144627-76008.jpg?t=st=1720180526~exp=1720184126~hmac=c808c33b25bb22617847f5ed1415b93c76ff9265b7dddb237d61c7e50e0344ae&w=900',
      title: 'Salon, Spa Package',
      details: 'View Details',
    },
    {
      id: '1',
      img: 'https://img.freepik.com/free-photo/adorable-young-girl-sitting-chair-barber-using-hair-dryer-shape-her-hair-high-quality-photo_144627-76008.jpg?t=st=1720180526~exp=1720184126~hmac=c808c33b25bb22617847f5ed1415b93c76ff9265b7dddb237d61c7e50e0344ae&w=900',
      title: 'Haircut and Styling',
      details: 'View Details',
    },
    {
      id: '2',
      img: 'https://img.freepik.com/free-photo/adorable-young-girl-sitting-chair-barber-using-hair-dryer-shape-her-hair-high-quality-photo_144627-76008.jpg?t=st=1720180526~exp=1720184126~hmac=c808c33b25bb22617847f5ed1415b93c76ff9265b7dddb237d61c7e50e0344ae&w=900',
      title: 'Facial and Skin Care',
      details: 'View Details',
    },
    {
      id: '3',
      img: 'https://img.freepik.com/free-photo/adorable-young-girl-sitting-chair-barber-using-hair-dryer-shape-her-hair-high-quality-photo_144627-76008.jpg?t=st=1720180526~exp=1720184126~hmac=c808c33b25bb22617847f5ed1415b93c76ff9265b7dddb237d61c7e50e0344ae&w=900',
      title: 'Manicure and Pedicure',
      details: 'View Details',
    },
    {
      id: '4',
      img: 'https://img.freepik.com/free-photo/adorable-young-girl-sitting-chair-barber-using-hair-dryer-shape-her-hair-high-quality-photo_144627-76008.jpg?t=st=1720180526~exp=1720184126~hmac=c808c33b25bb22617847f5ed1415b93c76ff9265b7dddb237d61c7e50e0344ae&w=900',
      title: 'Massage Therapy',
      details: 'View Details',
    },
    {
      id: '5',
      img: 'https://img.freepik.com/free-photo/adorable-young-girl-sitting-chair-barber-using-hair-dryer-shape-her-hair-high-quality-photo_144627-76008.jpg?t=st=1720180526~exp=1720184126~hmac=c808c33b25bb22617847f5ed1415b93c76ff9265b7dddb237d61c7e50e0344ae&w=900',
      title: 'Body Scrub and Wrap',
      details: 'View Details',
    },
  ];

  return (
    <PrivateContainer
      bg={COLORS.gradientLow}
      showBars={true}
      // notificationDot={true}
      icons={[
        {
          icon: {FontistoName: 'bell'},
          iconColor: '#374151',
          onPress: () => Alert.alert('Home icon pressed'),
          side: 'RIGHT',
        },
      ]}>
      <Box my={'$12'} bg={COLORS?.gradientLow} px={16}>
        <Text fontSize={'$lg'} color="#000" fontFamily={FONTS[600].normal}>
          Partner Alex
        </Text>
        <Text
          my={'$4'}
          fontSize={'$md'}
          color="#000"
          fontFamily={FONTS[300].normal}>
          {'Your Today’s Earnings'}
        </Text>
        <Text fontSize={'$lg'} color="#000" fontFamily={FONTS[600].normal}>
          ₹ 00.00
        </Text>
      </Box>
      <Box flex={1}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: '20%',
            backgroundColor: '#fff',
          }}>
          {/* Second Section  */}
          <Box
            bg={COLORS.textWhite}
            px={16}
            mb={'$2'}
            softShadow="1"
            py={'$6'}
            rounded={8}>
            <HStack justifyContent="space-between">
              <Box>
                <Text
                  fontSize={'$lg'}
                  color="#000"
                  fontFamily={FONTS[400].normal}>
                  Status : Online
                </Text>
                <Text
                  pt={'$1'}
                  fontSize={'$sm'}
                  color="$coolGray500"
                  fontFamily={FONTS[500].normal}>
                  Open to work
                </Text>
              </Box>

              <VStack space="md">
                <Switch
                  sx={{
                    _light: {
                      props: {
                        trackColor: {
                          false: '$backgroundLight300',
                          true: '$emerald600',
                        },
                      },
                    },
                    _dark: {
                      props: {
                        trackColor: {
                          false: '$backgroundDark700',
                          true: '$emerald600',
                        },
                      },
                    },
                  }}
                />
              </VStack>
            </HStack>
            <HStack mt={'$8'} justifyContent="space-between">
              {calender?.map(i => (
                <React.Fragment key={i?.id}>
                  <Box rounded={16} bg={COLORS.gradientLow} p={'$3'}>
                    <Text
                      fontSize={'$sm'}
                      color="#000"
                      fontFamily={FONTS[500].normal}>
                      {i?.date}
                    </Text>
                    <Text
                      pt={'$1'}
                      fontSize={'$xs'}
                      color="$coolGray600"
                      fontFamily={FONTS[400].normal}>
                      {i?.status}
                    </Text>
                  </Box>
                </React.Fragment>
              ))}
              <TouchableOpacity
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 100,
                  backgroundColor: COLORS.statusBarColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AppIcon
                  FontAwesome5Name="calendar-alt"
                  size={20}
                  color={COLORS.textWhite}
                />
              </TouchableOpacity>
            </HStack>
          </Box>
          {/* Third Section  */}
          <Box
            bg={COLORS.textWhite}
            px={16}
            py={'$4'}
            rounded={8}
            overflow="hidden"
            flex={1}>
            <Text
              fontSize={'$lg'}
              pb={'$4'}
              color="#000"
              fontFamily={FONTS[400].normal}>
              Pending Task
            </Text>
            {pendingTask?.map((item: any, j: number) => (
              <React.Fragment key={j}>
                <HStack
                  p={'$2'}
                  bg={COLORS.textWhite}
                  softShadow="2"
                  m={'$2'}
                  borderRadius={8}>
                  <Image
                    source={{uri: item?.img}}
                    alt="SEVA"
                    h={'$20'}
                    w={'$20'}
                    rounded={8}
                    p={'$2'}
                  />
                  <Box ml={'$4'}>
                    <Text
                      fontSize={'$md'}
                      color="#000"
                      fontFamily={FONTS[400].normal}>
                      Salon , Spa package
                    </Text>
                    <Pressable
                      mt={'$4'}
                      flexDirection="row"
                      alignItems="center">
                      <Text
                        fontSize={'$sm'}
                        color={COLORS?.secondaryC2}
                        fontFamily={FONTS[400].normal}>
                        View Details
                      </Text>
                      <AppIcon
                        AntDesignName="caretright"
                        size={16}
                        color={COLORS.secondaryC2}
                      />
                    </Pressable>
                  </Box>
                </HStack>
              </React.Fragment>
            ))}
          </Box>
        </ScrollView>
      </Box>
      {/* First Section  */}
    </PrivateContainer>
  );
}
