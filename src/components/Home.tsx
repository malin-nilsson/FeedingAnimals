import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IAnimal } from '../models/IAnimal'

const animalsFromApi = "https://animals.azurewebsites.net/api/animals";

export default function Home() {
    const [animals, setAnimals] = useState<IAnimal[]>([]);

    JSON.parse(localStorage.getItem("Animals") || "[]");

    const saveInLocalStorage = (allAnimals: IAnimal[]) => {
        localStorage.setItem("Animals", JSON.stringify(allAnimals));
    }
    useEffect(() => {
        if (animals.length !== 0) return;

        axios.get(animalsFromApi)
            .then((response) => {
                setAnimals(response.data);
                saveInLocalStorage(response.data)
            })
    })



    return (
        <>
            <Link to="/">Home</Link>

            {animals.map((item) => {
                return (<div key={item.id}>
                    <h3>{item.name}</h3>
                </div>
                )
            })}
        </>
    )
}
