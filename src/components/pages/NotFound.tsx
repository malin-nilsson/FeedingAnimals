/////////////
// IMPORTS //
/////////////
import React from 'react'
// Routing
import { Link } from 'react-router-dom'
// Styled components
import { NotFoundWrapper } from '../styledComponents/Wrappers/StyledWrappers'

export default function NotFound() {
    return (
        <NotFoundWrapper>
            Oj, denna sida finns inte!
            <Link to="/">Gå tillbaka</Link>
        </NotFoundWrapper>
    )
}
