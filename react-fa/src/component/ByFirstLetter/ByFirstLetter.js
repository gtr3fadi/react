import React, { Component } from 'react';
import axios from 'axios';

class ByFirstLetter extends Component {
  // page for cocktail by first letter
  //by axios call to cocktailDB
  // when user clicks on cocktail, it will take them to the cocktail page and show the ingredients
  // when user clicks on ingredient, it will take them to the ingredient page and show the cocktails

  constructor(props) {
    super(props)
    this.state = {
      cocktails: [],
      ingredients: [],
      selectedLetter: '',
      selectedCocktail: '',
      selectedIngredient: ''
    }
  }
componentDidMount() {
  // axios call to cocktailDB

  // get all cocktails
  // get all ingredients
  // get all letters
  // get all cocktails by letter
  // get all ingredients by letter
  // get all cocktails by ingredient
  // get all ingredients by cocktail
  // get all cocktails by ingredient
  // get all ingredients by cocktail
  // get all cocktails by ingredient
  // get all ingredients by cocktail
  // get all ingredients by cocktail 
  this.setState({ selectedLetter: this.props.match.params.letter }) 
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.props.match.params.letter}`)
    .then(res => {  this.setState({ cocktails: res.data.drinks }) }
    )
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
    .then(res => {  this.setState({ ingredients: res.data.drinks }) }
    )
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
    .then(res => {  this.setState({ letters: res.data.drinks }) }
    ) 
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.props.match.params.letter}`)
    .then(res => {  this.setState({ cocktails: res.data.drinks }) }
    )
    .catch(err => console.log(err)) 
  
}



  render() {
    const { cocktails, ingredients, selectedLetter, selectedCocktail, selectedIngredient } = this.state
    const { letter } = this.props.match.params
    const { cocktail, ingredient } = this.props.match.params
    const { cocktailId, ingredientId } = this.props.match.params
    const { cocktailName, ingredientName } = this.props.match.params
    const { cocktailImage, ingredientImage } = this.props.match.params
    const { cocktailDescription, ingredientDescription } = this.props.match.params
    const { cocktailAlcoholic, ingredientAlcoholic } = this.props.match.params
    const { cocktailGlass, ingredientGlass } = this.props.match.params
    const { cocktailInstructions, ingredientInstructions } = this.props.match.params
    const { cocktailIngredients, ingredientCocktails } = this.props.match.params
    const { cocktailCategory, ingredientCategory } = this.props.match.params
    const { cocktailCategoryId, ingredientCategoryId } = this.props.match.params
    const { cocktailCategoryName, ingredientCategoryName } = this.props.match.params
    const { cocktailCategoryDescription, ingredientCategoryDescription } = this.props.match.params
    const { cocktailCategoryImage, ingredientCategoryImage } = this.props.match.params
    const { cocktailCategoryAlcoholic, ingredientCategoryAlcoholic } = this.props.match.params
    const { cocktailCategoryGlass, ingredientCategoryGlass } = this.props.match.params
    const { cocktailCategoryInstructions, ingredientCategoryInstructions } = this.props.match.params
    const { cocktailCategoryIngredients, ingredientCategoryCocktails } = this.props.match.params
    
    const {postlist} = this.state.map(post => ( 
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>{letter}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h2>Cocktails</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <ul>
                {cocktails.map(cocktail => (
                  <li key={cocktail.idDrink}>
                    <a href={`/cocktail/${cocktail.idDrink}`}>{cocktail.strDrink}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h2>Ingredients</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <ul>
                {ingredients.map(ingredient => (
                  <li key={ingredient.idIngredient}>
                    <a href={`/ingredient/${ingredient.idIngredient}`}>{ingredient.strIngredient}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ByFirstLetter
