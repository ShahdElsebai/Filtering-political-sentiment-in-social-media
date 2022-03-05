import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, Flex, Box, PopUpPage } from '@Components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import SideBar from '@Containers/Layout/Components/SideBar'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)
  const toggleExtendNavBar = () => {
    setExtendNavbar(!extendNavbar)
  }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <StyledMainContainer>
      <Flex height="75px" alignItems="center">
        <StyledNavbarInnerContainer>
          <StyledLeftContainer>
            <StyledHeader color="text.white">
              Filter Political Sentiment
            </StyledHeader>

          </StyledLeftContainer>
          <StyledRightContainer>
            <StyledNavbarLinkContainer>
              <StyledLink to="./homePage">
                <NavItem>Home</NavItem>
              </StyledLink>
              <StyledLink to="./aboutUs">
                <NavItem>About Us</NavItem>
              </StyledLink>
              <StyledLink to="./">
                <NavItem>Reviews</NavItem>
              </StyledLink>
            </StyledNavbarLinkContainer>
            <NavItem onClick={toggleExtendNavBar}>
              {extendNavbar ? (
                <CloseIcon onClick={() => setIsOpen(false)}/>
              ) : (
                <MenuIcon onClick={() => setIsOpen(true)}/>
              )}
            </NavItem>

          </StyledRightContainer>
        </StyledNavbarInnerContainer>
      </Flex>
      <PopUpPage
        open={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        {<SideBar/>}
      </PopUpPage>
    </StyledMainContainer>
  )
}
const StyledHeader = styled(Text)`
  font-family: Raleway, serif;
  color: white;
  font-size: 40px;
  @media (max-width: 750px) {
    font-size: 20px;
  }
`
const StyledMainContainer = styled.div`
  padding-left: 35px;
  background-color: #4d4c4c;
  height: 85px;
  width: 100%;
  z-index: 100;
  top: 0;
  @media (max-width: 1000px) {
    height: 65px;
  }
  @media (max-width: 450px) {
    height: 85px;
  }
`
const StyledLeftContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-start;

`
const StyledRightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
`
const StyledNavbarInnerContainer = styled.div`
  width: 100%;
  display: flex;
`
const StyledNavbarLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;;
  @media (max-width: 900px) {
    display: none;
  }
`
const NavItem = styled(Box).attrs({
  color: 'white',
  mr: '30px',
})`
  text-align: ${props => props?.textAlign ?? 'center'};
  display: flex;
  align-items: center;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    color: #76b4f1;
  }

`

const MenuIcon = styled(GiHamburgerMenu)`
  font-size: 20px;
  color: white;
  @media (min-width: 900px) {
    display: none;
  }
`

const CloseIcon = styled(AiOutlineClose)`
  font-size: 22px;
  color: white;
  @media (min-width: 900px) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  margin-top: 10px;
  text-decoration-line: none;
`
export default Navbar
