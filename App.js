import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import Login from './screen/Login/Login';
import SignUp from './screen/Login/SignUp';
import Main from './screen/Login/Main';
import BottomTabNavigator from './screen/Menu/BottomTabNavigator';

const Stack = createStackNavigator();

i18n.translations = {
  en: { language: 'Eng', },
  ko: { language: 'Kor' },
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;

async function loadFont() {
  await Font.loadAsync({
    'Visby': require('./assets/fonts/VisbyRoundCF-Bold.otf'),
    'HelveticaM': require('./assets/fonts/HelveticaNeueMedium.ttf'),
    'HelveticaR': require('./assets/fonts/HelveticaNeue.ttf'),
    'Jua': require('./assets/fonts/Jua-Regular.ttf'),
    'NotoR': require('./assets/fonts/NotoSansKR-Regular.otf'),
    'NotoM': require('./assets/fonts/NotoSansKR-Medium.otf'),
  });
}

export default function App() {

  global.language = i18n.t('language');

  //loadFont();

  const [loaded] = useFonts({
    'Visby': require('./assets/fonts/VisbyRoundCF-Bold.otf'),
    'HelveticaM': require('./assets/fonts/HelveticaNeueMedium.ttf'),
    'HelveticaR': require('./assets/fonts/HelveticaNeue.ttf'),
    'Jua': require('./assets/fonts/Jua-Regular.ttf'),
    'NotoR': require('./assets/fonts/NotoSansKR-Regular.otf'),
    'NotoM': require('./assets/fonts/NotoSansKR-Medium.otf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Menu" component={BottomTabNavigator} />
        <Stack.Screen name="Main" component={Main} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});