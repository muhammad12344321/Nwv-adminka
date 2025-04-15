import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import App from './App'

export default function Global() {
    return (
        <div className='global_wrapper'>
            <Navbar />

            <App />
        </div>
    )
}
