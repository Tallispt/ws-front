import { useRef, useState, useCallback } from "react";
import { IoRadioButtonOnSharp, IoEllipse, IoCheckmarkCircle, IoAlbumsOutline } from 'react-icons/io5';
import Webcam from "react-webcam";
import { colors } from "../../style/color";
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalFooter } from '@chakra-ui/react'
import styled from "styled-components";

const CameraModal = ({ isOpen, onClose, value, images, setImages }) => {

  const webcamRef = useRef(null)
  const [url, setUrl] = useState(null)

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  }

  const capturePhoto = useCallback(() => {
    console.log(value)
    const imgSrc = webcamRef.current.getScreenshot()
    setUrl(imgSrc)
    setImages(prevImage => prevImage ? (
      [...prevImage, { data: imgSrc, name: webcamRef.current.stream.id }]) :
      [{ data: imgSrc, name: webcamRef.current.stream.id }])
  }, [webcamRef, setImages, value])

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        backgroundColor={colors.main}
        borderRadius={20}
        width={1210}
        maxW={"100vw"}
      >
        <ModalCloseButton
          color={colors.white}
          position={'absolute'}
          top={5}
          right={5}
          zIndex={2}
          size={'lg'} />

        <ModalBody>
          {
            url ?
              (<img src={url} alt="webcam" />) :
              (<Camera
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                mirrored
              />)
          }
        </ModalBody>
        <Footer
          justifyContent={'space-between'}
          paddingX={'2rem'}
        >
          <ModeTitle>{value?.title} Mode</ModeTitle>
          <CaptureIcon onClick={capturePhoto} />
          <div>
            <IoEllipse />
            <IoCheckmarkCircle />
            <IoAlbumsOutline />
          </div>
        </Footer>
      </ModalContent>
    </Modal>
  )
}

const Camera = styled(Webcam)`
  width: 100%;
  object-fit: fill;
  border-radius: 20;
`

const Footer = styled(ModalFooter)`
  background: rgba(0, 44, 46, 0.6);
  height: 8rem;
  border-radius: 20px;
  color: ${colors.white};
`

const ModeTitle = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
`

const CaptureIcon = styled(IoRadioButtonOnSharp)`
    width: 7rem;
    height: 7rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);

    &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export default CameraModal;