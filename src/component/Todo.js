import React, { Component } from 'react'
import Form from './Form'
import List from './List'

export default class Todo extends Component {
  state = {
    lists: ['first', 'second', 'third'],
  }

  handleUpdateList = (content) => {
    const newLists = [...this.state.lists, content]
    this.setState({
      lists: newLists,
    })
  }
  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')

    const newLists = [...this.state.lists, 'content']
    this.setState({
      lists: newLists,
    })
  }

  render() {
    console.log('render')
    return (
      <div>
        <Form addList={this.handleUpdateList}/>
        {
          this.state.lists.map((list,index) => {
            return <List key={index} content={list} index={index}>text</List>
          })
        }
      </div>
    )
  }
}
