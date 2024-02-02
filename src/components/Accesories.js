import React, { useState } from 'react'
import './Accesories.css'
import { useFetch } from '../Hook/useFetch'
import CardList from './CardList'

export default function Accesories() {
    let[url,setUrl]=useState("http://localhost:3000/products")
    let{pets:product}=useFetch(url)
  return (
    <div>
   
      
      
      <h2 class="fst-italic text-center mt-4 mb-4">Popular Categories</h2>
            <div className='navbarr'>
         
         <div className='filter_pett'>
            <div className='categoryy'>
               <img src="https://static.vecteezy.com/system/resources/thumbnails/022/965/409/small/back-in-time-exploring-the-best-of-1979-s-fisher-price-toy-lineup-soft-animals-kitsch-vintage-retro-animals-generative-ai-photo.jpg" alt="" />
               <button onClick={()=>setUrl("http://localhost:3000/products?category=toys")}><h4>Pet Toys</h4></button>
            </div>
            <div className='categoryy'>
               <img src="https://img.freepik.com/free-photo/domestic-pet-food-composition_23-2148982342.jpg" alt="" />
               <button onClick={()=>setUrl("http://localhost:3000/products?category=food")}><h4>Food Suppliments</h4></button>
            </div>
            <div className='categoryy'>
               <img src="https://images.unsplash.com/photo-1552826580-0d47cf898dee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZCUyMGNhZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
               <button onClick={()=>setUrl("http://localhost:3000/products?category=cage")}><h4>Cage</h4></button>
            </div>
             <div className='categoryy'>
               <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71TvmBCuuHL._AC_UF1000,1000_QL80_.jpg" alt="" />
               <button onClick={()=>setUrl("http://localhost:3000/products?category=feeder")}><h4>bowl & Feeders</h4></button>
            </div> 
         </div>
      
      </div>
      <CardList pets={product}/>
    </div>
  )
}
