import React, { Component } from 'react'

// import axios from '.axios'

class Drink_Recipe extends Component {
    constructor (props){
        super(props)
        this.state={
        cocktails: []
         }
        }


   render() {
    return(
       <div className= "cocktails">
           <h1> Drink Recipe link is working</h1>
       </div>
         );
    }


}


export default Drink_Recipe