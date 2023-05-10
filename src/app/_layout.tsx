import { SplashScreen, Stack } from 'expo-router';
import { colors, fontConfig, fonts } from '@/core/theme';
import {
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  useFonts,
} from '@expo-google-fonts/lexend';
import { NativeBaseProvider, extendTheme } from 'native-base';

export const unstable_settings = {
  initialRouteName: 'index',
};

const theme = extendTheme({
  colors,
  fontConfig,
  fonts,
});

const RootLayout = () => {
  const [isFontsLoaded] = useFonts({
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
  });

  if (!isFontsLoaded) return <SplashScreen />;

  return (
    <NativeBaseProvider theme={theme}>
      <Stack
        screenOptions={{
          headerShown: false,
          /**
           * Not working in iOS with Expo Go (requires setting info.plist).
           */
          // statusBarColor: 'white',
          // statusBarStyle: 'light',
        }}
      />
    </NativeBaseProvider>
  );
};

export default RootLayout;
