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
        console.log(this.state.drink)


    }
    )
    }




  render() {
      const { drink } = this.state

    
    // function getImage  (in1)  {
    //     let imgUrl = `https://www.thecocktaildb.com/images/ingredients/${in1}-Small.png`
        
    //     return <img src={imgUrl} alt="ingredient" /> }

    // function to get the ingredients from the drink and return it
    function getIngredients (){
        let ing = []
        for (let i = 1; i < 15; i++) {
            if (drink[`strIngredient${i}`]) {
                ing.push(
                    <figure className="col" key={i}>
							
                            <img src={`https://www.thecocktaildb.com/images/ingredients/${drink[`strIngredient${i}`]}-Small.png`} alt="ingredient" />
                                <p>
                                {drink[`strMeasure${i}`]}
                            </p>
							<figcaption>{drink[`strIngredient${i}`]}</figcaption>
                            
				</figure>
                  
                )
            }
        }
        return ing
    }

    
    
    
    

      
     

    const drinkList  = this.state.drink ? (
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
                <div className="cocktail-info row row-cols-3">
                        
                    {getIngredients()}
                  
                    <p className="col-12">{this.state.drink.strGlass}</p>
                    <p className="col-12">{this.state.drink.strInstructions}</p>


                
            

                </div>
                

                      
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    )

    

    return (
        <div>
            {drinkList}
        </div>
    )
  }
}

    












export default SingleDrink
