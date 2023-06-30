import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DrinkRecipe from './DrinkRecipe'
import LiquorInfo from './LiquorInfo'
import Home from './Home'

const Main = (props) =>
   {
         console.log(props)

        return (
          <div className="Main">

          <Routes>

          <Route exact path="/" element={<Home/>} />
            <Route exact path="/liquors" element={<LiquorInfo/>} />
            <Route exact path="/drinks" element={<DrinkRecipe/>} />

          </Routes>
          </div>
   
        );
   }


export default Main