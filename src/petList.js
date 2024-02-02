
import { Pets } from './components/pet'
//import pets from './product_db.json'


export default function PetList(props) {
  
   let isLoading=props.isLoading

  return (
    <>
    <div className="container">
    
    <div>
               {isLoading? "Loading...": <div className="row mt-3">
              
                    {props.pets && props.pets.map(pet=>{
                        return <Pets {...pet} key={pet.id}/>
                    })}
          </div>}
        </div>
    </div>
   
    
    </>
  )
}
