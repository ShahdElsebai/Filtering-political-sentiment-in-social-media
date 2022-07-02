import React from 'react'
import {dataArray} from "@Features/ReportPage/data";
import {Flex} from "@Components";
import styled from 'styled-components'
import Table from "../../Components/Table"

const ReportPage = () => {
    return (
        <StyledContainer>
            <Table loading={false} resultsCount={dataArray.length}>
                <Table.Thead>
                    <Table.HeaderRow>
                        <Table.Th>Sentence</Table.Th>
                        <Table.Th>Status</Table.Th>
                        <Table.Th>Percentage</Table.Th>
                    </Table.HeaderRow>
                </Table.Thead>
                <tbody>
                {
                    dataArray.map(sentence => (
                        <Table.BodyRow key={sentence.id}>
                            <Table.Td>
                                <Flex justifyContent='center' alignItems='center'>
                                    {sentence.text}
                                </Flex>
                            </Table.Td>
                            <Table.Td>
                                <Flex justifyContent='center' alignItems='center'>
                                    {sentence.percentage > 50 ? 'Political' : 'Non-Political'}
                                </Flex>
                            </Table.Td>
                            <Table.Td>
                                <Flex justifyContent='center' alignItems='center'>
                                    {sentence.percentage}%
                                </Flex>
                            </Table.Td>
                        </Table.BodyRow>
                    ))
                }
                </tbody>
            </Table>
        </StyledContainer>
    )
}
const StyledContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`
export default ReportPage