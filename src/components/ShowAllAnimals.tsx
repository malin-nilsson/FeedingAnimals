import React, { useContext, useEffect } from 'react'
import { IAnimal } from '../models/IAnimal';
import { GridImageWrapper, LandingPageWrapperSm, TextWrapper } from './styledComponents/Wrappers/StyledWrappers';
import { SmallHeading } from './styledComponents/Headings/StyledHeadings';
import { Link } from 'react-router-dom';
import { StyledParagraph } from './styledComponents/Text/StyledParagraphs';
import NotHungryIcon from './NotHungryIcon';
import HungryIcon from './HungryIcon';
import { AnimalContext } from '../contexts/AnimalContext';
import { StyledLoader } from './styledComponents/Loader/StyledLoader';

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
                querypadding="8px"
                queryalign="center"
                fontsize="1.6rem">
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
                        <LandingPageWrapperSm>
                            <GridImageWrapper
                                backgroundimg={checkBgImage(animal)}
                                backgroundpos={animal.id === 12 ? "center" : "top"}>
                            </GridImageWrapper>
                            <TextWrapper>
                                {animal.isFed ?
                                    <StyledParagraph
                                        align="left"
                                        direction="row"
                                        querydirection="row">
                                        <NotHungryIcon />
                                        Jag är mätt!</StyledParagraph> :
                                    <StyledParagraph
                                        align="left"
                                        direction="row"
                                        querydirection="row">
                                        <HungryIcon />
                                        Jag är hungrig!</StyledParagraph>}
                                <SmallHeading
                                    fontsize="1.5rem"
                                    padding="10px 0px">{animal.name}</SmallHeading>
                                <StyledParagraph
                                    fontsize="0.9rem">{animal.shortDescription}</StyledParagraph>
                            </TextWrapper>
                        </LandingPageWrapperSm>
                    </Link>
                    )
                })
            }
        </>
    )
}

