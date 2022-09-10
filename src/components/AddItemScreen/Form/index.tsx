import { FontAwesome } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  FormControl,
  Icon,
  Image,
  Pressable,
  Text,
  TextArea,
} from "native-base";
import { useCamera } from "../../../hooks/contexts/useCamera";
import { colors } from "../../../theme/colors";
import { ButtonBase } from "../../shared/Buttons";
import { BaseInput } from "../../shared/Inputs/base";
import useFileInput from "../../shared/Inputs/file/hooks/useFileInput";
import useAddItemForm from "./hooks/useAddItemForm";
import { Style } from "./style";

type Props = {
  nav: NativeStackNavigationProp<any>;
};

export function AddItemForm({ nav }: Props) {
  const {
    plaqueta,
    setPlaqueta,
    docPicker,
    photoPreview,
    andar,
    codigo,
    descricao,
    dono,
    localizacao,
    sequencial,
    setAndar,
    setCodigo,
    setDescricao,
    setDono,
    setLocalizacao,
    setSequencial,
    setTipo,
    tipo,
  } = useAddItemForm();

  return (
    <FormControl style={Style.formContainer}>
      <BaseInput value={sequencial} handleValue={setSequencial} placeholder="Sequencial" mb={5} />
      <BaseInput value={tipo} handleValue={setTipo} placeholder="Tipo" mb={5} />
      <BaseInput value={andar} handleValue={setAndar} placeholder="Andar" mb={5} />
      <BaseInput value={dono} handleValue={setDono} placeholder="Dono" mb={5} />
      <BaseInput value={codigo} handleValue={setCodigo} placeholder="Código de barras" mb={5} />
      <BaseInput
        value={plaqueta}
        handleValue={setPlaqueta}
        placeholder="Plaqueta"
        mb={5}
        iconRight={
          <Pressable
            style={Style.cameraButtonContainer}
            onPress={() => {
              nav.navigate("BarCodeScanner");
            }}
          >
            <Icon
              as={<FontAwesome name="camera" />}
              size={4}
              color={colors.light.white}
            />
          </Pressable>
        }
      />
      <BaseInput value={localizacao} handleValue={setLocalizacao} placeholder="Localização" mb={5} />
      <TextArea
        autoCompleteType={false}
        size="md"
        placeholder="Descrição"
        h={40}
        borderRadius={20}
        mb={5}
        value={descricao}
        //@ts-ignore
        onChangeText={setDescricao}
      />
      <Text mb={5} style={Style.textFoto}>{`Foto do item`}</Text>
      <ButtonBase
        width={"100%"}
        mb={5}
        rounded="2xl"
        textStyle={{ color: colors.light.white }}
        label="Abrir câmera"
        onPress={() => {
          nav.navigate("Camera");
        }}
      />
      <ButtonBase
        width={"100%"}
        mb={5}
        onPress={() => {
          docPicker(["image/*"]);
        }}
        style={Style.outlinedButton}
        rounded="2xl"
        textStyle={{ color: colors.light.cian }}
        label="Selecionar arquivo"
      />
      {photoPreview ? (
        <Image
          src={photoPreview}
          width={200}
          height={200}
          borderRadius={99}
          alt={"Foto do item à ser adicionado."}
        />
      ) : (
        <></>
      )}
    </FormControl>
  );
}
