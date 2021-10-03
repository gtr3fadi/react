import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./Home.css";


class Home extends Component {

    
        constructor(props){
           super(props);
           this.state = {
             drinks: [],
             searchValue: ''
           }
         }

         onChange = (e) => {
              this.setState({
                searchValue: e.target.value
                })}

                // getD =()=> {
                //     let one=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this.searchValue}`
                //     let two=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.searchValue}`
                //     let three=`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${this.searchValue}`
                
                //     const requestOne = axios.get(one);
                //     const requestTwo = axios.get(two);
                //     const requestThree = axios.get(three);
                
                
                //     axios.all([requestOne, requestTwo, requestThree])
                //       .then(axios.spread((...responses) => {
                //         this.setState({
                //             drinks: responses[0].data.drinks
                //         })
                        
                //       }))
                //       .catch(error => {
                //         this.setState({
                //           error: error
                //         })
                //       })
                // }       
        
         getApiDetails = () => {
                        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.state.searchValue)
                        .then(res => {
                            this.setState({
                                drinks: res.data.drinks
                            })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                    }

       componentDidMount(){
            this.getApiDetails();
            }
     
        componentDidUpdate(prevProps, prevState){
            if(prevState.searchValue !== this.state.searchValue){
                this.getApiDetails();
                     }
              }
     
         

  render() {

    const {drinks} = this.state;
    const {searchValue} = this.state;
    const drinksList = this.state.drinks.map(drink => {
       return (
         // in card with image and name in row-cols-3 and button to go to drink page
         <div className="col p-2">
           <div className="card card-fa" key={drink.idDrink}>
             <img
               src={drink.strDrinkThumb}
               alt={drink.strDrink}
               class="card-img-top"
               alt={drink.strDrink}
             />
             <div className="card-body">
               <h5 className="card-title">{drink.strDrink}</h5>
               <p className="card-text">
               {drink.strAlcoholic}
               </p>
               <Link to={`/drink/${drink.idDrink}`}>
                 <button className="btn btn-primary btn-fa">View Recipe</button>
               </Link>
             </div>
           </div>
         </div>
       );})





    return (
      < div className="container-fa">


        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="input-group m-3">
                <input type="text" className="form-control" onChange={this.onChange} placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row row-cols-4">
            {drinksList}
          </div>
        </div>

      </div>
    )
  }


}

export default Home
