import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="links">
            <link to="/"> Home</link>
            <link to="/drinks"> Drink Recipes</link>
            <link to="/liquors"> Liquors</link>
        </div>
    )
}