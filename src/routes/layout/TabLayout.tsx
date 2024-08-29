import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Private} from '../../screens';
import {COLORS, FONTS} from '../../styles';
import AppIcon from '../../components/core/AppIcon';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const TabArr = [
    {
      route: 'Dashboard',
      label: 'Home',
      icon: {
        SimpleLineIconsName: 'home',
      },
      activeIcon: {EntypoName: 'home'},
      component: Private.Dashboard,
    },
    {
      route: 'NewTask',
      label: 'New',
      icon: {
        MaterialCommunityIconsName: 'ticket-confirmation',
      },
      activeIcon: {MaterialCommunityIconsName: 'ticket-confirmation'},
      component: Private.NewTask,
    },

    {
      route: 'OngoingTask',
      label: 'Ongoing',
      icon: {
        MaterialCommunityIconsName: 'timer-sand',
      },
      activeIcon: {MaterialCommunityIconsName: 'timer-sand-full'},
      component: Private.OngoingTask,
    },
    {
      route: 'Money',
      label: 'Ongoing',
      icon: {
        IoniconsName: 'wallet-outline',
      },
      activeIcon: {IoniconsName: 'wallet'},
      component: Private.Money,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {fontFamily: FONTS[400].normal},
        tabBarActiveTintColor: COLORS.primary[700],
        tabBarAccessibilityLabel: COLORS.primary[700],
        tabBarStyle: {
          height: '7%',
          position: 'absolute',
          backgroundColor: 'white',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
      }}
      sceneContainerStyle={{backgroundColor: COLORS?.textWhite}}>
      {TabArr?.map((_: any, i: any) => {
        return (
          <Tab.Screen
            key={i}
            name={_.route}
            component={_.component}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <>
                  {!focused ? (
                    <AppIcon color={color} size={size} {..._.icon} />
                  ) : (
                    <AppIcon color={color} size={size} {..._.activeIcon} />
                  )}
                </>
              ),
              tabBarLabel: _.label,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
