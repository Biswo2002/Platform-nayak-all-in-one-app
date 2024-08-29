import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  Box,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import AppIcon from '../../components/core/AppIcon';
import {useAppContext} from '../../contexts';
import {COLORS, FONTS} from '../../styles';
import {IMAGES} from '../../assets';
import {HEIGHT} from '../../utils';

// Define the type for each drawer item
interface DrawerItem {
  id: string;
  title: string;
  iconName: string;
  iconLib: 'AntDesign' | 'MaterialCommunityIcons' | 'Feather' | 'MaterialIcons';
  onPress: () => void;
}

// Create a mapping object for icon components
const ICON_MAP = {
  AntDesign: (iconName: string, iconProps: any) => (
    <AppIcon AntDesignName={iconName} {...iconProps} />
  ),
  MaterialCommunityIcons: (iconName: string, iconProps: any) => (
    <AppIcon MaterialCommunityIconsName={iconName} {...iconProps} />
  ),
  Feather: (iconName: string, iconProps: any) => (
    <AppIcon FeatherName={iconName} {...iconProps} />
  ),
  MaterialIcons: (iconName: string, iconProps: any) => (
    <AppIcon MaterialIconsName={iconName} {...iconProps} />
  ),
};

const CustomDrawer: React.FC = () => {
  const {setIsLoggedIn} = useAppContext();
  const [active, setActive] = useState<string | null>(null);

  // Define header and footer items
  const drawerItems: {header: DrawerItem[]; footer: DrawerItem[]} = {
    header: [
      {
        id: '1',
        title: 'My Profile',
        iconName: 'user',
        iconLib: 'AntDesign',
        onPress: () => {},
      },
      {
        id: '2',
        title: 'Notification',
        iconName: 'bell-badge-outline',
        iconLib: 'MaterialCommunityIcons',
        onPress: () => {},
      },
      {
        id: '3',
        title: 'Order History',
        iconName: 'shopping-bag',
        iconLib: 'Feather',
        onPress: () => {},
      },
      {
        id: '4',
        title: 'Date and Time Setting',
        iconName: 'timer-cog-outline',
        iconLib: 'MaterialCommunityIcons',
        onPress: () => {},
      },
    ],
    footer: [
      {
        id: '5',
        title: 'Settings',
        iconName: 'settings',
        iconLib: 'Feather',
        onPress: () => {},
      },
      {
        id: '6',
        title: 'Help and Complain',
        iconName: 'support-agent',
        iconLib: 'MaterialIcons',
        onPress: () => {},
      },
      {
        id: '7',
        title: 'Logout',
        iconName: 'logout',
        iconLib: 'AntDesign',
        onPress: () => setIsLoggedIn(false),
      },
    ],
  };

  // Render each drawer item
  const renderDrawerItem = (item: DrawerItem) => {
    const IconComponent = ICON_MAP[item.iconLib];
    const iconProps = {
      size: 20,
      color: active === item.id ? COLORS?.DrawerActiveIcon : COLORS?.DrawerIcon,
    };

    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          item.onPress();
          setActive(item.id);
        }}
        style={{
          backgroundColor: active === item.id ? '#F5F1FF' : COLORS.textWhite,
          overflow: 'hidden',
          marginVertical: 3,
          marginHorizontal: 19,
          paddingVertical: 6,
          borderRadius: 5,
          elevation: active === item.id ? 2 : 0,
        }}>
        <HStack alignItems="center" px={'$4'} py={'$2.5'}>
          <Box ml={2} justifyContent="center" alignItems="center">
            {IconComponent(item.iconName, iconProps)}
          </Box>
          <Text
            px={'$2'}
            fontFamily={FONTS[400].normal}
            fontSize={'$sm'}
            color={
              active === item.id ? COLORS?.DrawerActiveIcon : '$blueGray700'
            }>
            {item.title}
          </Text>
        </HStack>
      </TouchableOpacity>
    );
  };

  return (
    <Box flex={1} bg={COLORS.textWhite} softShadow="2">
      {/* Header Component */}
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Center my={'$5'}>
            <Image
              h={HEIGHT / 8}
              w="100%"
              source={IMAGES.LOGO}
              alt="LOGO"
              resizeMode="contain"
            />
          </Center>
        )}
        data={drawerItems.header}
        renderItem={({item}: any) => renderDrawerItem(item)}
        keyExtractor={(item: any) => item.id}
      />
      {/* Footer Component */}
      <VStack borderColor="$coolGray300" borderBottomWidth={1}>
        {drawerItems.footer?.map(item => renderDrawerItem(item))}
      </VStack>
      {/* Profile Section */}
      <HStack px={'$5'} my={'$9'} alignItems="center">
        <Pressable>
          <Image
            h={56}
            w={56}
            source={IMAGES.USER}
            alt="LOGO"
            resizeMode="contain"
          />
        </Pressable>
        <Box ml={'$4'}>
          <Text
            fontSize={'$sm'}
            color="#000"
            fontFamily={FONTS[500].normal}
            w={'75%'}
            numberOfLines={2}>
            Biswopaban Nayak
          </Text>
          <Text
            fontSize={'$xs'}
            color="#000"
            mt={'$1'}
            fontFamily={FONTS[300].normal}>
            nayak.biswo@sevapartner.com
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default CustomDrawer;
