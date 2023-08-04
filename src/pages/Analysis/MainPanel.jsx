import { useState } from 'react';
import { IoCameraOutline, IoPushOutline } from 'react-icons/io5';
import { Box, Button, useDisclosure, useBoolean } from '@chakra-ui/react';
import styled from 'styled-components';

import { colors } from '../../style/color';
import useDrop from '../../hooks/useDrop';
import Divider from '../../components/Divider';
import CameraModal from './CameraModal';
import UploadInput from './UploadInput';
import ImgIcon from './ImgIcon';
import ImageModal from './ImageModal';

const MainPanel = ({ disabled, model }) => {

  const camModal = useDisclosure()
  const imgModal = useDisclosure()
  const [handleDisplayable, setHandleDisplayable] = useBoolean()
  const [selectedImage, setSelectedImage] = useState()
  const [images, setImages] = useState([])
  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    open,
    onDrop
  } = useDrop({
    setImages,
    model,
    disabled,
    setHandleDisplayable
  })

  return (
    <>
      <Container {...getRootProps({ isDragAccept, isDragReject, disabled, handleDisplayable, images })}>

        {
          handleDisplayable && images.length > 0 ?

            (
              <>
                <Title>Selected image(s)</Title>
                <ImageWrapContainer>
                  {images.map((item) => (
                    <ImgIcon
                      key={item.key}
                      img={item}
                      images={images}
                      setImages={setImages}
                      setSelectedImage={setSelectedImage}
                      onOpen={imgModal.onOpen}
                      open={open}
                      getInputProps={getInputProps}
                    />
                  ))}
                </ImageWrapContainer>
                <Button
                  color={colors.black}
                  backgroundColor={colors.white}
                  isDisabled={disabled}
                  isActive={disabled}
                  _hover={!disabled ? null : { brightness: 0.1 }}
                  _disabled={{
                    bg: colors.gray,
                    color: colors.gray400
                  }}
                  onClick={() => { }}
                >
                  Select file(s)
                </Button>
              </>
            ) :


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
                  _hover={!disabled ? null : { brightness: 0.1 }}
                  _disabled={{
                    bg: colors.gray,
                    color: colors.gray400
                  }}
                  onClick={camModal.onOpen}
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
                  model={model}
                  setImages={setImages}
                  getInputProps={getInputProps}
                  open={open}
                  onDrop={onDrop}
                />
              </Content>
            </>)
        }

      </Container>

      <CameraModal
        isOpen={camModal.isOpen}
        onClose={camModal.onClose}
        model={model}
        images={images}
        setImages={setImages}
        setHandleDisplayable={setHandleDisplayable}
      />

      <ImageModal
        isOpen={imgModal.isOpen}
        onClose={imgModal.onClose}
        selectedImage={selectedImage}
      />

    </>
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
  outline-width: ${props => getBorder(props)};
  outline-color: ${props => getColor(props)};
  outline-style: dashed;
  width: 38rem;
  height: 32rem;
  background-color: ${colors.main};
  border-radius: 2rem;
  box-shadow: 0px 0px 4px 2px rgba(104, 109, 118, 0.25);
  outline-style: dashed;
  
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  ${({ disabled }) => !disabled} {
    opacity: 0.9;
    background-color: ${colors.gray400};
    }
  `

const ImageWrapContainer = styled.div`
  flex-wrap: wrap;
  gap: 1rem;
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