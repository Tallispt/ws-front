import { colors } from "../../style/color";
import { Modal as CKModal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'

function Modal({isOpen, onClose, children}) {
  
  return (
      <CKModal 
      isOpen={isOpen} 
      onClose={onClose}
      isCentered
      >
        <ModalOverlay/>
        <ModalContent 
          backgroundColor={colors.main}
          borderRadius={20}
        >
          <ModalCloseButton color={colors.white}/>
          <ModalBody>
            {children}
          </ModalBody>
        </ModalContent>
      </CKModal>
  )
}

export default Modal;