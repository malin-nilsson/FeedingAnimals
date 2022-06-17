import { IAnimal } from "../models/IAnimal";

const localStorageKey = "Animals";

// Toggle hungry/fed
export const toggleHungry = (animal: IAnimal) => {
    animal.isFed = !animal.isFed;
    animal.lastFed = new Date().toString();
}

// Check how many hours since animal was fed
export const getHoursSinceFed = (animal: IAnimal) => {
    return Math.floor((new Date().getTime() - new Date(animal.lastFed).getTime()) / (1000 * 60 * 60));
}

// Save to local storage
export const setLocalStorage = (list: IAnimal[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify(list));
}

// Get local storage
export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem(localStorageKey) || "[]");
}