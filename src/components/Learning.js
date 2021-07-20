import React from 'react'
import { NavLink } from 'react-router-dom'
import data from '../utils/learning_data'
const Learning = () => {
    return (

        <div >
            {data.map(p => {
                return (

                    <div className="card cardwidth" style={{ width: '18rem' }} key={p.title}>

                        <img src={p.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{p.title}</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <NavLink to={p.refernce} >
                                <button type="button" class="btn btn-outline-primary">Read full Article</button>
                            </NavLink>
                        </div>

                    </div>
                )
            })}
        </div>

    )
}

export default Learning
