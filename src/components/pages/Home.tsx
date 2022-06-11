import React from 'react'
import { IAnimal } from '../../models/IAnimal'
import ShowAllAnimals from '../ShowAllAnimals';
import { StyledParagraph } from '../styled-components/Paragraphs/StyledParagraphs';
import { LandingPageWrapperLg } from '../styled-components/Wrappers/StyledWrappers';

interface IHomeProps {
    animals: IAnimal[];
}

export default function Home(props: IHomeProps) {

    return (
        <>
            <StyledParagraph fontsize="1.5rem" padding="20px">
                Hjälp oss mata djuren som är hungriga!
            </StyledParagraph>
            <LandingPageWrapperLg>
                <ShowAllAnimals animals={props.animals} />
            </LandingPageWrapperLg>
        </>
    )
}
