import styled from "styled-components"
import {IoMenuOutline} from "react-icons/io5"

import { colors } from "../../style/color"
import MainLogo from "../MainLogo"
import { useDisclosure } from "@chakra-ui/react"
import SideMenu from "../Drawer"
      
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HeaderContainer>
      <MainLogo fontSize="3.4rem"/>
      <IoMenuOutline 
        color={colors.main} 
        size={48}
        onClick={onOpen}
        />

      <SideMenu isOpen={isOpen} onClose={onClose}/>

    </HeaderContainer>

  )
}

const HeaderContainer = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  svg:hover {
    cursor: pointer;
  }
`

export default Header