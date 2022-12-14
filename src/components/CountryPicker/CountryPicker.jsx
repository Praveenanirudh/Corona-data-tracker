import React,{useState,useEffect} from 'react'
import {NativeSelect, FormControl} from "@mui/material";
import {fetchCountries} from "../../api";
import styles from "./CountryPicker.module.css";
const CountryPicker =({handleCountryChange})=> {
   const [fetchedCountries , setfetchedCountries ] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setfetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setfetchedCountries]); 
  console.log(fetchedCountries);
    
  return (
    <FormControl className={styles.formControl} >
      <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
       <option value="">Global</option> 
       {fetchedCountries.map((country,i) =>  <option key={i} value={country}>{country}</option>)}
      </NativeSelect>

    </FormControl>
  )
}

export default CountryPicker;