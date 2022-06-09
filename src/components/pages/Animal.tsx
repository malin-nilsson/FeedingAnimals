import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IAnimal } from '../../models/IAnimal';
import { StyledButton } from '../styled-components/Buttons/StyledButtons';
import { StyledHeading } from '../styled-components/Headings/StyledHeadings';
import { SingleImageWrapper, SinglePageWrapperLg, SinglePageWrapperSm } from '../styled-components/Wrappers/StyledWrappers';

interface IAnimalProps {
    animal: IAnimal;
    feedAnimal: (a: IAnimal) => void;
}

export default function Animal(props: IAnimalProps) {
    const [specificAnimal, setSpecificAnimal] = useState<IAnimal>(
        {
            id: 0,
            imageUrl: "",
            isFed: false,
            lastFed: "",
            latinName: "",
            longDescription: "",
            medicine: "",
            name: "",
            shortDescription: "",
            yearOfBirth: 0,
        }
    );

    let params = useParams();


    useEffect(() => {
        const storedAnimals = JSON.parse(localStorage.getItem("Animals") || "");

        for (let i = 0; i < storedAnimals.length; i++) {
            if (storedAnimals[i].id.toString() === params.id) {
                setSpecificAnimal(storedAnimals[i])
            }
        }
    }, [props.animal])


    const feedAnimal = (a: IAnimal) => {
        props.feedAnimal(a)
    };

    return (
        <>
            <SinglePageWrapperLg>
                <SingleImageWrapper>
                    <img src={specificAnimal.imageUrl} alt={specificAnimal.name} />
                </SingleImageWrapper>
                <SinglePageWrapperSm>
                    <StyledHeading padding="0px" fontsize="1.2rem">{specificAnimal.name}</StyledHeading>
                    <StyledHeading padding="0px" fontsize="1rem">Född: {specificAnimal.yearOfBirth}</StyledHeading>
                    <StyledHeading padding="0px" fontsize="1rem">Latin: {specificAnimal.latinName}</StyledHeading>
                    <StyledHeading padding="0px" fontsize="1rem">Mediciner: {specificAnimal.medicine} </StyledHeading>
                    <StyledHeading padding="0px" fontsize="1rem">Hungrig: {props.animal.isFed ? "Nej" : "Ja"} </StyledHeading>
                    <StyledHeading padding="0px" fontsize="1rem">Åt senast: {props.animal.lastFed}</StyledHeading>
                    <p>{specificAnimal.longDescription}</p>
                    <StyledButton onClick={((e) => { feedAnimal(specificAnimal) })}>Mata djur</StyledButton>
                </SinglePageWrapperSm>
            </SinglePageWrapperLg>
        </>
    )
}
