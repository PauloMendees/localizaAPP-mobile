import { Text, View } from "native-base";
import { colors } from "../../../theme/colors";
import { ButtonBase } from "../../shared/Buttons";
import { ModalUpload } from "../ModalUpload";
import useItemsCard from "./hooks/useItemsCard";
import { Style } from "./style";
import { Table } from "./table";
import { Pagination } from "../../shared/Pagination";

export function ItemsCard() {
  const {handleUploadModal, openUploadModal} = useItemsCard()

  return (
    <View style={{paddingLeft: 20}}>
      <View style={Style.container}>
        <View style={Style.titleContainer}>
          <Text style={Style.titleText}>{`Itens cadastrados`}</Text>
          <ButtonBase
            style={Style.uploadButton}
            label="Upload CSV"
            rounded="2xl"
            textStyle={{ color: colors.light.cian }}
            onPress={handleUploadModal}
          />
        </View>
        <Table />
        <Pagination />
      </View>
      <ModalUpload handleOpen={handleUploadModal} isOpen={openUploadModal} />
    </View>
  );
}
