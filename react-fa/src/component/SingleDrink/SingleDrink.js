import React, { Component } from 'react'

class SingleDrink extends Component {
    // get the single drink from the props
    componentDidMount() {
        console.log(this.props.drink)
        let id = this.props.match.params.id


    }




  render() {
    return (
      <>
        
      </>
    )
  }
}

export default SingleDrink
