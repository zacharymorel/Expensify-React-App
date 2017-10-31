import React from 'react'

//  Child
export default class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOptionEvent = this.handleAddOptionEvent.bind(this)
    this.state = {
      error: undefined
    }

    
  }
  
  handleAddOptionEvent(e) {
    e.preventDefault()
    console.log('testing')
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    
    this.setState(() => ({ error }))

    if (!error) {
        e.target.elements.option.value = '' 
      }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOptionEvent}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

