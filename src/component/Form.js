import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    input: '',
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  handleAdd = () => {
    this.props.addList(this.state.input)
    this.setState({
      input: '',
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="text"/>
        <button onClick={this.handleAdd}>add</button>
      </div>
    )
  }
}
