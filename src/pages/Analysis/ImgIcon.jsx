import styled from "styled-components"
import { IoEllipsisHorizontal, IoCropOutline, IoCameraReverseOutline, IoCloudUploadOutline } from 'react-icons/io5';
import { colors } from "../../style/color";
import { CloseButton, IconButton, Menu, MenuButton, MenuItem, MenuList, Input } from "@chakra-ui/react";

const ImgIcon = ({ img, setSelectedImage, onOpen, open, setImages, images, getInputProps }) => {

  const handleDeleteItem = () => {
    setImages(images.filter((item) => item.key !== img.key))
  }

  const handleModalOpen = () => {
    onOpen()
    setSelectedImage(img)
  }

  const handleEditItem = () => {

  }

  const handleRecaptureItem = () => {

  }

  const handleReuploadItem = () => {

  }


  return (
    <Item >
      <Header>
        <CloseButton onClick={handleDeleteItem} size='md' />
      </Header>
      <Image src={img.base64} alt={`imag1.5em_${img.key}`}
        onClick={handleModalOpen} />
      <Footer>
        <p onClick={handleModalOpen}>{img.name}</p>
        <Menu isLazy>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<IoEllipsisHorizontal />}
            variant='ghost'
          />
          <MenuList>
            <MenuItem
              icon={<IoCropOutline />}
              onClick={handleEditItem}>
              Edit
            </MenuItem>
            <MenuItem
              icon={<IoCameraReverseOutline />}
              onClick={handleRecaptureItem}>
              Recapture
            </MenuItem>
            <MenuItem icon={<IoCloudUploadOutline />} onClick={handleReuploadItem}>
              Reupload
              <Input {...getInputProps()} />
            </MenuItem>
          </MenuList>
        </Menu>
      </Footer>
    </Item>
  )
}

const Item = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 1rem;
  background: #D9D9D9;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 1rem 0.5rem 1rem;
  transition: border 0.1s;

  img:hover, p:hover {
    cursor: pointer;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Image = styled.img`
  width: 10rem;
  height: 8rem;
  object-fit: cover;
  padding: 0.2rem 0 0.5rem 0;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default ImgIcon