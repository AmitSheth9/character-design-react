import React from 'react'

export default function PhraseDisplay({phrases}) {
    return (
        <div>
            <div>
                {phrases.map((phrase => {
                    return <p key={phrases.indexOf(phrase)}>{phrase}</p>
                }))}
            </div>
        </div>
    )
}
