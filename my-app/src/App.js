   import React, { Component } from 'react';
import './App.css';
// import {Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


//url for Drink search
const cocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

//url for Liquor info
const liquorURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka'


//test URL
const testURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka'

// basic format ->
// header (h1 title)
// main -> links to 2 components 
// comp1 -> Liquor info (url / i search) -> aside menu -> info card 
// comp 2 -> cocktail recipe (url / s search) -> searchbar -> drink recipe card 
// footer -> social media links + home button

class App extends Component {
  constructor (props){
    super(props)
    this.state={
    liquors: []
     }
    }


    //setting up API call for 1st section -> liquor info

        fetchDrinks = async () => {
          const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka')
          const data= response.data
          this.setState({
            liquors: data
          })
          console.log(data)
        }

        //component did mount for liquor info
          componentDidMount(){
            this.fetchDrinks()
          }


    //rendering the info

    render () {
      console.log(this.state.liquors)
      return (
        <div className="App">
              <Header />
          <main>

        
          {/* <Route
        exact path= '/'
        component= {
        ()=> <Heroes newHero={this.state.characters}/> 
        }/>

        <Route
        exact path= '/:id'
        component={
          (navProps)=> <Profile navProps={navProps} />
        }/> */}

             
            <Main />

           
           
          </main>
        
          <Footer/>
          
        </div>
       );
     }
}



//export section
export default App;
