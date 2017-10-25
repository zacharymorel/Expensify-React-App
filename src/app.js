// stateless functional component
//   ^            ^             ^
// It's stateless functional and a component

// Parent
class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: props.options
    }
  }

  handleDeleteOptions() {
    this.setState (() => ({ options: [] }))
  }

  handleDeleteOption(optionToRemove) {
    this.setState = ((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }
  
  handlePick() {
    this.setState(() => {
      const randomNum = Math.floor(Math.random() * this.state.options.length)
      const option = this.state.options[randomNum]
      alert(option)
    })
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter Valid value to add item.'
    } else if (this.state.options.indexOf(option) > -1 ){
      return 'This option already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option)}))
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer.'

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps ={
  options: []
}

//  Child
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

// Passing Deafult Props after Component is Defined. 
Header.defaultProps = {
  title: 'Indecision'
}

//  Child
const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
      What Should I do?
      </button>
    </div>
  )
}

//  Child
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => (
          <Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
        />
      )
    )}
    </div>
  )
}

//  Child to Options
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        Remove
      </button>
    </div>
  )
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
   
    this.setState(() => ({ error }))
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