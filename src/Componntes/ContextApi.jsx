import axios from 'axios';
import React, { useEffect, useState } from 'react'
const ApiData = createContext();
import { createContext } from 'react';
const ContextApi = ({children}) => {

    let [info, setInfo]= useState([])
    let getData = () =>{
     axios.get("https://dummyjson.com/products").then((Response) =>{
       setInfo(Response.data.products);
        
     })
    }
    useEffect(()=>{
        getData();
    },[])
  return (  
   <>
    <ApiData.Provider value={info}>{children}</ApiData.Provider>
   </>
  );
};

export  {ApiData,ContextApi};