import React from 'react'
import { Link } from 'react-router-dom'
import { StyledHeading } from './styled-components/Headings/StyledHeadings'
import { StyledNavbar } from './styled-components/Navbar/StyledNavbar'

export default function Navbar() {
    return (

        <StyledNavbar>
            <StyledHeading>Våra djur</StyledHeading>
            <Link to="/">Home</Link>
        </StyledNavbar>

    )
}
