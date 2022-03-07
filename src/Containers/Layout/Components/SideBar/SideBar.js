import React, { useState } from 'react'
import styled from 'styled-components'
import { Text } from '@Components'
import { Link } from 'react-router-dom'


const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState()

  function handleUpdate (item) {
    setSelectedItem(item)
  }

  return (
    <StyledContainer>
      <StyledLink to="./">
        <NavItem fontSize={3} onClick={() => handleUpdate('Home')} selectedValue={selectedItem === 'Home'}>
          Home
        </NavItem>
      </StyledLink>
      <StyledLink to="./aboutUs">
        <NavItem fontSize={3} onClick={() => handleUpdate('AboutUs')} selectedValue={selectedItem === 'AboutUs'}>
          About Us
        </NavItem>
      </StyledLink>
      <StyledLink to="./">
        <NavItem fontSize={3} onClick={() => handleUpdate('Reviews')} selectedValue={selectedItem === 'Reviews'}>
          Reviews
        </NavItem>
      </StyledLink>
    </StyledContainer>
  )
}
const StyledContainer = styled.div`
  min-height: 100%;
  width: 180px;
  background-color: #e0ecde;
  display: inline-block;
  align-items: center;
  top: 500px;
  z-index: 100;
  padding-bottom: 20px;
  //overflow : auto;
`


const NavItem = styled(Text).attrs({
  color: 'text.black',
  pl: '30px',
  pt: '12px',
  mt: '15px',
  mb: '-5px',
  width: '100%',
  height: '44px',
})`
  background-color: ${props => (props.selectedValue ? 'black' : 'transparent')};
  color: ${props => (props.selectedValue ? 'white' : 'black')};

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`

const StyledLink = styled(Link)`
  text-decoration-line: none;
`
export default SideBar
