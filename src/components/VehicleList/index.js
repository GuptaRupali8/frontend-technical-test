import React from 'react';
import useData from './useData';
import './style.scss';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    
    <div className="flex-grid" data-testid="results">
      {vehicles && vehicles.map((car) =>{
        return(
        <div className="card" key={car.id}>
            <img  className="card-img" src={car.imageBig} />
            <div className="card-info">
              <h3 className="card-name" id="vehicleName">{car.name} name</h3>
               <p>{car.modelYear}</p>
               {!car.price ? <p className="price">Price unavailable</p> : <p>From {car.price}</p>} 
               <p className="description">{car.description}</p>
               <p>{car.bodystyles}</p>
             </div>
            {/* card div end */}
          </div>
        )
        
      })}
      
      
      
    
    
    
    
    
    </div>
     /* first closing div  */

   
    
  );
  // closing return
}
