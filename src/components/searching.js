import React, { useState } from 'react'
import './Seaching.css'
import PetList from '../petList'

export default function Searching(props) {
  let animal=props.pets
  let[pet,setPet]=useState(animal)

  const filterPet=(petName)=>{
    setPet(animal.filter(pet=>{
      return pet.pet_name.includes(petName)
    }))
  }
  let[petName,setPetName]=useState('')

  const changeName=(event)=>{
    setPetName(event.target.value)
  }

  const searchPet=(event)=>{
    event.preventDefault()
    console.log(petName);
  }
  return (
    <>
    <form className="d-flex justify-content-center searchbar mt-5" role="search" onSubmit={searchPet}>
        <input className="form-control me-2 bg-warning bg-opacity-50" type="search" placeholder="Search" onChange={changeName}/>
        <button className="btn btn-outline-warning " type="submit">Search</button>
      </form>
      <PetList pets={pet}/>
    </>
  
  )
}
