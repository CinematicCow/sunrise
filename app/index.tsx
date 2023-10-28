import { Link } from "expo-router";
import { Text, Button, YStack } from "tamagui";

const Index = () => {
  return (
    <YStack margin="$4" space="$3">
      <Text>YOLO MF</Text>
      <Link href="/auth/login" asChild>
        <Button minWidth="$10"> Login </Button>
      </Link>
    </YStack>
  );
};

export default Index;
