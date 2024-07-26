import React, { Component } from 'react'
import SPINNER from '../SPINNER.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={SPINNER} alt='loading'/>
      </div>
    )
  }
}

export default Spinner
