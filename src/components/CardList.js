import React from 'react'
import { Cards } from './cards'

export default function CardList(props) {
  return (
    <div>
    <div className="container">
    
    <div>
               <div className="row mt-3">
              
                    {props.pets && props.pets.map(pet=>{
                        return <Cards {...pet} key={pet.id}/>
                    })}
          </div>
        </div>
    </div>
    </div>
  )
}
