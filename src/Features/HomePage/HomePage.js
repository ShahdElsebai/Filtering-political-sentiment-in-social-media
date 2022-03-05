import React from 'react'
import styled from 'styled-components'
import { Flex, FluidContainer } from '@Components'
import searchImage from './Assets/images/search.svg'
import reviewsImage from './Assets/images/reviews.svg'


const HomePage = () => {
  return (
    <FluidContainer mt="100px" p="20px">
      <Flex width="100%">
        <StyledImage src={searchImage}/>
        <StyledDiv>
          <StyledInnerContainer>
            <StyledTextFiled placeholder="Enter text to check political percentage ."/>
            <Flex justifyContent="center">
              <StyledButton>Scan</StyledButton>

            </Flex>
          </StyledInnerContainer>

        </StyledDiv>
        <StyledImage src={reviewsImage}/>
      </Flex>
    </FluidContainer>
  )
}
const StyledTextFiled = styled.textarea`
  border: none;
  box-sizing: border-box;
  outline: none;
  overflow: auto;
  resize: none;
  padding: 20px;
  width: 100%;
  height: 100%;
  font-family: AkkuratPro, sans-serif;
`

const StyledDiv = styled.div`
  border: 1px solid #e7e9f5;
  border-radius: 16px;
  padding: 15px;
  position: relative;
  width: 60%;
  height: 350px;
  box-sizing: border-box;
  box-shadow: 5px 12px 48px rgb(109 117 141 / 20%);
  margin: 0 5% 0 5%;

`
const StyledInnerContainer = styled.div`
  height: 85%;
  width: 100%;
`

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 7%;

  @media (max-width: 750px) {
    width: 80px;
    height: 80px;

  }
`

const StyledButton = styled.button`
  font-family: Inter, sans-serif;
  border-radius: 5px;
  height: 40px;
  width: 40%;
  padding: 10px;
  background: rgb(17, 82, 166);
  color: white;
  font-size: 16px;

  &:hover {
    background: rgb(164, 198, 245);
    cursor: pointer;
  }
`
export default HomePage