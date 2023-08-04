import { IoRadioButtonOnSharp } from 'react-icons/io5';
import { colors } from "../../style/color";
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import styled from "styled-components";

const ImageModal = ({ isOpen, onClose, selectedImage }) => {

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
          <img src={selectedImage?.base64} alt="webcam" />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ImageModal;