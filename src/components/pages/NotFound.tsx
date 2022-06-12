import React from 'react'
import { Link } from 'react-router-dom'
import { NotFoundWrapper } from '../styled-components/Wrappers/StyledWrappers'

export default function NotFound() {
    return (
        <NotFoundWrapper>
            Oj, denna sida finns inte!
            <Link to="/">Gå tillbaka</Link>
        </NotFoundWrapper>
    )
}
