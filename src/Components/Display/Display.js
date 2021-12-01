import React from 'react'
import '../Dropdown/dropdown.css';

export default function Display({ head, middle, bottom}) {
    return (
    <div>
        <div className='pic-container'>
            <img className='head' src={`${head}-head.png`} alt='h'/> 
            <img className='middle' src={`${middle}-middle.png`} alt='m'/>
            <img className='bottom' src={`${bottom}.png`} alt='b' />
        </div>
        
    </div>
    )
}
