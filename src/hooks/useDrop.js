import { useCallback } from "react"
import { useToast } from "@chakra-ui/react"
import { useDropzone } from "react-dropzone"
import { detect } from "../services/data"

export default function useDrop({setImage}) {
  const toast = useToast()

  const onDrop = useCallback(async files => {
    try {
      if (files.length > 1 || files.length < 1) throw Error;
      const data = new FormData();
      data.append('file', files[0]);
      data.append('kernel', 5);
      data.append('minDist', 45);
      data.append('param1', 40);
      data.append('param2', 15);
      data.append('minRadius', 1);
      data.append('maxRadius', 25);
      data.append('radiusPercent', 1);
      console.log(data.file);
      const detectData = await detect(data);
      console.log(detectData);
      // const newImageUrls = URL.createObjectURL(files[0])
      // setImage({
      //   key: 1,
      //   name: files[0].name,
      //   url: newImageUrls
      // })

    } catch (e) {
      toast({ title: e.message, colorScheme: 'red' })
    }
  }, [toast, setImage])

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
    // onError: onDropRejected,
    noClick: true,
    maxFiles: 1,
    accept: { 'image/*': [] },
    // disabled: disabled,
    // maxSize: null,
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