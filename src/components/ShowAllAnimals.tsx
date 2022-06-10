import React from 'react'
import { IAnimal } from '../models/IAnimal';
import { GridImageWrapper, LandingPageWrapperSm, TextWrapper } from './styled-components/Wrappers/StyledWrappers';
import { StyledHeading } from './styled-components/Headings/StyledHeadings';
import { Link } from 'react-router-dom';

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
                        <GridImageWrapper backgroundimg={
                            checkBgImage(animal)
                        }
                            backgroundpos={animal.id === 12 ? "center" : "top"}>
                        </GridImageWrapper>
                        <TextWrapper>
                            <StyledHeading fontsize="1.2rem" padding="3px">{animal.name}</StyledHeading>
                            <p>{animal.shortDescription}</p>
                        </TextWrapper>
                    </LandingPageWrapperSm>
                </Link>
                )
            })}
        </>
    )
}
