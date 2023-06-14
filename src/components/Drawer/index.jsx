import { useContext } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import UserContext from "../../context/userContext"
import {IoPlanetOutline, IoCameraOutline, IoStatsChartOutline, IoOptionsOutline} from "react-icons/io5"
import { Drawer, DrawerOverlay, DrawerContent} from '@chakra-ui/react'
import { colors } from "../../style/color";

const Pages = [
  {
    name: "Analysis",
    icon: IoCameraOutline,
    route: "/"
  },
  {
    name: "Result",
    icon: IoStatsChartOutline,
    route: ""
  },
  {
    name: "Settings",
    icon: IoOptionsOutline,
    route: ""
  },
]

const SideMenu = ({...props}) => {
  
  const { userData } = useContext(UserContext);

  return(
    <Drawer
    isOpen={props.isOpen}
    placement='right'
    onClose={props.onClose}
    >
      <DrawerOverlay />
      <Content>
        <DrawerTitle>
          <div>
            <IoPlanetOutline size={'2rem'}/> 
          </div>
          <p>Username</p>
          {/* {userData.username} */}
        </DrawerTitle>
        <Divider />
        <DrawerBody>
          {Pages.map((item, index) => {return(
          <MenuItem key={index} to={item.route}>
            <item.icon size={'2rem'}/>
            <p> {item.name} </p>
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

const DrawerTitle = styled.div`
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
    opacity: 0.8;
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
  opacity: 0.6;

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