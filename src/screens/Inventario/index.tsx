import { ScrollView } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { InventoryTitle } from "../../components/inventoryScreen/inventoryTitle";
import { ItemsCard } from "../../components/inventoryScreen/ItemsCard";
import { ScreenProps } from "../../navigation/stack/types";
import { Style } from "./style";
import {useEffect} from 'react'
import { useBarCode } from "../../hooks/contexts/useBarCode";
import { useCamera } from "../../hooks/contexts/useCamera";

export default function Inventario({ navigation }: ScreenProps) {
  const {reset: barCodeReset} = useBarCode()
  const {reset: cameraReset} = useCamera()

  useEffect(() => {
    navigation.addListener('focus', () => {
      cameraReset()
      barCodeReset()
    })
  }, [])

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={Style.container}>
        <InventoryTitle nav={navigation} />
        <ItemsCard />
      </ScrollView>
    </SafeAreaView>
  );
}
