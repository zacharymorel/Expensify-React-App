
// Parent
class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: []
    }
  }

  handleDeleteOptions() {
    this.setState (() => {
      return {
        options: []
      }
    })
  }
  // handlePick - pass down to Action and setup onClick - bind here
  // randomly pick an option and alert it

  handlePick() {
    this.setState(() => {
      const randomNum = Math.floor(Math.random() * this.state.options.length)
      const option = this.state.options[randomNum]
    })
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter Valid value to add item.'
    } else if (this.state.options.indexOf(option) > -1 ){
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render() {
    const title = 'Indecision'
    const subTitle = 'Put your life in the hands of a computer.'

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

//  Child
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    )
  }
}

//  Child
class Action extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick}
        disabled={!this.props.hasOptions}
        >
        What Should I do?
        </button>
      </div>
    )
  }
}

//  Child
class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map((option) => <Option key={option} optionText={option} />)}
      </div>
    )
  }
}

//  Child to Options
class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

//  Child
class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOptionEvent = this.handleAddOptionEvent.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOptionEvent(e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
   
    this.setState(() => {
      return { error}
    })
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



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))