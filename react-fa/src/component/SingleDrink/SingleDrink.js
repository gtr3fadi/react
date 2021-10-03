import React, { Component } from 'react'
import axios from 'axios'

class SingleDrink extends Component {
    state = {
        drink: null
        
    }



    // get the single drink from the props
    componentDidMount() {
        console.log(this.props.drink)
        let id = this.props.match.params.id
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
    return (
      <>
        <h4>{this.state.drink.strDrink}</h4>
      </>
    )
  }
}

export default SingleDrink
