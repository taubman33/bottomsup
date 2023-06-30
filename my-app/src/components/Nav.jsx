import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="links">
            <Link to="/"> Home</Link>
            <Link to="/drinks"> Drink Recipes</Link>
            <Link to="/liquors"> Liquors</Link>
        </div>
    )
}