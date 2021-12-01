import React from 'react'
import './phrasedisplay.css';

export default function PhraseDisplay({phrases}) {
    return (
        <div>
            <div>
                {phrases.map((phrase => {
                    return <p className='phrases' key={phrases.indexOf(phrase)}>{phrase}</p>
                }))}
            </div>
        </div>
    )
}
