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

    // functin to get the ingredients image from the url  and return it
    function getImage  (in1)  {
        let imgUrl = `https://www.thecocktaildb.com/images/ingredients/${in1}-Small.png`
        
        return <img src={imgUrl} alt="ingredient" /> }
    

      
     

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
                <figure>
							
                                {getImage(this.state.drink.strIngredient1)}
                                <p>
                                {this.state.drink.strMeasure1}
                            </p>
							<figcaption>{this.state.drink.strIngredient1}</figcaption>
                            
				</figure>
                <figure>
                                
                                    {getImage(this.state.drink.strIngredient2)}
                                    <p>
                                    {this.state.drink.strMeasure2}
                                </p>
                                <figcaption>{this.state.drink.strIngredient2}</figcaption>
                                
                    </figure>
                    <figure>
                                
                                    {getImage(this.state.drink.strIngredient3)}
                                    <p>
                                    {this.state.drink.strMeasure3}
                                </p>
                                <figcaption>{this.state.drink.strIngredient3}</figcaption>
                                
                    </figure>
                    <figure>
                                
                                    {getImage(this.state.drink.strIngredient4)}
                                    <p>
                                    {this.state.drink.strMeasure4}
                                </p>
                                <figcaption>{this.state.drink.strIngredient4}</figcaption>
                                
                    </figure>
                    <figure>
                                
                                    {getImage(this.state.drink.strIngredient5)}
                                    <p>
                                    {this.state.drink.strMeasure5}
                                </p>
                                <figcaption>{this.state.drink.strIngredient5}</figcaption>
                                
                    </figure>
                    <figure>
                                
                                    {getImage(this.state.drink.strIngredient6)}
                                    <p>
                                    {this.state.drink.strMeasure6}
                                </p>
                                <figcaption>{this.state.drink.strIngredient6}</figcaption>  </figure>
                    <figure>
                                
                                    {getImage(this.state.drink.strIngredient7)}
                                    <p>
                                    {this.state.drink.strMeasure7}
                                </p>
                                <figcaption>{this.state.drink.strIngredient7}</figcaption>
                                
                    </figure>
                    <figure>
                                
                                    {getImage(this.state.drink.strIngredient8)}
                                    <p>
                                    {this.state.drink.strMeasure8}
                                </p>
                                <figcaption>{this.state.drink.strIngredient8}</figcaption>
                                
                    </figure>
                    <figure>
                                
                                    {getImage(this.state.drink.strIngredient9)}
                                    <p>
                                    {this.state.drink.strMeasure9}
                                </p>
                                <figcaption>{this.state.drink.strIngredient9}</figcaption>
                                
                    </figure>
                    <figure>
                                
                                    {getImage(this.state.drink.strIngredient10)}
                                    <p>
                                    {this.state.drink.strMeasure10}
                                </p>
                                <figcaption>{this.state.drink.strIngredient10}</figcaption>
                                
                    </figure>
                    <figure>
                                
                                    {getImage(this.state.drink.strIngredient11)}
                                    <p>
                                    {this.state.drink.strMeasure11}
                                </p>
                                <figcaption>{this.state.drink.strIngredient11}</figcaption>
                                
                    </figure>
                {this.state.drink.str}

                </div>
                

                      
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
