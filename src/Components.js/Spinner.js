import React, { Component } from 'react'
import loading from './loading.gif'
export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt='loading' height="80px" width="80px"/>
      </div>
    )
  }
}

export default spinner
