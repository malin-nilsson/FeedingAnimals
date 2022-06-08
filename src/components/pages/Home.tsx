import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IAnimal } from '../../models/IAnimal'
import Animals from '../Animals';
import { StyledSmallWrapper, StyledBigWrapper } from '../styled-components/Wrappers/StyledWrappers';

const animalsFromApi = "https://animals.azurewebsites.net/api/animals";

export default function Home() {
    const [animals, setAnimals] = useState<IAnimal[]>([]);

    JSON.parse(localStorage.getItem("Animals") || "[]");

    const saveInLocalStorage = (allAnimals: IAnimal[]) => {
        localStorage.setItem("Animals", JSON.stringify(allAnimals));
    }
    useEffect(() => {
        if (animals.length !== 0) return;

        axios.get<IAnimal[]>(animalsFromApi)
            .then((response) => {
                response.data.splice(0, 2);
                setAnimals(response.data);
                saveInLocalStorage(response.data)
            })
    })

    return (
        <>
            <StyledBigWrapper>
                <Animals animals={animals} />
            </StyledBigWrapper>
        </>
    )
}
