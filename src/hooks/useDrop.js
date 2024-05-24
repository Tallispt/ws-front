import { useCallback } from "react"
import { useToast } from "@chakra-ui/react"
import { useDropzone } from "react-dropzone"

export default function useDrop({setImage, onOpen, setDataId}) {
  const toast = useToast()

  const onDrop = useCallback(async files => {
    try {
      if (files.length > 1 || files.length < 1) {throw Error};
      const file = URL.createObjectURL(files[0])
      setImage({url: file, file: files[0]})
      onOpen()
    } catch (e) {
      // toast({ title: e.message, colorScheme: 'red' })
    }
  }, [
    // toast, 
    setImage, onOpen])

  const onDropRejected = useCallback((e) => {
    toast({ title: e[0].errors[0].message, colorScheme: 'red' })
  }, [toast])

  const {
    getRootProps,
    getInputProps,
    open,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    onDropRejected,
    noClick: true,
    maxFiles: 1,
    accept: { 'image/*': [] },
    maxSize: 10000000,
  })

  return {
    onDrop,
    onDropRejected,
    getRootProps,
    getInputProps,
    open,
    isFocused,
    isDragAccept,
    isDragReject
  }
}