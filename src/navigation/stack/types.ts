import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Login: any;
    Register: any;
    ResetPassword: any
  };

export type ScreenProps = NativeStackScreenProps<RootStackParamList>;