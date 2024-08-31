import * as React from 'react';
import {GluestackUIProvider, StatusBar} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/Routes';
import {AppContextProvider, useAppContext} from './src/contexts';
import {COLORS} from './src/styles';

const App = () => {
  const {isDarkMode} = useAppContext();
  return (
    <GluestackUIProvider
      config={{
        ...config,
        dependencies: {
          'linear-gradient': require('react-native-linear-gradient').default,
        },
      }}>
      <StatusBar
        backgroundColor={isDarkMode ? '#000' : COLORS?.primaryC1}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        <AppContextProvider>
          <Routes />
        </AppContextProvider>
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
