/////////////
// IMPORTS //
/////////////
import React from 'react'
// Routing
import { Outlet } from 'react-router'
// Styled components
import GlobalStyle from '../GlobalStyles'
import { LayoutWrapper } from '../styledComponents/Wrappers/StyledWrappers'
// Components
import Navbar from '../Navbar'

export default function Layout() {
    return (
        <>
            <GlobalStyle />
            <LayoutWrapper>
                <Navbar />
                <Outlet></Outlet>
            </LayoutWrapper>
        </>
    )
}
