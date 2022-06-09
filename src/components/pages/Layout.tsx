import React from 'react'
import { Outlet } from 'react-router'
import GlobalStyle from '../GlobalStyles'
import Navbar from '../Navbar'
import { LayoutWrapper } from '../styled-components/Wrappers/StyledWrappers'

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
