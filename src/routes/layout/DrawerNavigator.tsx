import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Platform} from 'react-native';
import PrivateRoutes from '../private';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

// Define colors for the drawer
const Colors = {
  bg: '#FFFFFF',
  active: '#FFFFFF',
  inactive: '#FFFFFF',
  transparent: 'transparent',
};

const DrawerNavigator = () => {
  // Function to render drawer icons
  const renderDrawerIcon = (
    {focused, size}: {focused: boolean; size: number},
    iconName: string,
  ) => (
    <Icon
      name={iconName}
      size={size}
      color={focused ? Colors.active : Colors.inactive}
    />
  );

  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawer />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.active,
        drawerInactiveBackgroundColor: Colors.inactive,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive,
        drawerStyle: {
          backgroundColor: Colors.bg,
          width: '75%',
          borderBottomRightRadius: 25,
          borderTopRightRadius: 25,
          overflow: 'hidden',
          elevation: 4,
        },
        sceneContainerStyle: {
          backgroundColor: Colors.bg,
        },
        drawerHideStatusBarOnOpen: Platform.OS === 'ios',
        overlayColor: Colors.transparent,
      }}>
      <Drawer.Screen
        name="PrivateRoutes"
        component={PrivateRoutes}
        options={{
          drawerIcon: ({focused, size}) =>
            renderDrawerIcon({focused, size}, 'home-outline'),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
