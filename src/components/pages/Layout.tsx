import React from 'react'
import { Outlet } from 'react-router'
import GlobalStyle from '../styled-components/GlobalStyles'
import { StyledHeading } from '../styled-components/Headings/StyledHeadings'
import { StyledLayoutWrapper } from '../styled-components/Wrappers/StyledWrappers'

export default function Layout() {
    return (
        <>
            <GlobalStyle />
            <StyledLayoutWrapper>
                <StyledHeading>Feeding Animals</StyledHeading>
                <Outlet></Outlet>
            </StyledLayoutWrapper>
        </>
    )
}
