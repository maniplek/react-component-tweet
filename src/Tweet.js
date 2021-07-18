import React from 'react'
import './App.css'

export default function Tweet({name , message , number}) {
    return (
        <div className='tweet'>
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>{number} likes</h3>
        </div>
    )
}
