import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Drink_Recipe from './Drink_Recipe'
import Liquor_Info from './Liquor_Info'

const Main = (props) =>
   {
         console.log(props)

        return (
          <div className="Main">

          <Routes>

          <Route path="/>" element={<Home/>} />
            <Route path="/liquors>" element={<Liquor_Info liquor={props.liquor}/>} />
            <Route path="/liquors>" element={<Liquor_Info liquor={props.liquor}/>} />
            <Route path="/drinks>" element={<Drink_Recipe/>} />

          </Routes>
          {/* <Drink_Recipe /> */}
          </div>
   
        );
   }


export default Main