import React, { Component } from 'react'
import axios from 'axios'

class SingleDrink extends Component {
    state = {
        drink: null,
       
    }



    // get the single drink from the props
    componentDidMount() {
        console.log(this.props)
        let id = this.props.match.params.SingleDrink_id
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => {
            console.log(res.data.drinks[0])
            this.setState({
                drink: res.data.drinks[0]

        })


    }
    )
    }




  render() {
      
     

    const drink  = this.state.drink ? (
        <div className="single-drink row row-cols-2  ">
            <div className="col-5">
            <img src={this.state.drink.strDrinkThumb} className="img-fluid  rounded-fa" alt=""/>
                </div>
            <div className="col">
                <h3 className="cocktail-title">{this.state.drink.strDrink}</h3>
                <div className="cocktail-info row row-cols-3">
                     <p className="col">{this.state.drink.strCategory}</p>
                     <p className="col">{this.state.drink.strAlcoholic}</p>
                </div>
                <div className="cocktail-info row">
                {/* <figure>
							<img 
                            src={`https://www.thecocktaildb.com/images/ingredients/${this.state.drink.strIngredient1}-Small.png`}
                                  style="width:80%" />
							<figcaption>1/2 oz  Vodka</figcaption>
				</figure> */}
                </div>
                

                      <p>{this.state.drink.strIngredient1}</p>
            </div>
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
