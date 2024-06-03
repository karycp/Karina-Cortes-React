import React, {useEffect, useState} from 'react'
import Card from './components/CharacterCard'
import './App.css'


function App() {
  const [ricky, setRicky]=useState()
  const rickyAndMortyCharacterId=15;
useEffect ( ()=>{ 
  fetch("https://rickandmortyapi.com/api/character/" + rickyAndMortyCharacterId)
  
  .then((response) => response.json())
  
  .then((results) =>{
    
    setRicky(results) 
  });
 }, [ ]);
console.log(ricky)

  return (
      <>
        <h1>HOLA Profe... Pss Acá Voy</h1>      
        {ricky && (
            <Card img={ricky.image} Title={ricky.name} species={ricky.species}/>
        )
        }  
      
        
      </>
  )
}

export default App