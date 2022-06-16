import { IAnimal } from "../models/IAnimal";

export const updateToHungry = (a: IAnimal) => {
    a.isFed = false;
    a.lastFed = new Date().toString();
}

export const getHoursSinceFed = (a: IAnimal) => {
    return Math.floor((new Date().getTime() - new Date(a.lastFed).getTime()) / (1000 * 60 * 60));
}