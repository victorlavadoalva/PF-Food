import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import { MarkersRest } from './MarkerRest';
import axios from 'axios'

//*******************************DATA PRUEBA******************************************** */
let userLocation = {address:"Mariquita Sanchez de Thompson 856",city:"Rio Cuarto", country:"Argentina"}
//********************************************************************************* */


export default function Map() {
    const [allRestaurants, setAllRestaurants] = useState([])
    const [coordenadas, setCoordenadas] = useState({lat:null,lng:null})
    const [addressSearch, setAddressSearch] = useState({city:userLocation.city, country:userLocation.country})

    useEffect(()=>{
      axios.get("http://localhost:3001/restaurants?all=true")
        .then(data=>setAllRestaurants(data.data))
    },[])
    useEffect(() => {
        async function buscarDireccion() {
          try {
            const address = `${addressSearch.city}, ${addressSearch.country}`;
    
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyAR96I2GcOFCVlWMer5l_WtCRrSnAJK8DM`
            );
    
            if (response.ok) {
              const data = await response.json();
    
              if (data.status === 'OK') {
                const { lat, lng } = data.results[0].geometry.location;
                console.log('Dirección encontrada:', { lat, lng });
                setCoordenadas({lat:lat,lng:lng})
              } else {
                console.error('Error al buscar dirección:', data.status);
              }
            } else {
              console.error('Error al buscar dirección:', response.status);
            }
          } catch (error) {
            console.error('Error al buscar dirección:', error);
          }
        }
    
        buscarDireccion();
      }, [addressSearch]);

    const containerStyle = {
      width: '100%',
      height: '40rem'
    };
  
    let center = coordenadas;

    let zoom 
    if (addressSearch.city==""&&addressSearch.country!==""){zoom = 4}
    else if (addressSearch.country==""&&addressSearch.city==""){
      zoom = 3;
      center = {lat:0,lng:0}
    }
    else{zoom=13}

    const handleSelectChange = (event) => {
        setAddressSearch({...addressSearch, [event.target.name]:event.target.value});
      };

    let arrControllerCity = []
    let arrControllerCountry = []
  
    return (
      <LoadScript googleMapsApiKey="AIzaSyAR96I2GcOFCVlWMer5l_WtCRrSnAJK8DM">
        <div>
            <label>City</label>
         <select value={addressSearch.city} name="city" onChange={handleSelectChange}>
         <option value={userLocation.city}>My City</option>
         <option value={""}>City</option>
           {
             allRestaurants&&allRestaurants.length>0&&allRestaurants.map((rest)=>{
              const cityRes = rest.city ? rest.city.toLowerCase() : null;
                if(arrControllerCity.includes(cityRes))return;
                else{
                    arrControllerCity.push(cityRes)
                return(<option value={cityRes}>{cityRes}</option>)}
             })
           }
        </select>

        <label>Country</label>
        <select value={addressSearch.country} name="country" onChange={handleSelectChange}>
        <option value={userLocation.country}>My Ccountry</option>
         <option value={""}>Country</option>
           {
             allRestaurants&&allRestaurants.length>0&&allRestaurants.map((rest)=>{
              const countryRes = rest.country ? rest.country.toLowerCase() : null;
                if(arrControllerCountry.includes(countryRes))return;
                else{
                    arrControllerCountry.push(countryRes)
                return(<option value={countryRes}>{countryRes}</option>)}
             })
           }
        </select>
        </div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
        >
          <MarkersRest restaurants={allRestaurants?allRestaurants:[]} />
        </GoogleMap>
      </LoadScript>
    );
  }