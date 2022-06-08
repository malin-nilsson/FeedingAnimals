import React from 'react'
import { IAnimal } from '../models/IAnimal';
import { StyledSmallWrapper, StyledButtonWrapper } from './styled-components/Wrappers/StyledWrappers';
import { StyledButton } from './styled-components/Buttons/StyledButtons';
import { StyledHeading } from './styled-components/Headings/StyledHeadings';


interface IAnimalProps {
    animals: IAnimal[];
}

export default function Animals(props: IAnimalProps) {
    return (
        <>
            {props.animals.map((animal) => {
                return (<StyledSmallWrapper key={animal.id}>
                    <img src={animal.imageUrl} alt={animal.name} />
                    <StyledHeading fontsize="1.2rem">{animal.name}</StyledHeading>
                    <p>{animal.shortDescription}</p>
                </StyledSmallWrapper>
                )
            })}
        </>
    )
}
