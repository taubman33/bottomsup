import React, {useState} from 'react'
import axios from 'axios'

// import axios from '.axios'

export default function DrinkRecipe(){
    console.log('drink recipe working')
    const [searchBar, setSearchBar] = useState('')

    const getDrinks = async () => {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka`)
        console.log(response)
    }

    return(
       <div className= "cocktails">
           <h1> Drink Recipe link is working</h1>
       </div>
         );
    }
