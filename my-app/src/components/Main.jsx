import React, { Component } from 'react'
import Drink_Recipe from './Drink_Recipe'
import Liquor_Info from './Liquor_Info'

const Main = (props) =>
   {
         console.log(props)

        return (
          <div className="Main">
          <Liquor_Info liquor={props.liquor} />

          {/* <Drink_Recipe /> */}
          </div>
   
        );
   }


export default Main