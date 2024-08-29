import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {COLORS, FONTS} from '../../styles';
import {Box, HStack, Image, Pressable, Text} from '@gluestack-ui/themed';
import {SafeAreaView} from '@gluestack-ui/themed';
import AppIcon from '../core/AppIcon';
import {IMAGES} from '../../assets';

type IconProps = {
  icon?: any;
  iconColor?: string;
  onPress?: () => void;
  side: 'LEFT' | 'RIGHT';
};

type Props = {
  title?: string;
  color?: string;
  image?: ImageSourcePropType;
  hasBackIcon?: boolean;
  icons?: IconProps[];
  notificationDot?: boolean;
  showBars?: boolean;
  _titleProps?: any;
  font?: any;
  bg?: any;
  topPadding?: any;
  softShadow?: any;
} & React.ComponentProps<typeof Box>;

const PrivateContainer: React.FC<Props> = ({
  children,
  color,
  hasBackIcon,
  title,
  icons = [],
  showBars,
  bg,
  font,
  softShadow,
  notificationDot,
  topPadding,
}) => {
  const navigation = useNavigation();
  const {canGoBack, goBack, dispatch} = navigation;
  const leftIcon = icons.find(_ => _.side === 'LEFT');
  const rightIcons = icons.filter(_ => _.side === 'RIGHT');

  return (
    <SafeAreaView
      flex={1}
      bg={bg ? bg : '$white'}
      px={topPadding ? topPadding : 16}>
      <Box bgColor={'white'}>
        <HStack
          bg={color ? color : bg}
          alignItems={'center'}
          justifyContent={'space-between'}
          py={'$6'}>
          <HStack alignItems={'center'} my={'$2'}>
            {hasBackIcon && (
              <Pressable
                onPress={() => {
                  if (leftIcon?.onPress) return leftIcon.onPress();
                  if (canGoBack()) return goBack();
                }}
                h={'$9'}
                w={'$9'}
                bgColor={'white'}
                justifyContent={'center'}>
                <AppIcon
                  AntDesignName="arrowleft"
                  size={20}
                  color={'#03053D'}
                />
              </Pressable>
            )}
            {showBars && (
              <Pressable
                onPress={() => {
                  dispatch(DrawerActions.openDrawer());
                }}>
                <AppIcon size={20} color={'#000'} OcticonsName="three-bars" />
              </Pressable>
            )}
            {title && (
              <Text
                color={'$blueGray900'}
                fontWeight={FONTS[400].normal}
                fontSize={font ? font : '$md'}
                width={'80%'}>
                {title}
              </Text>
            )}
          </HStack>
          <HStack alignItems={'center'}>
            {rightIcons.map((iconProps, i) => (
              <React.Fragment key={i}>
                <Pressable
                  bg={COLORS.textWhite}
                  h={'$12'}
                  alignItems="center"
                  justifyContent="center"
                  w={'$12'}
                  mx={'$1'}
                  softShadow={softShadow}
                  rounded={'$full'}
                  onPress={iconProps.onPress}>
                  {notificationDot ? (
                    <AppIcon
                      size={25}
                      color={COLORS.secondary[700]}
                      MaterialCommunityIconsName="bell-badge"
                    />
                  ) : (
                    <AppIcon
                      size={22}
                      color={
                        iconProps.iconColor
                          ? iconProps.iconColor
                          : COLORS.secondary
                      }
                      {...iconProps.icon}
                    />
                  )}
                </Pressable>
              </React.Fragment>
            ))}
          </HStack>
        </HStack>
      </Box>
      {children}
    </SafeAreaView>
  );
};

export default PrivateContainer;
