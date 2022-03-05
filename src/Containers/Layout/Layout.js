import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Header from '@Containers/Layout/Components/Header'

const Layout = () => {
  return (
    <StyledLayout>
      <Header/>
        <StyledPageBody>
          <Outlet/>
        </StyledPageBody>
    </StyledLayout>
  )
}
const StyledLayout = styled.div`
  height: 100%;
`


const StyledPageBody = styled.div`
  overflow: auto;
`

export default Layout
