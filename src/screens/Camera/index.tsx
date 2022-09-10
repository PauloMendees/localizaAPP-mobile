import { Ionicons } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";
import { Icon, IconButton } from "native-base";
import { useState, useRef } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { Picture } from "../../context/CameraContext";
import { useCamera } from "../../hooks/contexts/useCamera";
import { ScreenProps } from "../../navigation/stack/types";
import { colors } from "../../theme/colors";
import { Style } from "./style";

export function CameraScreen({ navigation }: ScreenProps) {
  const camera = useRef(null)
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraReady, setCameraReady] = useState<boolean>(false)
  const {handlePicture} = useCamera();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={Style.container}>
        <Text style={{ textAlign: "center" }}>
          {`Você precisa conceder permissão para utilizar essa funcionalidade`}
        </Text>
        <Button onPress={requestPermission} title="Conceder permissão" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={Style.container}>
      <Camera
        ratio="16:9"
        ref={camera}
        style={Style.camera}
        type={type}
        onCameraReady={() => { setCameraReady(true) }}
      >
        <View style={Style.buttonContainer}>
          <TouchableOpacity
            style={Style.takeAPictureButton}
            onPress={() => {
              if(cameraReady && camera.current){
                //@ts-ignore: ts doesn't recognize this function of camera expo component
                camera.current.takePictureAsync()
                  .then((res: Picture) => {handlePicture(res, () => { navigation.navigate('Adicionar') })})
                  .catch((err: any) => {
                    console.warn(err)
                  })
              }
            }}  
          />
          <IconButton
            style={Style.buttonFlip}
            onPress={toggleCameraType}
            icon={
              <Icon
                as={<Ionicons name="camera-reverse" />}
                size={8}
                color={colors.light.white}
              />
            }
          />
        </View>
      </Camera>
    </View>
  );
}
