import { IAnimal } from "../models/IAnimal";
import { createContext } from "react";

export interface AnimalInterface {
    animals: IAnimal[];
    loader: boolean;
    feedAnimal(a: IAnimal): void;
}

export const defaultValue: AnimalInterface = {
    animals: [],
    loader: true,
    feedAnimal: (a: IAnimal) => { },
};

export const AnimalContext = createContext(defaultValue)
