import React, { useState } from 'react'
import './Navbar.css'
import PetList from '../petList'
import Searching from './searching'
import Product from './product'
import { useFetch } from '../Hook/useFetch'
import Accesories from './Accesories'
import { Link } from 'react-router-dom'


export default function Navbar() {

   let[url,setUrl]=useState("http://localhost:3000/pets")
        
let{pets}=useFetch(url)
  return (
    <>   
         <div className='ms-5 me-5 mb-5 mt-3'>
            <div id="carouselExampleAutoplaying" className="carousel slide ml-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://c4.wallpaperflare.com/wallpaper/551/638/359/animal-images-baby-animals-cool-pictures-cute-animals-wallpaper-preview.jpg" style={{ height: "500px" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.kindpng.com/picc/m/500-5008878_thumb-image-pets-and-animals-hd-png-download.png" className="d-block w-100" alt="..." style={{ height: "500px" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/originals/8f/ef/aa/8fefaa44f99928585b65d34e05556590.png" className="d-block w-100" alt="..." style={{ height: "500px" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>

   {/* second navlink start here */}
      <div className='navbar'>
         <img src="https://freepngimg.com/thumb/puppy/33554-2-golden-retriever-puppy-image-thumb.png" alt="" id='left_img'/>
         <div className='filter_pet'>
            <div className='category'>
               <img src="https://freepngimg.com/thumb/cat/22193-3-adorable-cat-thumb.png" alt="" />
               <button onClick={()=>setUrl("http://localhost:3000/pets?pet_type=cat")}>Cat</button>
            </div>
            <div className='category'>
               <img src="https://static.vecteezy.com/system/resources/thumbnails/016/761/881/small/the-dog-smiles-because-he-is-happy-png.png" alt="" />
               <button onClick={()=>setUrl("http://localhost:3000/pets?pet_type=dog")}>Dog</button>
            </div>
            <div className='category'>
                  
                  <img src="https://cdn1.vectorstock.com/i/1000x1000/36/50/animal-and-pet-logo-designs-vector-36043650.jpg" alt="" />
                  <h3>The Animal Kingdom</h3>
            </div>
            <div className='category'>
               <img src="https://png.pngtree.com/png-clipart/20230506/original/pngtree-fullbody-goldfinch-bird-isolated-white-background-png-image_9145555.png" alt="" />
               <button onClick={()=>setUrl("http://localhost:3000/pets?pet_type=bird")}>Bird</button>
            </div>
             <div className='category'>
               <img src="https://static.vecteezy.com/system/resources/thumbnails/024/400/713/small/rabbit-isolated-on-white-background-generate-ai-photo.jpg" alt="" />
               <button onClick={()=>setUrl("http://localhost:3000/pets?pet_type=rabbit")}>Rabbit</button>
            </div> 
         </div>
       <img src="https://png.pngtree.com/png-clipart/20230506/original/pngtree-fullbody-goldfinch-bird-isolated-white-background-png-image_9145555.png" alt="" id='right_img'/> 
      </div>
      <Searching pets={pets}/>
      <PetList pets={pets}/>
     
      <Product/>

      {/* Accesories div start here */}




<div className='container'>
        <div className='row mt-5'>
          <div className='col col-lg-2'></div>
          <div className='col col-lg-8'><div class="card bg-dark text-white">
  <img src="https://images.unsplash.com/photo-1566793849773-e1375992cd59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h3 class="card-title" style={{textAlign:"center"}}>Pet Accesories</h3>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <div class="d-grid gap-2">
    <Link to={'/acces'} type="button" class="btn btn-warning" style={{marginTop:"44%"}}><b>Click here to visit more Accesories</b></Link>
</div>
    
    
    
  </div>
</div>
</div>

        </div>
      </div>
    </>
  )
}