import styled from "styled-components";
import { IoFlaskOutline } from "react-icons/io5";
import useResult from "../../hooks/api/useResult";


import { colors } from "../../style/color";


const ResultPage = () => {

  const { resultData } = useResult()

  return (
    <Container>
      {
        !resultData ?

          (<NoDataItem>
            <IoFlaskOutline />
            <div>
              <h1>No data found</h1>
              <p>Create an analysis</p>
            </div>
          </NoDataItem>) :

          (resultData?.map((item) => (<ResultItem>{item.title}</ResultItem>)))
      }


    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const ResultItem = styled.div`
  width: 38rem;
  height: 12rem;
  border-radius: 0.3rem;
  padding: 2rem;
  border: 1px solid ${colors.graysh};
  background: white;
  box-shadow: 0px 0px 0px 1px rgba(238, 238, 238, 0.25);
`

const NoDataItem = styled.div`
  color: ${colors.gray600};
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 30vh;

  svg {
    width: 4rem;
    height: 4rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
  }
`

export default ResultPage;