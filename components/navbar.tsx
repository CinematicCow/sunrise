import { ArrowLeft } from "@tamagui/lucide-icons";
import { Button, H4, XStack } from "tamagui";
import { router } from "expo-router";
import { FC } from "react";

type Props = {
  title: string;
};

const NavBar: FC<Props> = ({ title }) => {
  return (
    <XStack alignItems="center" space="$3">
      <Button icon={ArrowLeft} onPress={router.back} />
      <H4>{title}</H4>
    </XStack>
  );
};

export default NavBar;
