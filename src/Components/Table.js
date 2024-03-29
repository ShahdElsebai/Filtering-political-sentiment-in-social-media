import React from 'react'
import styled from 'styled-components'
import { Flex, Text, Box } from '@Components'

const Table = ({ children, loading, resultsCount }) => {
	const renderer = () => {
		if (loading) {
			return (
				<Flex justifyContent='center' alignItems='center' minHeight='inherit' width='100%'>
					<h1>Loading</h1>
				</Flex>
			)
		}
		if (resultsCount === 0) {
			return (
				<Flex justifyContent='center' alignItems='center' minHeight='inherit' width='100%'>
					<Text variant='title4'>No data is found</Text>
				</Flex>
			)
		}

		return <StyledTable>{children}</StyledTable>
	}
	return (
		<>
			<Box bg='white' minHeight='662px' border='1px solid #D8DDE4' borderRadius='16px'>
				{renderer()}
			</Box>
		</>
	)
}

Table.defaultProps = {
	loading: false,
}
const StyledTable = styled.table`
	width: 85vw;
`
const BodyRow = styled.tr`
	height: 100%;
	margin-left: 4px;
	margin-right: 4px;
`

const CenteredTh = styled.th`
	vertical-align: bottom;
	padding: 24px 15px;
	background: #d9e2eb;
	font-weight: 400;
`

const CenteredTd = styled.td`
	padding: 24px 15px;
	line-height: 1.5rem;
	letter-spacing: 0.04rem;
	border-bottom: 2px solid #dee2e6;
	color: #616b7e;
	font-size: 14px;
`

const TableHeader = styled.thead`
	border-bottom: 1px solid #d8dde4;
`

const HeaderRow = styled.tr`
	height: 60px;
`

Table.Thead = TableHeader
Table.HeaderRow = HeaderRow
Table.Th = CenteredTh
Table.BodyRow = BodyRow
Table.Td = CenteredTd

export default Table
