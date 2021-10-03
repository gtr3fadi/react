import React, { Component } from 'react'
import axios from 'axios'

class SingleDrink extends Component {
    state = {
        drink: null
        
    }



    // get the single drink from the props
    componentDidMount() {
        console.log(this.props.drink)
        let id = this.props.match.params.idDrink
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.idDrink}`)
        .then(res => {
            console.log(res.data.drinks)
            this.setState({
                drink: res.data.drinks

        })


    }
    )
    }




  render() {

    const drink  = this.state.drink ? (
        <div className="single-drink">
            <h1>{this.state.drink.strDrink}</h1>
            <img src={this.state.drink.strDrinkThumb} alt=""/>
            <h3>Ingredients</h3>
            <ul>
                <li>{this.state.drink.strIngredient1}</li>
                <li>{this.state.drink.strIngredient2}</li>
                <li>{this.state.drink.strIngredient3}</li>
                <li>{this.state.drink.strIngredient4}</li>
                <li>{this.state.drink.strIngredient5}</li>
                <li>{this.state.drink.strIngredient6}</li>
                <li>{this.state.drink.strIngredient7}</li>
                <li>{this.state.drink.strIngredient8}</li>
                <li>{this.state.drink.strIngredient9}</li>
                <li>{this.state.drink.strIngredient10}</li>
                <li>{this.state.drink.strIngredient11}</li>
                <li>{this.state.drink.strIngredient12}</li>
                <li>{this.state.drink.strIngredient13}</li>
                <li>{this.state.drink.strIngredient14}</li>
                <li>{this.state.drink.strIngredient15}</li>
            </ul>
            <h3>Instructions</h3>
            <p>{this.state.drink.strInstructions}</p>
        </div>
    ) : (
        <div>Loading...</div>
    )

    return (
        <div>
            {drink}
        </div>
    )
  }
}




export default SingleDrink
