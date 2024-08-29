import {createConfig} from '@gluestack-ui/themed';
import {config as defaultConfig} from '@gluestack-ui/config';

const fontFamily = 'Roboto';

export const COLORS = {
  primaryC1: '#313D65',
  secondaryC2: '#627BCB',
  PRIMARY: '#3730a3',
  balck: '#000',
  textWhite: '#FFFFFF',
  textSecondary: '#756bb3',
  fadePrime: '#7166ba',
  gradientLow: '#F5F1EC',
  NewPrimary: '#290A5F',
  NewSecondary: '#462775',
  DrawerIcon: '#505050',
  DrawerActiveIcon: '#504683',
  NewColor: '#753CEF',
  statusBarColor: '#272762',
  primary: {
    DEFAULT: '#201d56',
    50: '#6661CA',
    100: '#5852C5',
    200: '#423CB2',
    300: '#373293',
    400: '#2B2775',
    500: '#201D56',
    600: '#100F2C',
    700: '#010102',
    800: '#000000',
    900: '#000000',
    950: '#000000',
  },
  secondary: {
    DEFAULT: '#f49d0c',
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde58a',
    300: '#fbd24e',
    400: '#fabe25',
    500: '#f49d0c',
    600: '#d87607',
    700: '#bc560a',
    800: '#923f0e',
    900: '#78340f',
    950: '#451a03',
  },
};

export const FONTS = {
  100: {
    normal: `${fontFamily}-Light`,
    italic: `${fontFamily}-LightItalic`,
  },
  200: {
    normal: `${fontFamily}-ExtraLight`,
    italic: `${fontFamily}-ExtraLightItalic`,
  },
  300: {
    normal: `${fontFamily}-Regular`,
    italic: `${fontFamily}-Italic`,
  },
  400: {
    normal: `${fontFamily}-Medium`,
    italic: `${fontFamily}-MediumItalic`,
  },
  500: {
    normal: `${fontFamily}-SemiBold`,
    italic: `${fontFamily}-SemiBoldItalic`,
  },
  600: {
    normal: `${fontFamily}-Bold`,
    italic: `${fontFamily}-BoldItalic`,
  },
  700: {
    normal: `${fontFamily}-ExtraBold`,
    italic: `${fontFamily}-ExtraBoldItalic`,
  },
  800: {
    normal: `${fontFamily}-Black`,
    italic: `${fontFamily}-BlackItalic`,
  },
  900: {
    normal: `${fontFamily}-Black`,
    italic: `${fontFamily}-BlackItalic`,
  },
};

const CustomTheme = createConfig({
  ...defaultConfig,
  fontConfig: {
    [fontFamily]: {
      100: FONTS[100],
      200: FONTS[200],
      300: FONTS[300],
      400: FONTS[400],
      500: FONTS[500],
      600: FONTS[600],
      700: FONTS[700],
      800: FONTS[800],
      900: FONTS[900],
    },
  },
  fonts: {
    heading: fontFamily,
    body: fontFamily,
    mono: fontFamily,
  },
});

export default CustomTheme;
