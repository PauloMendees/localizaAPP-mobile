import { useEffect, useState } from "react";
import * as DocumentPicker from 'expo-document-picker';

export default function useFileInput() {
  const [uploadedFile, setUploadedFile] = useState<string>('');
  const [uploadedFileName, setUploadedFileName] = useState<string>('');

  function reset(){
    setUploadedFile('')
    setUploadedFileName('')
  }

  async function docPicker(accept: string[]) {
    const res = await DocumentPicker.getDocumentAsync({
      type: accept
    })
    //@ts-ignore
    setUploadedFile(res.uri)
    //@ts-ignore
    setUploadedFileName(res.name)
  }

  return {docPicker, uploadedFile, uploadedFileName, reset};
}
