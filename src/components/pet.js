import { Link } from "react-router-dom"
import { useTheme } from "../Hook/useTheme"


export function Pets(props)
{
   const{theme,changeTheme}=useTheme()
   let product  = props
   return(<>
       <div className="col-lg-3 mb-3" >
                     <div className="card border border-light " style={{width: "15rem",boxShadow:"10px 10px 10px gray"}} >
                        <img src={product.image} className="card-img-top" alt="..." style={{height:"200px"}}/>
                        <div className="card-body " style={{backgroundColor:"rgb(242, 242, 178"}}>
                           <h5 className="card-title" style={{color:"orange"}}>{product.pet_type}</h5>
                           <p className="card-text"><b>Pet Name : {product.pet_name}</b></p>
                  
                              <p className="card-text">Category : {product.breed}</p>
                              <p className="card-text">BirthDtae : {product.birthdate}</p>
                              <p className="card-text">Age : {product.age}</p>
                           <p className="card-text">Price : {product.price }$</p>
                           <Link to={`/pets/${product.id}`} className="btn btn-warning">View</Link> <span>  </span>
                           {
                              theme==true?<Link to={'/login'} onClick={()=>changeTheme(false)} className="btn btn-warning">Login</Link>:<button onClick={()=>changeTheme(true)} className="btn btn-warning">Logout</button>
                           }
                           
                           
                           {/* <button class="btn btn-warning d-grid gap-2 " type="button">Add To Cart</button> */}
                           {/* <Link  className="btn btn-primary">View Product</Link> */}
                        </div>
                     </div> 
               </div>
   
   </>
            
   )
}