import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Layout from './components/pages/Layout';
import Animal from './components/pages/Animal';
import NotFound from './components/pages/NotFound';
import axios from 'axios';
import { IAnimal } from './models/IAnimal';

function App() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
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
    const animalStorage = localStorage.getItem("Animals");
    if (animalStorage) {
      setAnimals(JSON.parse(animalStorage));
    } else if (!animalStorage) {
      axios
        .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
        .then((response) => {
          setAnimals(response.data);
          saveToLocalStorage(response.data);
        });
    }
  }, []);

  useEffect(() => {
    if (animals.length < 1) return;
    localStorage.setItem("Animals", JSON.stringify(animals));
  }, [animals]);

  useEffect(() => {
    const newAnimalList = [...animals];

    for (let i = 0; i < newAnimalList.length; i++) {
      let hoursSinceFed = Math.floor((new Date().getTime() - new Date(newAnimalList[i].lastFed).getTime()) / (1000 * 60 * 60));

      if (hoursSinceFed >= 1) {
        newAnimalList[i].isFed = false;
        setAnimal(newAnimalList[i]);
        newAnimalList.splice(i, 1, newAnimalList[i]);
        saveToLocalStorage(newAnimalList);
        setAnimals(newAnimalList);
      }
    }
  }, [])

  const feedAnimal = (a: IAnimal) => {
    let sameItem = JSON.parse(localStorage.getItem("Animals") || "[]");

    for (let i = 0; i < sameItem.length; i++) {
      if (sameItem[i].id === a.id) {
        a.isFed = !a.isFed;
        a.lastFed = new Date().toString();
        setAnimal(a);
        const newAnimalList = [...animals];
        newAnimalList.splice(i, 1, a);
        saveToLocalStorage(newAnimalList);
        setAnimals(newAnimalList);
      }
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home animals={animals} />} />
          <Route path="/animal/:id" element={<Animal feedAnimal={feedAnimal} animals={animals} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
