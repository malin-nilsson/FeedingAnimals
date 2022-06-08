import React from 'react'
import { IAnimal } from '../models/IAnimal';
import { StyledSmallWrapper } from './styled-components/Wrappers/StyledWrappers';

interface IAnimalProps {
    animals: IAnimal[];
}

export default function Animals(props: IAnimalProps) {
    return (
        <>
            {props.animals.map((animal) => {
                return (<StyledSmallWrapper key={animal.id}>
                    <img src={animal.imageUrl} alt={animal.name} />
                    <h3>{animal.name}</h3>
                    <p>{animal.shortDescription}</p>
                </StyledSmallWrapper>
                )
            })}
        </>
    )
}
