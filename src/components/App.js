import React, { Component } from 'react'
import List from './List'

class App extends Component {
  state = {
    items: [
      { label: 'Learn JavaScript Syntax', done: true },
      { label: 'Learn React', done: false }
    ]
  }
 // add a new item to the array
  addItem (newItem) {
    this.setState({
      // items: this.state.items.concat(newItem)
      items: [...this.state.items, { label: newItem, done: false }]
    })
  }
  // toggle on index
  toggle = (index) => {
    const newItems = this.state.items.slice()
    newItems[index].done = !newItems[index].done
    this.setState = ({ items: newItems })
  }

  // submit function of the form
  _submit =(event) => {
  // prevents a regular submit from occurring
    event.preventDefault()
    // input from the text input to be added to items
    const input = this.refs.todoText
    // calling the add item to add input value to the array
    this.addItem(input.value)
    input.value = ''
  }

  render () {
    return <div className='App'>
      <header>
        <h1>One List</h1>
      </header>
      <main>
        <List
          items={this.state.items}
          toggle={this.toggle} />
        <form onSubmit={this._submit}>
          <input type='text' ref='todoText' />
        </form>
      </main>
    </div>
  }
}

export default App
