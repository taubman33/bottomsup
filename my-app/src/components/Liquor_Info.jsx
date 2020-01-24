import React, { Component } from 'react'
import axios from 'axios'

///next steps
//  adding in drop menu  -> started but not finished
//  having menu link to api call 
// checking that linked item creates right data 
// rendering data to screen 

  class Liquor_Info extends Component {
         constructor (props){
          super(props)
          this.state={
          liquor: []
                }
              }


   render() {
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
}


export default Liquor_Info