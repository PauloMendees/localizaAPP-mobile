import { useState } from "react"

export default function useItemsCard(){
    const [openUploadModal, setOpenUploadModal] = useState<boolean>(false);

    function handleUploadModal(){
        setOpenUploadModal(!openUploadModal)
    }

    return {handleUploadModal, openUploadModal}
}