import React, { Component } from 'react'

export default class List extends Component {
  render() {
    console.log('this.props', this.props)
    return (
      <div>
        <p>{this.props.content} {this.props.children}</p>
      </div>
    )
  }
}
