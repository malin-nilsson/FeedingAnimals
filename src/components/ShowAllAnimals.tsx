import React, { useContext, useEffect } from 'react'
import { IAnimal } from '../models/IAnimal';
import { GridImageWrapper, LandingPageWrapperSm, TextWrapper } from './styled-components/Wrappers/StyledWrappers';
import { SmallHeading } from './styled-components/Headings/StyledHeadings';
import { Link } from 'react-router-dom';
import { StyledParagraph } from './styled-components/Paragraphs/StyledParagraphs';
import NotHungryIcon from './NotHungryIcon';
import HungryIcon from './HungryIcon';
import { AnimalContext } from '../contexts/AnimalContext';
import { StyledLoader } from './styled-components/Loader/StyledLoader';

interface IShowAllProps {
    loader: boolean;
}

export default function ShowAllAnimals(props: IShowAllProps) {
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
            {props.loader ? loaderHTML :
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

