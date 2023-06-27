import { useState } from 'react';
import { IoCameraOutline, IoPushOutline } from 'react-icons/io5';
import { Box, Button, useDisclosure } from '@chakra-ui/react'
import styled from 'styled-components';

import { colors } from '../../style/color';
import Divider from '../../components/Divider';
import Modal from '../../components/Modal';
import UploadModal from './UploadChild';
import CameraModal from './CameraChild';

const MainPanel = ({disabled}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [modalElement, setModalElement] = useState()

  function handleOpenModal(e) {
    const value = e.target.value

    switch(value) {
      case 'camera' :
        setModalElement(CameraModal)
        break
      case 'upload':
        setModalElement(UploadModal)
        break
      default:
        setModalElement(<>Error</>)
        break
    }
    onOpen()
  }

  return(
    <Container disabled={disabled}>

      <Content>
        <TitleContainer>
          <IoCameraOutline />
          <Title>Create your detaction</Title>
        </TitleContainer>
        <Button 
        value={'camera'}
        color={colors.black} 
        backgroundColor={colors.white}
        isDisabled={disabled}
        isActive={disabled}
        _hover={!disabled ? null : {brightness: 0.1}}
        _disabled={{
          bg: colors.gray,
          color: colors.gray400
        }}
        onClick={(e) => handleOpenModal(e)}
        >
          Open camera
        </Button>
      </Content>

      <Divider />
      
      <Content>
        <TitleContainer>
          <IoPushOutline />
          <div>
            <Title>Drag your files here</Title>
            <SubTitle>.jpeg .jpg .png</SubTitle>
          </div>
        </TitleContainer>
        <Button 
        value={'upload'}
        color={colors.black} 
        backgroundColor={colors.white}
        isDisabled={disabled}
        isActive={disabled}
        _hover={!disabled ? null : {brightness: 0.1}}
        _disabled={{
          bg: colors.gray,
          color: colors.gray400
        }}
        onClick={(e) => handleOpenModal(e)}
        >
          Upload File
        </Button>
      </Content>

      <Modal isOpen={isOpen} onClose={onClose} children={modalElement}/>
    </Container>
  )
}

const Container = styled(Box)`
  opacity: ${props => props.disabled ? 0.9 : 1};
  background-color: ${props => props.disabled ? colors.gray400 : colors.main};
  width: 38rem;
  height: 32rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 4px 2px rgba(104, 109, 118, 0.25);

  padding: 0 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const TitleContainer = styled.div`
    color: ${colors.white};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${colors.gray200};
      width: 4rem;
      height: 4rem;
    }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Title = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
`

const SubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`


export default MainPanel;