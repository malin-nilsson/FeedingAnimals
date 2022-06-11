import React from 'react'
import { IAnimal } from '../../models/IAnimal'
import FoodIcon from '../FoodIcon';
import ShowAllAnimals from '../ShowAllAnimals';
import { StyledParagraph } from '../styled-components/Paragraphs/StyledParagraphs';
import { LandingPageWrapperLg } from '../styled-components/Wrappers/StyledWrappers';

interface IHomeProps {
    animals: IAnimal[];
}

export default function Home(props: IHomeProps) {
    const checkIfAllAreFed = props.animals.every(animal => animal.isFed);
    const numOfHungryAnimals = props.animals.filter((animal) => animal.isFed === false);

    return (
        <>
            <StyledParagraph bgcolor="#d4e3cd" fontsize="1.1rem" padding="10px 0px" querydirection="row" querydisplay="flex" queryjustify="center" querypadding="15px 0px">
                {checkIfAllAreFed ? "Alla djuren är matade" : "Just nu är " + numOfHungryAnimals.length + " djur hungriga! Du får gärna gå in och mata dem."}
                <FoodIcon />
            </StyledParagraph>
            <LandingPageWrapperLg>
                <ShowAllAnimals animals={props.animals} />
            </LandingPageWrapperLg>
        </>
    )
}