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
    for (let i = 0; i < animals.length; i++) {
      if (animals[i].id === a.id) {

        //local storage
        let sameItem = JSON.parse(localStorage.getItem("Animals") || "[]");

        for (let i = 0; i < sameItem.length; i++) {
          if (a.id === sameItem[i].id) {
            sameItem[i].isFed = true;
            sameItem[i].lastFed = new Date().toLocaleTimeString();
            setAnimal(sameItem[i])
            const newAnimalList = [...animals]
            newAnimalList.splice(i, 0, sameItem[i])
            setAnimals(newAnimalList)
            localStorage.setItem("Animals", JSON.stringify(animals))
          }
        }
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
