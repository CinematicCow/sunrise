import React, { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
import { TamaguiProvider, Theme } from "tamagui";
import config from "../tamagui.config";
import { GlobalSafeAreaView } from "../utils/safeAreaView";
import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme}>
        <ThemeProvider
          value={colorScheme === "light" ? DefaultTheme : DarkTheme}
        >
          <GlobalSafeAreaView>
            <Slot />
          </GlobalSafeAreaView>
        </ThemeProvider>
      </Theme>
    </TamaguiProvider>
  );
};

export default RootLayout;
