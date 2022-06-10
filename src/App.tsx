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

  JSON.parse(localStorage.getItem("Animals") || "[]");

  const saveToLocalStorage = (animalList: IAnimal[]) => {
    localStorage.setItem("Animals", JSON.stringify(animalList));
  };

  useEffect(() => {
    if (animals.length !== 0) return;

    axios
      .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        setAnimals(response.data);
        saveToLocalStorage(response.data);

      });
  });

  const feedAnimal = (a: IAnimal) => {
    //local storage
    let sameItem = JSON.parse(localStorage.getItem("Animals") || "[]");

    for (let j = 0; j < sameItem.length; j++) {
      if (sameItem[j].id === a.id) {
        sameItem[j].isFed = true;
        sameItem[j].lastFed = new Date().toLocaleTimeString();
        setAnimal(sameItem[j]);
        const newAnimalList = [...animals];
        newAnimalList.splice(j, 1, sameItem[j]);
        localStorage.setItem("Animals", JSON.stringify(newAnimalList));
        setAnimals(newAnimalList);
      }
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home animals={animals} />} />
          <Route path="/animal/:id" element={<Animal feedAnimal={feedAnimal} animal={animal} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
