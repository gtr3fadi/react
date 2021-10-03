import React, { Component } from 'react'
import axios from 'axios'

class ByFirstLetter extends Component {

  state = {
    searchValue: '',
    searchResults: [],
    isLoading: false,
    error: null
  }

  getD =()=> {
    let one=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this.searchValue}`
    let two=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.searchValue}`
    let three=`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${this.searchValue}`

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);


    axios.all([requestOne, requestTwo, requestThree])
      .then(axios.spread((...responses) => {
        this.setState({
          searchResults: responses
        })
      }))
      .catch(error => {
        this.setState({
          error: error
        })
      })
}

  render() {
    return (
      <>
        
      </>
    )
  }
}

export default ByFirstLetter
