# Project Overview


## Bottoms Up!

**Project decription:** 

A cocktail recipe search tool that also has a pulldown menu to learn about different alcohols

## API Snippet

  "drinks": [
        {
            "idDrink": "11728",
	    
            "strDrink": "Martini",
	    
            "strCategory": "Cocktail",
	    
            "strIBA": "Unforgettables",
	    
            "strAlcoholic": "Alcoholic",
	    
            "strGlass": "Cocktail glass",
	    
            "strInstructions": "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled  martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
	    
             "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
	     
            "strIngredient1": "Gin",
	    
            "strIngredient2": "Dry Vermouth",
	    
            "strIngredient3": "Olive",
	    
            "strIngredient4": null,
	    
            "strIngredient5": null,

## Wireframes

- first page https://wireframe.cc/CDni2J
- the drink menu page https://wireframe.cc/EmUJ7L
- the drink recipe page https://wireframe.cc/FG3Ux6
### MVP

We are going to have both a search bar where user can search for drinks and have recipes displayed on screen (martini, manhattan), and also a drop down menu where users can get info on types of liquor (bourbon, vodka)

#### MVP EXAMPLE:
- Find and use external api 
- Render data on page 
- search function for drinks

### Post-MVP

- 2 seperate sections, one for drink recipe and one for drink info, components for each
- images for all the drinks

#### PostMVP EXAMPLE:
- Add user auth

## React Component Hierarchy

https://www.draw.io/#G1K2QXlsn0WouRzhUQpdT7LkV0lH3UHyIZ

## Components

Based on the initial logic defined in the previous section, try to breakdown the logic further into stateless/stateful components. 

https://www.draw.io/#G1K2QXlsn0WouRzhUQpdT7LkV0lH3UHyIZ

| Component | Description |Type |
| --- | --- | --- |

| Header | This will just have the title (I prefer having Home button at the footer) | Functional |

| Main | This will hold the links for the 2 sections, Cocktail recipes + Liquor info | Functional |


| Cocktails | this will hold the section for the api/s link -> a search bar, and a card to display the drinks | class |
| Search Bar and Cockails | These 2 components will hold the search bar and display option for the searched drink recipe | class |

| Liquors | This link from the Main will link from api/i ->  will show a drop menu with types of liquor (Vodka, Bourbon, Gin...) | class |
| Drop bar and Liquors | This will be a selectable menu for ~10 types of liquors, that will display their info when clicked on | class |

| Footer | will have social media links + Home button | Functional |

## Priority Matrix

https://wireframe.cc/16EhA5

## Timeframes

Timeframes are key in the development cycle. You have limited time to code and so much to accomplish!  Look at all of your planned files and components, and all of the areas of development you are planning and give an estimate of how long each one will take to complete. It's always best to pad the time to account for the unknown, so be sure to add an additional hour or two to play it safe. As you progress, you can update the "Time Invested" column to keep track of your hours, but that number should turn into "Actual Time" by the presentation day. Also, put a winter-themed gif at the top of your readme before you pitch to show you read the instructions thoroughly.


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setting up site framework | H | 3hrs| 3hrs | 3hrs |
| Getting API to log and render | H | 3hrs|  5-6hrs | 6hrs |
| Linking all components | H | 4hrs| 3hrs | 3hrs  |
| Getting search and drop bars functioning | H | 6hrs| 4hrs | 4hrs |
| Routing | H | 4 | 3 | 3|
| Styling| M | 4hrs|  | |



| Total | H | 20+ hrs |  ||

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Project Pitch / Wireframes / Priority Matrix / Functional Components | complete
|Jan 27th| Get Search Bar running and cocktail recipe rendered | Complete
|Jan 28th| setting up button/liquor info section | Complete
|Jan 29th| Both sections working  | Complete
|Jan 30th| And after a while... you can work on points for style... | Incomplete
|Jan 31tst| Present | Incomplete

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project. React Router Dom and Axios should be listed here at the very least.

## Issues and Resolutions

Getting info from the Buttons/Liquor Info to render was an issue, errors kept coming up whenever the site was linked... this was solved by setting up an if/else for the return so that if the value was Null then nothing would go, thus preventing the error, but letting it load properly when a button was pressed.

The second issue came from the routes, my Liquor Info section was loading up at the home screen, and NOT when in its proper component. Any attempts to re-route them and get them rendering correctly brought up errors; this was solved in a most brilliant solution, Michael saying 'Make that the Default screen, say it was done on purpose, just focus on the 2nd (cocktail recipe) route". That route is working now and the default screen is loading properly.

## Code Snippet

Use this section to include a brief code snippet you are proud of, along with a brief description of why.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes.  
