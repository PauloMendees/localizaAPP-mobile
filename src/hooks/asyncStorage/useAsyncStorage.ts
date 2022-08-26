import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useAsyncStorage(){
    async function storeData(key: string, data: string): Promise<void>{
        try {
            await AsyncStorage.setItem(key, data);
        } catch (e) {
            console.warn(e);
        }
    }

    async function getData(key: string): Promise<string>{
        try {
            const data = await AsyncStorage.getItem(key);
            if(data) return data;
            return '';
        } catch (e) {
            console.warn(e);
            return '';
        }
    }

    return {storeData, getData}
}