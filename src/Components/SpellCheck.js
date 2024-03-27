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
    if(ip )
    {
        let words=ip.split(' ');
        let lastWord=words[words.length-1].toLowerCase()
        console.log(lastWord)
    if(customDictionary.hasOwnProperty(lastWord))
    {
        setSuggestion(customDictionary[lastWord])
    }
    // else{
    //     setSuggestion("")
    // }
}
 }
 useEffect(()=>{
    if(ip)
    {
findSuggestion()
    }
    else{
        setSuggestion("")
    }
 },[ip])
    return (
    <div className='container'>
   <h1>Spell Check and Auto-Correction</h1>
   <textarea rows={5} cols={40} placeholder='Enter text...' value={ip} onChange={handleChange}></textarea>
   {suggest &&<p>Did you mean: <strong>{suggest}</strong>?</p>}
  
    </div>
  )
}
