import {
  Button,
  Form,
  H2,
  Input,
  Label,
  Paragraph,
  SizableText,
  Stack,
  XStack,
  YStack,
} from "tamagui";
import NavBar from "../../components/navbar";
import { LogIn } from "@tamagui/lucide-icons";

const Login = () => {
  const handleSubmit = () => {
    console.log("login submitted");
  };

  return (
    <>
      <NavBar title="Login" />
      <YStack justifyContent="center" flex={1} padding="$4" space="$2">
        <Stack>
          <H2>Welcome Back,</H2>
          <Paragraph theme="alt1" size="$4">
            Your journey to sobriety continues here.
          </Paragraph>
        </Stack>
        <Form gap="$6" marginTop="$8" onSubmit={handleSubmit}>
          <Stack gap="$2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="jondoe@example.com"
              minHeight={60}
              textContentType="emailAddress"
              keyboardType="email-address"
            />
          </Stack>
          <Stack gap="$2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Password"
              minHeight={60}
              secureTextEntry
            />
          </Stack>
          <Form.Trigger asChild marginTop="$3">
            <Button iconAfter={LogIn}>Login</Button>
          </Form.Trigger>

          <Stack alignItems="center" space="$4">
            <SizableText theme="alt1" size="$4">
              Forgot your password?
            </SizableText>

            <XStack>
              <SizableText theme="alt2" size="$4">
                Don't have an account?{" "}
              </SizableText>
              <SizableText size="$4">Register</SizableText>
            </XStack>
          </Stack>
        </Form>
      </YStack>
    </>
  );
};

export default Login;
