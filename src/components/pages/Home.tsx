/////////////
// IMPORTS //
/////////////
import React, { useContext, useEffect, useState } from 'react'
// Context
import { AnimalContext } from '../../contexts/AnimalContext';
// Models
import { IAnimal } from '../../models/IAnimal';
// Components
import FoodIcon from '../FoodIcon';
import ShowAllAnimals from '../ShowAllAnimals';
// Styled components
import { StyledParagraph } from '../styledComponents/Text/StyledParagraphs';
import { FlexWrapperLg } from '../styledComponents/Wrappers/StyledWrappers';

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
                bgColor="#d4e3cd"
                fontSize="1.1rem"
                padding="10px 0px"
                queryDirection="row"
                queryDisplay="flex"
                queryJustify="center"
                queryPadding="15px 0px">
                {allFed ? "Alla djuren är matade" :
                    "Just nu är " + hungryAnimals.length + " djur hungriga! Gå gärna in och mata dem"}
                <FoodIcon />
            </StyledParagraph>
            <FlexWrapperLg>
                <ShowAllAnimals />
            </FlexWrapperLg>
        </>
    )
}