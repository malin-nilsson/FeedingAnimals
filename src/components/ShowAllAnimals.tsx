import React from 'react'
import { IAnimal } from '../models/IAnimal';
import { GridImageWrapper, LandingPageWrapperSm, TextWrapper } from './styled-components/Wrappers/StyledWrappers';
import { SmallHeading } from './styled-components/Headings/StyledHeadings';
import { Link } from 'react-router-dom';
import { StyledParagraph } from './styled-components/Paragraphs/StyledParagraphs';
import NotHungryIcon from './NotHungryIcon';
import HungryIcon from './HungryIcon';

interface IAllAnimals {
    animals: IAnimal[];
}

export default function ShowAllAnimals(props: IAllAnimals) {

    const checkBgImage = (animal: IAnimal) => {
        if (animal.id === 1) {
            return "/assets/cat.jpg";
        } else if (animal.id === 2) {
            return "/assets/dog.jpg";
        } else {
            return animal.imageUrl;
        }
    }

    return (
        <>
            {props.animals.map((animal) => {
                return (<Link to={"/animal/" + animal.id} key={animal.id}
                    className="card">
                    <LandingPageWrapperSm>
                        <GridImageWrapper
                            backgroundimg={checkBgImage(animal)}
                            backgroundpos={animal.id === 12 ? "center" : "top"}>
                        </GridImageWrapper>
                        <TextWrapper>
                            {animal.isFed ? <StyledParagraph align="left" direction="row" querydirection="row">
                                <NotHungryIcon />
                                Jag är mätt!</StyledParagraph> :
                                <StyledParagraph align="left" direction="row" querydirection="row">
                                    <HungryIcon />
                                    Jag är hungrig!</StyledParagraph>}
                            <SmallHeading fontsize="1.5rem" padding="10px 0px">{animal.name}</SmallHeading>
                            <StyledParagraph fontsize="0.9rem">{animal.shortDescription}</StyledParagraph>
                        </TextWrapper>
                    </LandingPageWrapperSm>
                </Link>
                )
            })}
        </>
    )
}

