import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Style } from "./style";
import useBarCodeScan from "./hooks/useBarCodeScan";
import { ScreenProps } from "../../navigation/stack/types";

export function BarCodeScan({ navigation }: ScreenProps) {
  const {handleBarCodeScanned, hasPermission, scanned} = useBarCodeScan(navigation);

  if (hasPermission === null) {
    return (
      <Text>{`Você precisa conceder permissão para acessar essa funcionalidade.`}</Text>
    );
  }
  if (hasPermission === false) {
    return <Text>{`Sem acesso a camera.`}</Text>;
  }

  return (
      <View style={Style.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={Style.cameraContainer}
        />
      </View>
  );
}