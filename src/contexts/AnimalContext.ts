import { IAnimal } from "../models/IAnimal";
import { createContext } from "react";

export interface AnimalInterface {
    animals: IAnimal[];
    feedAnimal(a: IAnimal): void;
}

export const defaultValue: AnimalInterface = {
    animals: [],
    feedAnimal: (a: IAnimal) => { },
};

export const AnimalContext = createContext(defaultValue)
