import { useBarCode } from "../../../../hooks/contexts/useBarCode";
import { useState, useEffect } from "react";
import useFileInput from "../../../shared/Inputs/file/hooks/useFileInput";
import { useCamera } from "../../../../hooks/contexts/useCamera";

export default function useAddItemForm() {
  const [sequencial, setSequencial] = useState<string>('')
  const [plaqueta, setPlaqueta] = useState<string>('');
  const [tipo, setTipo] = useState<string>('');
  const [andar, setAndar] = useState<string>('');
  const [dono, setDono] = useState<string>('');
  const [codigo, setCodigo] = useState<string>('');
  const [localizacao, setLocalizacao] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [photoPreview, setPhotoPreview] = useState<string>('')

  const {docPicker, uploadedFile, reset: ResetFileInput} = useFileInput();
  const {picture, reset: ResetCamera} = useCamera();

  const { readedBarCode } = useBarCode();

  useEffect(() => {
    setPlaqueta(readedBarCode);
  }, [readedBarCode]);

  useEffect(() => {
    ResetFileInput();
    ResetCamera();
    if(picture) setPhotoPreview(picture.uri)
    if(uploadedFile) setPhotoPreview(uploadedFile)
  }, [picture, uploadedFile])

  return {
      plaqueta,
      setPlaqueta,
      docPicker,
      photoPreview,
      sequencial,
      setSequencial,
      tipo,
      setTipo,
      andar,
      setAndar,
      dono,
      setDono,
      descricao,
      setDescricao,
      codigo,
      setCodigo,
      localizacao,
      setLocalizacao
  };
}
