import { Button, Select } from '@chakra-ui/react'
import styled from 'styled-components';
import MainPanel from './MainPanel';
import { useState } from 'react';
import { colors } from '../../style/color';

const SelectOptions = [
  {
    id: 1,
    name: 'option1',
    title: 'Option 1'
  },
  {
    id: 2,
    name: 'option2',
    title: 'Option 2'
  },
  {
    id: 3,
    name: 'option3',
    title: 'Option 3'
  },
  {
    id: 4,
    name: 'option4',
    title: 'Option 4'
  },
]

const Panel = ({type}) => {

  const [value, setValue] = useState()
  const [disabled, setDisabled] = useState(true)

  function handleSelection(e) {
    const newValue = e.target.value
    setValue(newValue)

    newValue ? setDisabled(false) : setDisabled(true)
  }

  return (
    <Container>
      <SelectContainer>
        <Select 
        onChange={(e) => handleSelection(e)}
        placeholder={`Choose a ${type.type}`}
        value={value}
        flex='7' 
        >
          {SelectOptions.map((item) => (
            <option key={item.id} value={item.name} >{item.title}</option>
          ))}
        </Select>
        <Button 
        flex='3' 
        color={colors.white} 
        backgroundColor={colors.main}
        onClick={() => {setDisabled(!disabled)}}
        >
          Create Model
        </Button>
      </SelectContainer>

      <MainPanel disabled={disabled}/>
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