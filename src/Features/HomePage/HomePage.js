import React from 'react'
import styled from 'styled-components'
import searchImage from './Assets/images/search.svg'
import reviewsImage from './Assets/images/reviews.svg'
import 'react-circular-progressbar/dist/styles.css'
import {CircularProgressbar} from 'react-circular-progressbar'
import {useGetSentenceAnalysisMutation} from "../../Redux/projectApi"
import {Flex, Text, FluidContainer} from '@Components'
import {useForm} from "react-hook-form"

const HomePage = () => {
    const [analysis, {data, isLoading, isSuccess}] = useGetSentenceAnalysisMutation()
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (textValue) => {
        analysis(textValue.input)
    }

    const renderer = () => {
        if (isLoading) {
            return (
                <Flex justifyContent='center' alignItems='center' minHeight='inherit' width='100%'>
                    <h1>Loading</h1>
                </Flex>
            )
        } else if (isSuccess) {
            return (
                <Flex width="100%" justifyContent="center" alignItems='space-between' a mt="30px">
                    {
                        data?.text === 'political' ? (<Flex width="100%" justifyContent="center">
                            <StyledResult color="green">The sentence is political with percentage</StyledResult>
                            <Flex width="20%" >
                                <StyledCircularProgressbar value={(data?.summary * 100 ).toFixed(2)}
                                                           text={`${(data?.summary * 100 ).toFixed(2)}%`}/>
                            </Flex>

                        </Flex>) : (<Flex width="100%" justifyContent="center">
                            <StyledResult color="red">The sentence is not political.</StyledResult>
                        </Flex>)
                    }
                </Flex>
            )
        }
    }
    return (
        <FluidContainer mt="100px" p="20px">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex width="100%" justifyContent="center">
                    <div>
                        <Flex width="100%" justifyContent="center" mb="20px">
                            <StyledHeaderTitle>Political Sentiment Checker</StyledHeaderTitle>
                        </Flex>
                        <Flex width="100%" justifyContent="center">
                            <StyledHeaderp>Check if the sentence is political or not and show the political percentage
                                in it. </StyledHeaderp>
                        </Flex>
                    </div>
                </Flex>
                <Flex width="100%" justifyContent="center" ml="4%">
                    <Flex width="30%" justifyContent="center" mt="30px">
                        <StyledInnerContainerOfImage>
                            <StyledImage src={searchImage}/>
                            <StyledText>Check if the sentence is political or not . </StyledText>
                        </StyledInnerContainerOfImage>
                    </Flex>
                    <StyledDiv>

                        <StyledInnerContainer>
                            <StyledTextFiled required {...register('input', {required: true})}
                                             placeholder="Enter your text here..."/>
                            <Flex justifyContent="center">
                                <StyledButton>Classify your Text</StyledButton>
                            </Flex>
                        </StyledInnerContainer>

                    </StyledDiv>
                    <Flex width="30%" justifyContent="center" mt="30px">
                        <div>
                            <StyledImage src={reviewsImage}/>
                            <StyledText>Show the political percentage in the sentence. </StyledText>
                        </div>
                    </Flex>
                </Flex>
                <Flex width="100%" justifyContent="center" ml="4%">
                {renderer()}
                </Flex>
            </form>

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
  margin-right: 5%;

  @media (max-width: 750px) {
    margin-left: 5%;

  }
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
  padding: 10px;
  background-color: #02022f;
  color: white;
  font-size: 16px;

  &:hover {
    background: rgb(4, 21, 108);
    cursor: pointer;
  }

  @media (max-width: 750px) {
    font-size: 16px;
  }
`

const StyledHeaderTitle = styled(Text)`
  font-family: Raleway, serif;
  color: #011549;
  font-size: 45px;
  font-weight: 500;
  @media (max-width: 750px) {
    font-size: 20px;
  }
`

const StyledHeaderp = styled(Text)`
  font-family: Raleway, serif;
  color: #002073;
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 50%;
  line-height: 1.2;
  @media (max-width: 750px) {
    font-size: 14px;
    //width: 60%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

`
const StyledText = styled(Text)`
  font-family: Raleway, serif;
  color: #002073;
  font-size: 16px;
  margin-top: 20px;
  line-height: 1.2;
  width: 50%;
  @media (max-width: 750px) {
    width: 90%;
    margin-top: 10px;
    font-size: 14px;
  }

`

const StyledInnerContainerOfImage = styled.div`
  margin-left: 20%;

`
const StyledCircularProgressbar = styled(CircularProgressbar)`
  width: 35%;
  height: 100px;

`

const StyledResult = styled(Text)`
  margin: 3% 5% 0 0;
  font-size: 25px;
  @media (max-width: 750px) {

    font-size: 14px;
  }
`
export default HomePage