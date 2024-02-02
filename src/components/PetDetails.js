
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../Hook/useFetch'

export default function PetDetails() {
    const param=useParams()
    
 let {pets:product}=useFetch(`http://localhost:3000/pets/${param.id}`)
 console.log(param.id);

 if(product){
   console.log(product.image);
  return (
    <div>
        
            <div style={{marginLeft:"38%"}}>
            <div className="card border border-light" style={{width: "20rem",boxShadow:"10px 10px 10px gray"}} >
               <img src={product.image} className="card-img-top" alt="..." style={{height:"200px"}}/>
               <div className="card-body " style={{backgroundColor:"rgb(242, 242, 178"}}>
                  <h5 className="card-title" style={{color:"orange"}}>{product.pet_type}</h5>
                  <p className="card-text"><b>Pet Name : {product.pet_name}</b></p>
                  
                  <p className="card-text">Category : {product.breed}</p>
                  <p className="card-text">BirthDtae : {product.birthdate}</p>
                  <p className="card-text">Age : {product.age}</p>
                  <p className="card-text">Price :${product.price }</p>
                  <a href={product.image} target='_blank'><button>View</button></a>
                  </div>
                     </div> 
                    
               </div>
   
        
      
    </div>
  )
 }
}
