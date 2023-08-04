import { useCallback } from "react"
import useEncode from "./useEncode"
import { useToast } from "@chakra-ui/react"
import { useDropzone } from "react-dropzone"

export default function useDrop({ setImages, model, disabled, setHandleDisplayable }) {
  const { encode } = useEncode()
  const toast = useToast()

  const onDrop = useCallback(async files => {
    try {
      const FilesData = await Promise.all(files.map(async file => {
        const base64 = await encode(file)
        return ({
          key: 0,
          name: file.name,
          base64: base64
        })
      }))

      setImages(prevImage => [...prevImage, ...FilesData])
      setHandleDisplayable.on()

    } catch (e) {
      toast({ title: e.message, colorScheme: 'red' })
    }
  }, [encode, setImages, setHandleDisplayable, toast])

  const onDropRejected = useCallback((e) => {
    toast({ title: e[0].errors[0].message, colorScheme: 'red' })
  }, [toast])

  const {
    getRootProps,
    getInputProps,
    open,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    onDropRejected,
    noClick: true,
    maxFiles: model?.type === "model" ? 1 : model?.config.xValues.length,
    accept: { 'image/*': [] },
    disabled: disabled
  })

  return {
    onDrop,
    onDropRejected,
    getRootProps,
    getInputProps,
    open,
    isDragAccept,
    isDragReject
  }
}