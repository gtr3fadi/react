import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Home extends Component {

    
        constructor(props){
           super(props);
           this.state = {
             drinks: [],
             searchValue: 'a',
           }
         }
        
       componentDidMount(){
         axios.get(`https://www.thecocktaildb.com/api/json/v1/1//search.php?f=${this.state.searchValue}`)
         .then(res => {
           this.setState({
             drinks: res.data.drinks
             
           })
           console.log(res.data.drinks)
         })
         .catch(err => {
           console.log(err);
         }
         )
     }
     


  render() {

    const {drinks} = this.state;
    const {searchValue} = this.state;
    const drinksList = this.state.drinks.map(drink => {
       return(
         // in card with image and name in row-cols-3 and button to go to drink page
         <div className="card" key={drink.idDrink}>
           <div className="card-image">
             <img src={drink.strDrinkThumb} alt="drink" />
             <span className="card-title">{drink.strDrink}</span>
           </div>
           <div className="card-content">
             <p>{drink.strInstructions}</p>
           </div>
           <div className="card-action">
             <Link to={`/drink/${drink.idDrink}`}>
               <button className="btn-small">
                 View Recipe
               </button>
             </Link>
           </div>
         </div>


      )})





    return (
      <>


        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="input-group m-3">
                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>




        {drinksList}
      </>
    )
  }
}

export default Home
