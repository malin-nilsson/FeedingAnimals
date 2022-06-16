import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Layout from './components/pages/Layout';
import Animal from './components/pages/Animal';
import NotFound from './components/pages/NotFound';
import axios from 'axios';
import { IAnimal } from './models/IAnimal';
import { AnimalContext, AnimalInterface, defaultValue } from './contexts/AnimalContext';
import { getHoursSinceFed, updateToHungry } from './utils/Utils';

function App() {
  const [animals, setAnimals] = useState<AnimalInterface>(defaultValue);
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

  const saveToLocalStorage = (animalList: IAnimal[]) => {
    localStorage.setItem("Animals", JSON.stringify(animalList));
  };

  useEffect(() => {
    if (animals.animals.length !== 0) return;

    // Get animals from local storage
    const animalStorage = localStorage.getItem("Animals") || "[]";
    setAnimals({ ...animals, loader: false, animals: JSON.parse(animalStorage) });

    // Get animals from api if animals don't exist in local storage
    if (animalStorage.length === 0) {
      axios
        .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
        .then((response) => {
          setAnimals({ ...animals, loader: false, animals: response.data });
          saveToLocalStorage(response.data);
        });
    }
  });

  useEffect(() => {
    if (animals.animals.length < 1) return;
    const newAnimalList = [...animals.animals];

    for (let i = 0; i < newAnimalList.length; i++) {
      // Check if animal hasn't been fed for 4 hours
      let hoursSinceFed = getHoursSinceFed(newAnimalList[i])

      /* If animal hasn't eaten in 4 hours, 
      show animal as hungry again */
      if (newAnimalList[i].isFed === true && hoursSinceFed >= 1) {
        updateToHungry(newAnimalList[i]);
        setAnimal(newAnimalList[i])
        newAnimalList.splice(i, 1, newAnimalList[i]);
        saveToLocalStorage(newAnimalList);
        setAnimals({ ...animals, loader: false, animals: newAnimalList });
      }
    }
  }, [animals]);

  // Feed animal and update local storage
  animals.feedAnimal = (a: IAnimal) => {
    const newAnimalList = [...animals.animals];
    let sameItem = JSON.parse(localStorage.getItem("Animals") || "[]");
    for (let i = 0; i < sameItem.length; i++) {
      if (sameItem[i].id === a.id) {
        a.isFed = true;
        a.lastFed = new Date().toString();
        setAnimal(a);
        newAnimalList.splice(i, 1, a);
        setAnimals({ ...animals, animals: newAnimalList });
        saveToLocalStorage(newAnimalList);
      }
    }
  }

  return (
    <AnimalContext.Provider value={animals}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/animal/:id" element={<Animal />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AnimalContext.Provider>
  );
}

export default App;