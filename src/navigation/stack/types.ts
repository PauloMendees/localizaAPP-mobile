import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Login: any;
    Register: any;
    ResetPassword: any;
    Adicionar: any
  };

export type ScreenProps = NativeStackScreenProps<RootStackParamList>;