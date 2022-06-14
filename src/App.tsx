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
  const [loader, setLoader] = useState(true);

  const saveToLocalStorage = (animalList: IAnimal[]) => {
    localStorage.setItem("Animals", JSON.stringify(animalList));
  };

  useEffect(() => {
    if (animals.animals.length !== 0) return;

    const animalStorage = localStorage.getItem("Animals") || "[]";
    setAnimals({ ...animals, animals: JSON.parse(animalStorage) });
    setLoader(false);

    if (animalStorage.length === 0) {
      axios
        .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
        .then((response) => {
          setAnimals({ ...animals, animals: response.data });
          saveToLocalStorage(response.data);
          setLoader(false);
        });
    }
  });

  useEffect(() => {
    if (animals.animals.length < 1) return;

    const newAnimalList = [...animals.animals];

    for (let i = 0; i < newAnimalList.length; i++) {
      let hoursSinceFed = Math.floor((new Date().getTime() - new Date(newAnimalList[i].lastFed).getTime()) / (1000 * 60 * 60));

      /* If there's been 4 hours since animal was fed,
      enable feed button so you can feed animal again */
      if (newAnimalList[i].isFed === true && hoursSinceFed >= 1) {
        newAnimalList[i].isFed = false;
        newAnimalList[i].lastFed = new Date().toString();
        setAnimal(newAnimalList[i])
        newAnimalList.splice(i, 1, newAnimalList[i]);
        saveToLocalStorage(newAnimalList);
      }
    }
  }, [animals]);

  // Toggle isFed, set lastFed to current date and update local storage
  animals.feedAnimal = (a: IAnimal) => {
    let sameItem = JSON.parse(localStorage.getItem("Animals") || "[]");
    for (let i = 0; i < sameItem.length; i++) {
      if (sameItem[i].id === a.id) {
        a.isFed = !a.isFed;
        a.lastFed = new Date().toString();
        setAnimal(a);
        const newAnimalList = [...animals.animals];
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
            <Route index element={<Home loader={loader} />} />
            <Route path="/animal/:id" element={<Animal loader={loader} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AnimalContext.Provider>
  );
}

export default App;