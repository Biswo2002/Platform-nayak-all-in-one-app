import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth} from '../../screens';
import {PublicRoutesTypes} from './types';

const Stack = createNativeStackNavigator<PublicRoutesTypes>();

type PublicRouteProps = {
  initialRouteName?: keyof PublicRoutesTypes;
};

export default function PublicRoutes({
  initialRouteName = 'SplashScreen',
}: PublicRouteProps) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeScreen" component={Auth.WelcomeScreen} />
      <Stack.Screen name="Login" component={Auth.Login} />
      <Stack.Screen
        name="OTPVerificationScreen"
        component={Auth.OTPVerificationScreen as React.ComponentType<any>}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={Auth.RegistrationScreen}
      />
      <Stack.Screen
        name="RegisterSuccessScreen"
        component={Auth.RegisterSuccessScreen}
      />
      <Stack.Screen name="OnboardingScreen" component={Auth.OnboardingScreen} />
    </Stack.Navigator>
  );
}
