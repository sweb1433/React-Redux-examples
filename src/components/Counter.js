import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        <input type="text" value={value} />
        <button onClick={onIncrement}>
          Badhao
        </button>
        <button onClick={onDecrement}>
          Ghatao
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
