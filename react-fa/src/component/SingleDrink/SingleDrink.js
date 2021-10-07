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
                    <div className="col-6 m-0 p-1">
                        <div className=" row rounded-ing" key={i}>
                        <div className="col-4">
                            <img className="img-fluid" src={`https://www.thecocktaildb.com/images/ingredients/${drink[`strIngredient${i}`]}-Small.png`} title={drink[`strIngredient${i}`]}  alt={drink[`strIngredient${i}`]} />
                        </div>
                        <div className="col-8">
                            <div >INGREDIENT {i}</div>
                            <div className="font-fa"> {drink[`strMeasure${i}`]}</div>
                            <div className="font-fa-2">{drink[`strIngredient${i}`]}</div>
                        </div>    
			    	</div>
                    </div>
                  
                )
            }
        }
        return ing
    }

    
    
    
    

      
     

    const drinkList  = this.state.drink ? (
        <div className="single-drink row row-cols-lg-2 row-cols-1  ">
            <div className="col-lg-5 col-12">
            <img src={this.state.drink.strDrinkThumb} className="img-fluid  rounded-fa" alt=""/>
                </div>
            <div className="col-lg-7 col-12">
                <h3 className="cocktail-title ps-3 ">{this.state.drink.strDrink}</h3>
                <div className="cocktail-info ps-3">
                     <p className=""> {this.state.drink.strAlcoholic} /  {this.state.drink.strCategory}</p>
                </div>
                <div className="cocktail-info row row-cols-2">          
                        {getIngredients()}
                      <div  className="rounded-ing-fa col-12">
                      <div >
                          <div>SERVED IN :</div>
                          <div className="font-fa-2">{this.state.drink.strGlass}</div>
                      </div>
                      <hr/>

                      <div>
                          <div>INSTRUCTIONS :</div>
                          <div className="font-fa-2">{this.state.drink.strInstructions}</div>
                      </div>
                      </div>


                
            

                </div>
                

                      
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    )

    

    return (
        <div className="container-fa">
            {drinkList}
        </div>
    )
  }
}

    












export default SingleDrink
