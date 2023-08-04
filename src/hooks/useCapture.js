import { useCallback, useRef } from "react"
import useDetectSensor from "./api/useDetectSensor"
import { useToast } from "@chakra-ui/react"

export default function useCapture({ setImages, onClose, setHandleDisplayable }) {
  const webcamRef = useRef(null)
  const { detect, detectLoading } = useDetectSensor()
  const toast = useToast()

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  }

  const capturePhoto = useCallback(async () => {
    try {
      const imgSrc = webcamRef.current.getScreenshot()
      // const res = await detect({
      //   file: imgSrc
      // })
      // TODO Fazer animação de foto
      setImages(prevImage => [...prevImage,
      {
        key: 0,
        name: webcamRef.current.stream.id,
        base64: imgSrc
      }])

      // if (numOfPics === images.length + 1) {
      //   onClose()
      // setHandleDisplayable.on()
      // }
      onClose()
      setHandleDisplayable.on()
    } catch (e) {
      toast({ title: e.message, colorScheme: 'red' })
    }
  }, [webcamRef, onClose, setImages, setHandleDisplayable, toast])

  const changeImage = useCallback((image) => {
    try {
      const imgSrc = webcamRef.current.getScreenshot()
      setImages()
    } catch (e) {
      toast({ title: e.message, colorScheme: 'red' })
    }
  }, [webcamRef, setImages, toast])

  return {
    webcamRef,
    videoConstraints,
    detectLoading,
    capturePhoto,
    changeImage
  }
}