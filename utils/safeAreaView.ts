import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "tamagui";

export const GlobalSafeAreaView = styled(SafeAreaView, {
  name: "GlobalSafeAreaView",
  flex: 1,
  backgroundColor: "$backgroundStrong",
});
