import { Text, View } from "native-base";
import { colors } from "../../../theme/colors";
import { ButtonBase } from "../../shared/Buttons";
import { FileInput } from "../../shared/Inputs/file";
import { ModalBase } from "../../shared/ModalBase";
import useModalUpload from "./hooks/useModalUpload";
import { Style } from "./style";

type Props = {
  isOpen: boolean;
  handleOpen: () => void;
};

export function ModalUpload({ handleOpen, isOpen }: Props) {

  return (
    <ModalBase
      open={isOpen}
      onClose={handleOpen}
      title="Upload de planilha"
      footer={
        <View style={Style.footerContainer}>
          <ButtonBase label="Cancelar" style={Style.cancelButton} onPress={handleOpen} />
          <ButtonBase label="Salvar" style={{width: 80}} textStyle={{color: colors.light.white}} />
        </View>
      }
    >
      <View>
        <FileInput />
      </View>
    </ModalBase>
  );
}
