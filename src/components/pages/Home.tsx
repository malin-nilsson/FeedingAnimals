import React from 'react'
import { IAnimal } from '../../models/IAnimal'
import ShowAllAnimals from '../ShowAllAnimals';
import { LandingPageWrapperLg } from '../styled-components/Wrappers/StyledWrappers';

interface IHomeProps {
    animals: IAnimal[];
}

export default function Home(props: IHomeProps) {

    return (
        <>
            <LandingPageWrapperLg>
                <ShowAllAnimals animals={props.animals} />
            </LandingPageWrapperLg>
        </>
    )
}
