import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

///next steps
//  adding in drop menu  -> started but not finished
//  having menu link to api call 
// checking that linked item creates right data 
// rendering data to screen 
const LiquorInfo = () => {
const [liquor, setLiquor] = useState('')
console.log('liquor info working')
let navigate = useNavigate

    return(
       <div className= "cocktails">
           <div class="dropdown">
                    <button class="dropbtn">Select a Liquor</button>
                    <div class="dropdown-content">
                        <a href="Bourbon"> Bourbon</a>
                        <a href="Gin"> Gin</a>
                        <a href="Scotch"> Scotch</a>
                        <a href="Whiskey"> Whiskey</a>
                        <a href="Rum"> Rum</a>
                        <a href="Vodka"> Vodka</a>
                        <a href="Wine"> Wine</a>
                        <a href="Beer"> Beer</a>
                        <a href="Ale"> Ale</a>
                    </div>
                    </div>
        </div>
      );
    }



export default LiquorInfo