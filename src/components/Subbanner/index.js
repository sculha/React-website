import React from 'react'
import "./subbanner.scss"

const Subbanner = (props) => {
    return (
        <div className='sub-banner'>
        <div className='container-fluid'>
            <h1>{props.title}</h1>
        </div>
        </div>
    )
}

export default Subbanner