import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Layout from './components/pages/Layout';
import Animal from './components/pages/Animal';
import NotFound from './components/pages/NotFound';
import axios from 'axios';
import { IAnimal } from './models/IAnimal';
import { StyledLoader } from './components/styled-components/Loader/StyledLoader';

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
  const [loader, setLoader] = useState(true);

  const saveToLocalStorage = (animalList: IAnimal[]) => {
    localStorage.setItem("Animals", JSON.stringify(animalList));
  };

  useEffect(() => {
    if (animals.length !== 0) return;

    const animalStorage = localStorage.getItem("Animals");
    if (animalStorage) {
      setAnimals(JSON.parse(animalStorage));
      setLoader(false);
    } else if (!animalStorage) {
      axios
        .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
        .then((response) => {
          setAnimals(response.data);
          saveToLocalStorage(response.data);
          setLoader(false);
        });
    }
  }, [animals.length]);

  useEffect(() => {
    if (animals.length < 1) return;
    localStorage.setItem("Animals", JSON.stringify(animals));
  }, [animals]);


  const feedAnimal = (a: IAnimal) => {
    let sameItem = JSON.parse(localStorage.getItem("Animals") || "[]");

    for (let i = 0; i < sameItem.length; i++) {
      if (sameItem[i].id === a.id) {
        a.isFed = !a.isFed;
        a.lastFed = new Date().toString();
        setAnimal(a);
        const newAnimalList = [...animals];
        newAnimalList.splice(i, 1, a);
        setAnimals(newAnimalList);
        saveToLocalStorage(newAnimalList);
      }
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home animals={animals} loader={loader} />} />
          <Route path="/animal/:id" element={<Animal feedAnimal={feedAnimal} animals={animals} loader={loader} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
