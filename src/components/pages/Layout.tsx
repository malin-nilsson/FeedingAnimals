import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import GlobalStyle from '../GlobalStyles'
import Navbar from '../Navbar'
import { StyledHeading } from '../styled-components/Headings/StyledHeadings'
import { StyledLayoutWrapper } from '../styled-components/Wrappers/StyledWrappers'

export default function Layout() {
    return (
        <>
            <GlobalStyle />
            <StyledLayoutWrapper>
                <Navbar />
                <Outlet></Outlet>
            </StyledLayoutWrapper>
        </>
    )
}
