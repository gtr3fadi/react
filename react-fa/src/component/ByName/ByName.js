import React, { Component } from 'react';

import axios from 'axios';

class ByName extends Component {

    //constructor
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: [],
            isLoading: false,
            error: null
        };
    }
   
    // componentDidMount for axios api cocktail
    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.state.name)
            .then(res => {
                this.setState({
                    data: res.data.drinks,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }
}






    // search for a name of cocktail from api and return the result by axios
    searchCocktail(name) {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => {
            this.props.setCocktail(res.data.drinks);
        })
        .catch(err => console.log(err));
}


  render() {
    return (
      <>
        <input type="text" placeholder="Search for a cocktail" onChange={(e) => this.searchCocktail(e.target.value)}/>
        //result of search
        <div>
            {this.props.cocktails.map(cocktail => (
                <div key={cocktail.idDrink}>
                    <h2>{cocktail.strDrink}</h2>
                    <img src={cocktail.strDrinkThumb} alt=""/>
                </div>
            ))}
        </div>
      </>
    );
  }
    
  }


export default ByName
