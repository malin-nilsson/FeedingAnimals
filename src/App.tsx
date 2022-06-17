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
import { getHoursSinceFed, getLocalStorage, setLocalStorage, toggleHungry } from './utils/Utils';

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

  useEffect(() => {
    if (animals.animals.length !== 0) return;

    // Get animals from local storage
    const animalStorage = getLocalStorage();
    setAnimals({ ...animals, loader: false, animals: animalStorage });

    // Get animals from api if animal storage doesn't exist
    if (animalStorage.length === 0) {
      axios
        .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
        .then((response) => {
          setAnimals({ ...animals, loader: false, animals: response.data });
          setLocalStorage(response.data);
        });
    }
  });

  useEffect(() => {
    // Check if there are hungry animals
    if (animals.animals.length < 1) return;
    const newAnimalList = [...animals.animals];

    for (let i = 0; i < newAnimalList.length; i++) {
      let hoursSinceFed = getHoursSinceFed(newAnimalList[i])
      if (newAnimalList[i].isFed === true && hoursSinceFed >= 4) {
        toggleHungry(newAnimalList[i]);
        setAnimal(newAnimalList[i])
        newAnimalList.splice(i, 1, newAnimalList[i]);
        setLocalStorage(newAnimalList);
        setAnimals({ ...animals, loader: false, animals: newAnimalList });
      }
    }
  }, [animals]);

  // Feed animal
  animals.feedAnimal = (a: IAnimal) => {
    const newAnimalList = [...animals.animals];
    let sameItem = getLocalStorage();
    for (let i = 0; i < sameItem.length; i++) {
      if (sameItem[i].id === a.id) {
        toggleHungry(a)
        setAnimal(a);
        newAnimalList.splice(i, 1, a);
        setAnimals({ ...animals, animals: newAnimalList });
        setLocalStorage(newAnimalList);
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