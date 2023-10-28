import React, { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
import { TamaguiProvider, Theme } from "tamagui";
import config from "../tamagui.config";
import { GlobalSafeAreaView } from "../utils/safeAreaView";
import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";

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
        <GlobalSafeAreaView>
          <Slot />
        </GlobalSafeAreaView>
      </Theme>
    </TamaguiProvider>
  );
};

export default RootLayout;
