import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import "./style.css"
const customDictionary = {

    teh: "the",
  
    wrok: "work",
  
    fot: "for",
  
    exampl: "example"
  
  };
  
export default function SpellCheck() {
 let [ip,setIp]=useState()
 let [suggest,setSuggestion]=useState()
 function handleChange(e)
 {
    setIp(e.target.value)
 }
 function findSuggestion()
 {
    if(customDictionary.hasOwnProperty(ip.toLowerCase()))
    {
        setSuggestion(customDictionary[ip.toLowerCase()])
    }
    else{
        setSuggestion("")
    }
 }
 useEffect(()=>{
findSuggestion()
 },[ip])
    return (
    <div className='container'>
   <h1>Spell Check and Auto-Correction</h1>
   <textarea rows={5} cols={40} placeholder='Enter text...' value={ip} onChange={handleChange}></textarea>
   {suggest &&<p>Did you mean: <strong>{suggest}</strong>?</p>}
  
    </div>
  )
}
