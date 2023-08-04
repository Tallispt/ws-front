import { useState } from 'react';
import { IoEllipse, IoCheckmarkCircle } from 'react-icons/io5';
import styled from "styled-components";

const PicsChecker = ({ numOfPics, numOfTookenPics }) => {
  const [tookedPics, SetTookedPics] = useState(0)

  return (
    <ModalRightSide>
      <IconList>
        {[...Array(numOfPics)].map(() => <IoEllipse />)}
        {/* <IoCheckmarkCircle /> */}
      </IconList>
      <p>{tookedPics}/{numOfPics}</p>
      {/* <p>{numOfTookenPics}</p> */}
    </ModalRightSide>
  )
}

const ModalRightSide = styled.div`
  position: absolute;
  right: 20%;
  bottom: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  svg {
    width: 2.5rem;
    height: 2.5rem;
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.5rem; 
  }
`

const IconList = styled.div`
  display: flex;
`

export default PicsChecker