
import React from 'react'
import './dropdown.css'

export default function Dropdown({ handleSubmit, input, setInput, head, setHead, middle, setMiddle, bottom, setBottom, phrases, setPhrases}) {
 
    const headArr = ['Duck', 'Bird', 'Dog', 'Horse'];
    const middleArr = ['Blue', 'Fancy', 'Pink','Red'];
    const bottomArr = ['Single-Leg', 'White-Pants', 'Blue-Jeans'];
    return (
        <div>
            <label>
                Head
            <select value={head} onChange={e => setHead(e.target.value)}> 
                {headArr.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
            </label>

            <label>
                Middle
            <select value={middle} onChange={e => setMiddle(e.target.value)}>
                {middleArr.map((item =>{
                    return <option key={item}>{item}</option>
                }))}
            </select>
            </label>

            <label>
                Bottom
            <select value={bottom} onChange={e => setBottom(e.target.value)}>
                {bottomArr.map((item =>{
                    return <option key={item}>{item}</option>
                }))}
            </select>
            </label>
            <div>
                <label>
                Add a catchphrase:
                <input onChange ={e => setInput(e.target.value)} />
                <button onClick={handleSubmit}>Add catchphrase</button>
                </label>
            </div>
            
        
             
    
           
        </div>
    );
}
