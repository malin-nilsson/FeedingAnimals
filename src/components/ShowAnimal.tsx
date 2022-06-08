import React from 'react'
import { IAnimal } from '../models/IAnimal';

interface IShowAnimal {
    animal: IAnimal;
}

export default function ShowAnimal(props: IShowAnimal) {
    return (
        <>
            <div>
                <h3>{props.animal.name}</h3>
                <h4>Född: {props.animal.yearOfBirth}</h4>
            </div>
            <div>
                <img src={props.animal.imageUrl} alt={props.animal.name} />
            </div>

        </>
    )
}
