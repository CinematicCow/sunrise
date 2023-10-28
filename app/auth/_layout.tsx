import { Slot } from "expo-router";
import { MyStack } from "../../components/myStack";

const AuthLayout = () => {
  return (
    <MyStack justifyContent="flex-start">
      <Slot />
    </MyStack>
  );
};

export default AuthLayout;
