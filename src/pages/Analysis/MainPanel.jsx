import { useState, useCallback } from 'react';
import { IoCameraOutline, IoPushOutline } from 'react-icons/io5';
import { Box, Button, useDisclosure, useToast } from '@chakra-ui/react';
import styled from 'styled-components';
import {useDropzone} from 'react-dropzone';

import { colors } from '../../style/color';
import useEncode from '../../hooks/useEncode';
import Divider from '../../components/Divider';
import CameraModal from './CameraModal';
import UploadInput from './UploadInput';

const MainPanel = ({disabled, value}) => {
  
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [images, setImages] = useState(null)
  const { encode } = useEncode()
  const toast = useToast()
  
  const onDrop = useCallback(async files => {
    const FilesData = await Promise.all(files.map(async file => {
        const base64 = await encode(file)
        return ({name: file.name, data: base64})
    }))
    setImages(prevImage => prevImage ? (
      [...prevImage, ...FilesData]) : 
      [...FilesData])
  }, [encode])

  const onDropRejected = useCallback((e) => {
    setImages(null)
    toast({
      title: e[0].errors[0].message,
      position: 'top-left',
      colorScheme: 'red',
      duration: '3000',
      isClosable: 'true',
    });
  }, [toast])

  const {getRootProps, 
    getInputProps, 
    open, 
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop, 
    onDropRejected,
    noClick: true, 
    maxFiles: value?.type === "model" ? 1 : value?.config.xValues.length,
    accept: {'image/*': []}
  })


  return(
    <Container 
    {...getRootProps({isDragAccept, isDragReject, disabled})}
    >

      {
        images ?

        (<>
          {images.map((item, index) => (
            <img key={index} src={item.data} alt={item.name}/>
            ))}
        </>) :

        (<>
          <Content>
            <TitleContainer>
              <IoCameraOutline />
              <Title>Create your detaction</Title>
            </TitleContainer>
            <Button 
            color={colors.black} 
            backgroundColor={colors.white}
            isDisabled={disabled}
            isActive={disabled}
            _hover={!disabled ? null : {brightness: 0.1}}
            _disabled={{
              bg: colors.gray,
              color: colors.gray400
            }}
            onClick={onOpen}
            >
              Open camera
            </Button>
        </Content>

        <Divider />
        
        <Content>
          <TitleContainer>
            <IoPushOutline />
            <div>
              <Title>Drag your file(s) here</Title>
              <SubTitle>.jpeg .jpg .png</SubTitle>
            </div>
          </TitleContainer>
          <UploadInput 
          disabled={disabled} 
          value={value}
          setImages={setImages}
          getInputProps={getInputProps}
          open={open}
          onDrop={onDrop}
          />
        </Content>

        <CameraModal 
        isOpen={isOpen} 
        onClose={onClose} 
        value={value}
        images={images}
        setImages={setImages}
        />
      </>
      )}

    </Container>
  )
}

const getColor = (props) => {
  const { isDragAccept, isDragReject } = props
  if (isDragAccept) {
    return colors.gray600;
  }
  if (isDragReject) {
      return colors.red;
  }
  return;
}

const getBorder = (props) => {
  const { isDragAccept, isDragReject } = props
  if (isDragAccept || isDragReject) {
    return '0.4rem';
  }
  return 0;
}

const Container = styled(Box)`
  opacity: ${props => props.disabled ? 0.9 : 1};
  outline-width: ${props => getBorder(props)};
  outline-color: ${props => getColor(props)};
  outline-style: dashed;
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