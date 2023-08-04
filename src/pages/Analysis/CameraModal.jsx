import { useState } from "react";
import { IoRadioButtonOnSharp, IoAlbumsOutline } from 'react-icons/io5';
import Webcam from "react-webcam";
import { colors } from "../../style/color";
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalFooter } from '@chakra-ui/react'
import styled from "styled-components";
import useCapture from "../../hooks/useCapture";
// import PicsChecker from "./PicsChecker";

const CameraModal = ({ isOpen, onClose, model, images, setImages, setHandleDisplayable }) => {

  const numOfPics = model?.config.numOfPictures

  const {
    webcamRef,
    detectLoading,
    videoConstraints,
    capturePhoto
  } = useCapture({
    onClose,
    setImages,
    setHandleDisplayable
  })

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
          <Camera
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            mirrored
          />
          {detectLoading && (<IoAlbumsOutline />)}
        </ModalBody>
        <Footer>
          <ModeTitle>{model?.title} Mode</ModeTitle>
          <CaptureIcon onClick={capturePhoto} />
          {/* <PicsChecker
            numOfPics={numOfPics}
            numOfTookenPics={images.length}
          /> */}
          {/* <IoAlbumsOutline /> */}
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
  position: absolute;
  left: 3%;
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