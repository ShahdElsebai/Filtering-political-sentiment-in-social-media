import React from 'react'
import { Text, Flex } from '@Components'
import styled from 'styled-components'
import introImage from './/Assets/images/intro.svg'
import problemDefinitionImage from './Assets/images/problemDefinition.svg'
import searchImage from './Assets/images/search.svg'


const AboutUs = () => {
  return (

    <StyledContainer flexDirection={['column', null, 'row']}>
      <StyledOuterLeftContainer>
        <StyledCard bg="#F7E6C8">
          <Text fontSize="34px" fontWeight="bold" margin="20px">
            Introduction
          </Text>
          <Flex>
            <StyledLeftContainer>
              <Text fontSize="22px" marginLeft="40px">
                People's thoughts and feelings can find a powerful outlet on social media, where extreme opinions are expressed.
                People's opinions play an important role in influencing people's feelings towards a government or an institution.
              </Text>
            </StyledLeftContainer>
            <StyledRightContainer>
              <StyledImage src={introImage} marginTop="-10px"/>
            </StyledRightContainer>
          </Flex>

        </StyledCard>
      </StyledOuterLeftContainer>

      <StyledOuterRightContainer>
        <StyledCard marginLeft="500px" bg="#F7F7F7">
          <Text fontSize="34px" fontWeight="bold" margin="20px">
            Problem Definition
          </Text>
          <Flex>
            <StyledLeftContainer>
              <Text fontSize="22px" marginLeft="40px">
                The rapid growth and popularity of social networks has
                led to the creation of vast amounts of textual data, often
                in an unstructured, fragmented, and informal form.
              </Text>
            </StyledLeftContainer>
            <StyledRightContainer>
              <StyledImage src={problemDefinitionImage} marginTop="-10px"/>
            </StyledRightContainer>
          </Flex>

        </StyledCard>
      </StyledOuterRightContainer>
      <StyledOuterLeftContainer>
        <StyledCard bg="#DADADA">
          <Text fontSize="34px" fontWeight="bold" margin="20px">
            Objective
          </Text>
          <Flex>
            <StyledLeftContainer>
              <Text fontSize="22px" marginLeft="40px">
                Proposing an approach to filter politically risky sentiments using textual information.
                The proposed approach aims to detect malicious political sentiments or
                comments from social media posts,
                which play an important role in influencing people's and societies sentiments.
              </Text>
            </StyledLeftContainer>
            <StyledRightContainer>
              <StyledImage src={searchImage}/>
            </StyledRightContainer>
          </Flex>

        </StyledCard>
      </StyledOuterLeftContainer>
    </StyledContainer>

  )
}

const StyledContainer = styled.div`
  margin-top: 50px;
  width: 100%;

`
const StyledOuterRightContainer = styled.div`
  margin-left: calc(50% - 60px);
  width: 50%;
  @media (max-width: 900px) {
    margin-left: calc(20% - 60px);
    width: 70%;
  }
  @media (max-width: 750px) {
    margin-left: 0;
    width: 90%;
  }
`
const StyledOuterLeftContainer = styled.div`
  width: 50%;
  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 750px) {
    margin-left: 0;
    width: 90%;
  }
`
const StyledRightContainer = styled.div`
  width: 25%;

`

const StyledLeftContainer = styled.div`
  width: 75%;
`

const StyledCard = styled.div`

  box-shadow: 5px 5px 5px 5px lightgray;
  border-radius: 5px;
  height: calc(20% - 60px);
  padding: 20px;
  margin-bottom: 50px;
  margin-left: 50px;
  background-color: ${props => props.bg};

`

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 10%;
  @media (max-width: 1250px) {
    width: calc(50% - 15px);
    height: 67px;
  }
  @media (max-width: 750px) {
    width: 80px;
    height: 80px;
    left: calc(90% - 10px);
  }
`

export default AboutUs