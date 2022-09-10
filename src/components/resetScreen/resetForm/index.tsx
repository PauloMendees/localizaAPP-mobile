import { FontAwesome } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon } from "native-base";
import { Platform, View } from "react-native";
import { colors } from "../../../theme/colors";
import { ButtonBase } from "../../shared/Buttons";
import { Logo } from "../../shared/Logo";
import { Snackbar } from "../../shared/Snackbar";
import { ActionButtons } from "../ActionButtons";
import useResetForm from "./hooks";
import { Style } from "./styles";

type Props = {
  nav: NativeStackNavigationProp<any>;
};

export function ResetForm({ nav }: Props) {
  const {
    actualStep,
    steps,
    nextStep,
    previousStep,
    isLoadingFinallize,
    isLoadingInit,
    isLoadingVerify,
    errorMessage,
    clearState
  } = useResetForm({
    nav,
  });

  return (
    <>
      <View style={Style.container}>
        <Logo />
        {steps[actualStep]}
        {actualStep === 3 ? (
          <ButtonBase
            onPress={() => nav.navigate("Login")}
            label="Ir para login"
            rounded="full"
            style={{ width: "100%" }}
            textStyle={{ color: colors.light.white }}
            endIcon={
              <Icon
                as={FontAwesome}
                name="long-arrow-right"
                color={colors.light.white}
                nativeID={Platform.OS ? "ios-go-on" : "md-go-on"}
                ml={4}
              />
            }
          />
        ) : (
          <ActionButtons
            isLoading={isLoadingFinallize || isLoadingInit || isLoadingVerify}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        )}
      </View>
    </>
  );
}
