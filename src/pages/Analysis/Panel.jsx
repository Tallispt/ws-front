import { Select } from '@chakra-ui/react'
import styled from 'styled-components';
import MainPanel from './MainPanel';
import { useEffect, useState } from 'react';

const SelectOptions = [
  {
    id: 1,
    userId: '',
    name: 'deafult',
    title: 'Default Option',
    type: 'model',
    config: {
      numOfPictures: 3,
      detectBorders: true,
      regressionId: '',
      regressionName: 'default',
      xCoordLable: 'pH',
      xValues: [4, 5, 6, 7, 8, 9],
      yCoordLable: 'Color value',
      yValues: []
    }
  },
  {
    id: 2,
    userId: '',
    name: 'regression1',
    title: 'Regression 1',
    type: 'regression',
    config: {
      numOfPictures: 1,
      detectBorders: true,
      regressionName: 'default',
      xCoordLable: 'pH',
      xValues: [4, 5, 6, 7, 8, 9],
      yCoordLable: 'Color value',
      yValues: [],
      replicatesNum: 3,
      delta: true,
      rgb: true,
      cmyk: true,
      hsv: true,
      Euclidian: true,
    }
  },
  {
    id: 3,
    userId: '',
    name: 'regression2',
    title: 'Regression 2',
    type: 'regression',
    config: {
      numOfPictures: 1,
      detectBorders: true,
      regressionName: 'default',
      xCoordLable: 'pH',
      xValues: [4, 5, 6, 7, 8, 9],
      yCoordLable: 'Color value',
      yValues: [],
      replicatesNum: 3,
      delta: true,
      rgb: true,
      cmyk: true,
      hsv: true,
      Euclidian: true,
    }
  },
  {
    id: 4,
    userId: '',
    name: 'model1',
    title: 'Model 1',
    type: 'model',
    config: {
      numOfPictures: 3,
      detectBorders: true,
      regressionId: '',
      regressionName: 'default',
      xCoordLable: 'pH',
      xValues: [4, 5, 6, 7, 8, 9],
      yCoordLable: 'Color value',
      yValues: [],
    }
  },
]

const Panel = ({ type }) => {

  useEffect(() => {
    setOptions(() => SelectOptions.filter(item => item.type === type))
  }, [type])

  const [model, setModel] = useState()
  const [disabled, setDisabled] = useState(true)
  const [options, setOptions] = useState()
  // const { upload } = useUploadFile();

  function handleSelection(e) {
    const newValue = e.target.value
    const selectedOption = options.find(item => item.name === newValue)

    setModel(selectedOption)

    newValue ? setDisabled(false) : setDisabled(true)
  }

  return (
    <Container>
      <SelectContainer>
        <Select
          onChange={(e) => handleSelection(e)}
          placeholder={`Choose a ${type}`}
          value={model?.name}
          flex='7'
        >
          {options?.map((item) => (
            <option key={item.id} value={item.name} >{item.title}</option>
          ))}
        </Select>
      </SelectContainer>

      <MainPanel disabled={disabled} model={model} />
    </ Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const SelectContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0 3rem;
`

export default Panel;