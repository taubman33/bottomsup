import React from 'react'


function Drink_Recipe(props){

   return(
       <div className= "cocktails">
           {props.cocktails.map(cocktail => (
               <NavLink className= 'cocktailCard' to={`/${cocktail.hero_id}`}>
               <img className= 'photos' src= {cocktail.image_url}/>
               <h1>{cocktail.name}</h1>
               </NavLink>
           ))}
       </div>
   );

}


export default Drink_Recipe