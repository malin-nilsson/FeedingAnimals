/////////////
// IMPORTS //
/////////////
import React, { useContext } from 'react'
// Models
import { IAnimal } from '../models/IAnimal';
// Styled components
import { GridImageWrapper, FlexWrapperSm, TextWrapper } from './styledComponents/Wrappers/StyledWrappers';
import { SmallHeading } from './styledComponents/Headings/StyledHeadings';
import { StyledParagraph } from './styledComponents/Text/StyledParagraphs';
import { StyledLoader } from './styledComponents/Loader/StyledLoader';
// Routing
import { Link } from 'react-router-dom';
// Components
import NotHungryIcon from './NotHungryIcon';
import HungryIcon from './HungryIcon';
// Context
import { AnimalContext } from '../contexts/AnimalContext';

export default function ShowAllAnimals() {
    let animals = useContext(AnimalContext);

    const checkBgImage = (animal: IAnimal) => {
        if (animal.id === 1) {
            return "/assets/cat.jpg";
        } else if (animal.id === 2) {
            return "/assets/dog.jpg";
        } else {
            return animal.imageUrl;
        }
    }

    const loaderHTML = (
        <>
            <StyledLoader>
            </StyledLoader>
            <StyledParagraph
                queryPadding="8px"
                queryAlign="center"
                fontSize="1.6rem">
                Loading...
            </StyledParagraph>
        </>
    )

    return (
        <>
            {animals.loader ? loaderHTML :
                animals.animals.map((animal: IAnimal) => {
                    return (<Link to={"/animal/" + animal.id} key={animal.id}
                        className="card">
                        <FlexWrapperSm>
                            <GridImageWrapper
                                backgroundImg={checkBgImage(animal)}
                                backgroundPos={animal.id === 12 ? "center" : "top"}>
                            </GridImageWrapper>
                            <TextWrapper>
                                {animal.isFed ?
                                    <StyledParagraph
                                        align="left"
                                        direction="row"
                                        queryDirection="row">
                                        <NotHungryIcon />
                                        Jag är mätt!</StyledParagraph> :
                                    <StyledParagraph
                                        align="left"
                                        direction="row"
                                        queryDirection="row">
                                        <HungryIcon />
                                        Jag är hungrig!</StyledParagraph>}
                                <SmallHeading
                                    fontSize="1.5rem"
                                    padding="10px 0px">{animal.name}</SmallHeading>
                                <StyledParagraph
                                    fontSize="0.9rem">{animal.shortDescription}</StyledParagraph>
                            </TextWrapper>
                        </FlexWrapperSm>
                    </Link>
                    )
                })
            }
        </>
    )
}

