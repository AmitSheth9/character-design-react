import React from 'react'

export default function Display({ head, middle, bottom}) {
    return (
    <div>
        <div className='pic-container'>
            <img className='head' src={`${head}-head.png`} alt=''/> 
            <img className='middle' src={`${middle}-middle.png`} alt=''/>
            <img className='bottom' src={`${bottom}.png`} alt='' />
        </div>
        
    </div>
    )
}
