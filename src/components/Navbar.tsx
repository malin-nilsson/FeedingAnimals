import React from 'react'
import { Link } from 'react-router-dom'
import { BigHeading } from './styled-components/Headings/StyledHeadings'
import { StyledNavbar } from './styled-components/Navbar/StyledNavbar'

export default function Navbar() {
    return (

        <StyledNavbar>
            <BigHeading fontsize="2.2rem">Våra djur</BigHeading>
        </StyledNavbar>

    )
}
