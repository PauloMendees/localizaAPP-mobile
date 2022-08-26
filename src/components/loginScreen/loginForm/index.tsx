import { View } from "react-native";
import { Button, Text } from "native-base";
import { Style } from "./styles";
import { Logo } from "../../shared/Logo";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EmailInput } from "../../shared/Inputs/email";
import { PasswordInput } from "../../shared/Inputs/password";
import useLoginForm from "./hooks/useLoginForm";
import { ButtonBase } from "../../shared/Buttons";
import { colors } from "../../../theme/colors";
import { Snackbar } from "../../shared/Snackbar";

type Props = {
  nav: NativeStackNavigationProp<any>;
};

export function LoginForm({ nav }: Props) {
  const {
    email,
    handleEmail,
    handlePassword,
    password,
    handleLogin,
    isLoading,
    errorMessage,
    isAuthenticated,
    clearState,
  } = useLoginForm();

  return (
    <>
      {errorMessage ? (
        <Snackbar
          color={colors.light.cian}
          message={errorMessage}
          status="error"
          onClose={clearState}
        />
      ) : (
        <></>
      )}
      <View style={Style.container}>
        <Logo />
        <EmailInput mb={4} handleValue={handleEmail} value={email} />
        <PasswordInput
          placeholder="Senha"
          value={password}
          handleValue={handlePassword}
        />
        <View style={Style.actionsContainer}>
          <Text
            onPress={() => nav.navigate("ResetPassword")}
            style={Style.text}
          >{`Esqueci minha senha`}</Text>
        </View>
        <ButtonBase
          onPress={() => nav.navigate("Register")}
          rounded="full"
          size="lg"
          width={"100%"}
          label="Registre-se"
          textStyle={{ color: colors.light.white }}
        />
        <View style={Style.divider} />
        <ButtonBase
          isLoading={isLoading}
          style={Style.outlinedButton}
          label="LOGIN"
          rounded="full"
          size="lg"
          width={"100%"}
          variant="outline"
          textStyle={{ color: colors.light.cian }}
          onPress={() => {
            handleLogin(() => {
              nav.navigate("TabNavigation");
            });
          }}
        />
      </View>
    </>
  );
}
