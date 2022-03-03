import React from 'react'
import styled from 'styled-components'
import { Flex } from '@Components'
import { Outlet } from 'react-router-dom'
import Header from '@Containers/Layout/Components/Header'
import SideBar from '@Containers/Layout/Components/SideBar'
import { useMediaQuery } from '@Hooks'


const Layout = () => {
	const matches = useMediaQuery('(max-width: 900px)')
	return (
		<StyledLayout>
			<Header />
			<Flex>
				{matches &&<StyledLeftPart>
					<SideBar />
				</StyledLeftPart> }

				<StyledPageBody>
					<Outlet />
				</StyledPageBody>
			</Flex>
		</StyledLayout>
	)
}
const StyledLayout = styled.div`
	height: 100%;
`

const StyledLeftPart = styled.div`
	@media (max-width: 900px) {
		display: none;
	}
`
const StyledPageBody = styled.div`
	flex-grow: 1;
	overflow: auto;
	padding: 16px 0;
`

export default Layout
