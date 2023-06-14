// import { useContext } from "react"
// import UserContext from "../../context/userContext"
import { Link } from "react-router-dom";
import styled from "styled-components"
import {IoPlanetOutline, IoCameraOutline, IoStatsChartOutline, IoOptionsOutline, IoEyedropOutline} from "react-icons/io5"
import { Drawer, DrawerOverlay, DrawerContent} from '@chakra-ui/react'
import { colors } from "../../style/color";

const Pages = [
  {
    name: "Analysis",
    icon: IoCameraOutline,
    route: "analysis"
  },
  {
    name: "Results",
    icon: IoStatsChartOutline,
    route: "result"
  },
  {
    name: "Mode",
    icon: IoEyedropOutline,
    route: "mode"
  },
  {
    name: "Settings",
    icon: IoOptionsOutline,
    route: "settings"
  },
]

function toggleOnDiffPage(pageRoute, pathName, onClose) {
  if(pageRoute !== pathName) {
    onClose()
  }
}

const SideMenu = ({...props}) => {
  
  // const { userData } = useContext(UserContext);
  const pathName = window.location.pathname.replace('/app/', '')

  return(
    <Drawer
    isOpen={props.isOpen}
    placement='right'
    onClose={props.onClose}
    >
      <DrawerOverlay />
      <Content>
        <DrawerTitle 
        to={'user'}
        pathName={pathName}
        onClick={() => {toggleOnDiffPage('user', pathName, props.onClose)}}>
          {/* TODO Trasformar em div para abrigar imagem do usuário */}
          <div>
            <IoPlanetOutline size={'2rem'}/> 
          </div>
          {/* TODO Abrigar nome do usuário vindo do Context */}
          <p>Username</p>
          {/* {userData.username} */}
        </DrawerTitle>
        <Divider />
        <DrawerBody>
          {Pages.map((page, i) => {return(
          <MenuItem
            key={i}
            to={page.route}
            pathName={pathName}
            onClick={() => {toggleOnDiffPage(page.route, pathName, props.onClose)}}
            >
            <page.icon size={'2rem'}/>
            <p> {page.name} </p>
          </MenuItem>
          )})}
        </DrawerBody>
      </Content>
    </Drawer>
  )
}


const Content = styled(DrawerContent)`
  padding: 0 1.5rem;
`

const DrawerTitle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0;

  div {
    position: absolute;
    left: 2rem;
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
    background-color: ${colors.gray};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-weight: 700;
    font-size: 24px;
  }

  &:hover {
    cursor: pointer;
    opacity: ${props => props.pathName !== props.to ? 0.8 : 1};
  }
`

const Divider = styled.div`
  background-color: ${colors.gray};
  width: 100%;
  height: 0.125rem;
`

const DrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem 1rem;
`

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: ${props => props.pathName !== props.to ? 0.6 : 1};

  p {
    font-weight: 500;
    font-size: 1.5rem;
  }

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`

export default SideMenu;