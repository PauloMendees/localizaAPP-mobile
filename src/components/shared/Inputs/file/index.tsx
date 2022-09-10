import { Text, View } from "native-base";
import useFileInput from "./hooks/useFileInput";
import { TouchableHighlight } from "react-native";
import { Style } from "./style";
import { colors } from "../../../../theme/colors";

type Props = {
  placeholder?: string
}

export function FileInput({
  placeholder = `Clique para selecionar um arquivo`
}: Props) {
  const { docPicker, uploadedFileName } = useFileInput();

  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
      }}
    >
      <TouchableHighlight
        onPress={() => {docPicker(['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'])}}
        style={Style.fileInputContainer}
        underlayColor={colors.light.lowOpacityCian}
      >
        <Text style={Style.textInput}>{uploadedFileName ? uploadedFileName : placeholder}</Text>
      </TouchableHighlight>
    </View>
  );
}
