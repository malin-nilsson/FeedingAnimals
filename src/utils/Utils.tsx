import { IAnimal } from "../models/IAnimal";

export const toggleHungry = (animal: IAnimal) => {
    animal.isFed = !animal.isFed;
    animal.lastFed = new Date().toString();
}

export const getHoursSinceFed = (animal: IAnimal) => {
    return Math.floor((new Date().getTime() - new Date(animal.lastFed).getTime()) / (1000 * 60 * 60));
}