
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../Hook/useFetch'

export default function CardDetails() {
    const params=useParams()
    
 let {pets:product}=useFetch(`http://localhost:3000/products/${params.id}`)
 console.log(params.id);

 if(product){
  return (
    <div>
        
            <div style={{marginLeft:"38%"}}>
            <div className="card border border-light" style={{width: "20rem",boxShadow:"10px 10px 10px gray"}} >
               <img src={product.image} className="card-img-top" alt="..." style={{height:"200px"}}/>
               <div className="card-body " style={{backgroundColor:"rgb(242, 242, 178"}}>
                  <h5 className="card-title" style={{color:"orange"}}>{product.color}</h5>
                  <p className="card-text"><b>{product.description}</b></p>
                
                  </div>
                     </div> 
                    
               </div>
   
        
      
    </div>
  )
 }
}
