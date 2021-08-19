

// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
 
  let vehicleSummaryPayload = [];
  const response = await fetch( `/api/vehicles.json`);
  const mainVehicleArray = await response.json();

  for(let i = 0; i< mainVehicleArray.length; i++){
     let detailed = await fetch(mainVehicleArray[i].apiUrl);
     console.log(detailed)
     if(detailed.ok){
       let json = await detailed.json();
       let item = {
         id: json.id,
         description: json.description,
         modelYear: json.modelYear,
         price: json.price,
        imageBig: mainVehicleArray[i].media[1].url,
         imageSm: mainVehicleArray[i].media[1].url,
         name: mainVehicleArray[i].media[0].name,
       }
       vehicleSummaryPayload.push(item);
     }else{
       console.log('Here was problem')
     }
  }
return[...vehicleSummaryPayload];
  

// async function myFunction(){
//   var x =document.getElementById("myDIV");
// if(x.style.display === "none"){
//   x.style.display ="block";
// }
// else{
//   x.style.display ="none";
// }
// }


  }
  

  


