import {useState, useEffect} from 'react'
import { BarCodeScanner } from "expo-barcode-scanner";
import { useBarCode } from '../../../hooks/contexts/useBarCode';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/stack/types';

export default function useBarCodeScan(navigation: NativeStackNavigationProp<RootStackParamList>){
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);
    const {handleBarCode} = useBarCode();

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === "granted");
        };
    
        getBarCodeScannerPermissions();
      }, []);

    const handleBarCodeScanned = ({data}: any) => {
        setScanned(true);
        handleBarCode(data, () => {
          if(data) navigation.navigate('Adicionar')
        });
      };

    return {hasPermission, scanned, handleBarCodeScanned}
}