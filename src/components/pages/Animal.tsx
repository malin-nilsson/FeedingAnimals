import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IAnimal } from '../../models/IAnimal';
import ShowAnimal from '../ShowAnimal';
import { StyledBigWrapper } from '../styled-components/Wrappers/StyledWrappers';

const animalsFromApi = "https://animals.azurewebsites.net/api/animals/";


export default function Animal() {
    const [animal, setAnimal] = useState<IAnimal>(
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
        axios.get<IAnimal>(animalsFromApi + params.id)
            .then((response) => {
                setAnimal(response.data);
            })
    }, [])

    return (
        <>
            <StyledBigWrapper>
                <ShowAnimal animal={animal} />
            </StyledBigWrapper>
        </>
    )
}
