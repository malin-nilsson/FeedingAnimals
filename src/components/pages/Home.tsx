import React, { useContext, useEffect, useState } from 'react'
import { AnimalContext } from '../../contexts/AnimalContext';
import { IAnimal } from '../../models/IAnimal';
import FoodIcon from '../FoodIcon';
import ShowAllAnimals from '../ShowAllAnimals';
import { StyledParagraph } from '../styledComponents/Text/StyledParagraphs';
import { LandingPageWrapperLg } from '../styledComponents/Wrappers/StyledWrappers';

export default function Home() {
    const animals = useContext(AnimalContext);
    const [allFed, setAllFed] = useState(false);
    const [hungryAnimals, setHungryAnimals] = useState<IAnimal[]>([]);

    useEffect(() => {
        const fed = animals.animals.every(animal => animal.isFed);
        setAllFed(fed)

        const num = animals.animals.filter((animal) => animal.isFed === false);
        setHungryAnimals(num)

    }, [animals.animals])

    return (
        <>
            <StyledParagraph
                bgcolor="#d4e3cd"
                fontsize="1.1rem"
                padding="10px 0px"
                querydirection="row"
                querydisplay="flex"
                queryjustify="center"
                querypadding="15px 0px">
                {allFed ? "Alla djuren är matade" :
                    "Just nu är " + hungryAnimals.length + " djur hungriga! Gå gärna in och mata dem"}
                <FoodIcon />
            </StyledParagraph>
            <LandingPageWrapperLg>
                <ShowAllAnimals />
            </LandingPageWrapperLg>
        </>
    )
}