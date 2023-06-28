import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { colors } from "../../style/color";
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import styled from "styled-components";

const CameraModal = ({isOpen, onClose}) => {

  const webcamRef = useRef(null)
  const [url, setUrl] = useState(null)
  
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
 }

  const capturePhoto = useCallback(async () => {
    const imgSrc = webcamRef.current.getScreenshot()
    setUrl(imgSrc)
  }, [webcamRef])

  return(
    <Modal 
    isOpen={isOpen} 
    onClose={onClose}
    isCentered
    >
      <ModalOverlay/>
      <ModalContent 
        backgroundColor={colors.main}
        borderRadius={20}
        width={1210}
        maxW={"100vw"}
        // paddingTop={3}
        margin={0}
      >
        <ModalCloseButton 
        color={colors.white} 
        position={'absolute'} 
        top={5} 
        right={5} 
        zIndex={2} 
        size={'lg'}/>

        <ModalBody>
          {
            url ?
            (<img src={url} alt="webcam"/>) :
            (<Camera 
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints = {videoConstraints}
              mirrored
            />)
          }
          {
            url ?
            (<button onClick={()=>setUrl(null)}>Reset</button>) :
            (<button onClick={capturePhoto}>Capture</button>)
          }
          
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

const Camera = styled(Webcam)`
  width: 100%;
  object-fit: fill;
  border-radius: 20;
`

export default CameraModal;