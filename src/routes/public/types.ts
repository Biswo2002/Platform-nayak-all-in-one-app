import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Auth, Public} from '../../screens';

export type PublicRoutesTypes = {
  [key in keyof typeof Public]: undefined;
} & {[key in keyof typeof Auth]: undefined};

type OmittedScreens = 'OTPVerificationScreen';
export type AppRoutesTypes = Omit<PublicRoutesTypes, OmittedScreens> & {
  OTPVerificationScreen: {phoneNumber?: any};
};

export type PublicNavigationProps = NativeStackNavigationProp<AppRoutesTypes>;
