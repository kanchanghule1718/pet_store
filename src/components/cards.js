import { Link } from "react-router-dom"


export function Cards(props)
{
   let product  = props
   return(<>
         
      
  
         
      <div className="col-lg-6 mb-3" >
      <div class="card mb-4" style={{maxWidth:"540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={product.image} class="img-fluid rounded-start" alt="..." style={{height:"250px",width:"250px"}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{product.color}</h5>
        <p className="card-text"> {product.description}</p>
        <p className="card-text"> Price:{product.price}Rs</p>
        <Link to={`/acces/${product.id}`} className="btn btn-warning">View</Link> <span>  </span>
      </div>
    </div>
  </div>
</div>            
  </div>
              
   </>
            
   )
}