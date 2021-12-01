import { useState } from "react";
import React from 'react'
import './dropdown.css'

export default function Dropdown({title, head, setHead, middle, setMiddle, bottom, setBottom, headArr, middleArr, bottomArr, phrases, setPhrases}) {
 

const [input, setInput] = useState('');
const phraseArr = [];

 console.log(head, middle, bottom, phrases);

 function handleSubmit () {
        //phraseArr.push(input);
        setPhrases((prevState) => [...prevState, input]);
 }
    
    return (
        
        <div>
            <select value={head} onChange={e => setHead(e.target.value)}> 
                {headArr.map((item => {
                    return <option key={item}>{item}</option>
                }))}
            </select>
            <select value={middle} onChange={e => setMiddle(e.target.value)}>
                {middleArr.map((item =>{
                    return <option key={item}>{item}</option>
                }))}
            </select>
            <select value={bottom} onChange={e => setBottom(e.target.value)}>
                {bottomArr.map((item =>{
                    return <option key={item}>{item}</option>
                }))}
            </select>
            <div>
                <label>
                Add a catchphrase:
                <input onChange ={e => setInput(e.target.value)} />
                <button onClick={handleSubmit}>Add catchphrase</button>
                </label>
            </div>
            
        
             
    
           
        </div>
    )
}
