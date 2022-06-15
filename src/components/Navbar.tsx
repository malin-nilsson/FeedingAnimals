import React from 'react'
import { Link } from 'react-router-dom'
import { BigHeading } from './styledComponents/Headings/StyledHeadings'
import { StyledNavbar } from './styledComponents/Navbar/StyledNavbar'

export default function Navbar() {
    return (
        <StyledNavbar>
            <BigHeading fontSize="2.2rem">Våra djur</BigHeading>
        </StyledNavbar>

    )
}
