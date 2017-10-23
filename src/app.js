
// Parent
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision'
    const subTitle = 'Put your life in the hands of a computer.'
    const options = ['Thing1', 'Thing2', 'Thing4']

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  handlePick() {
    alert('handlePick')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I do?</button>
      </div>
    )
  }
}

//  Child
class Options extends React.Component {
  constructor(props) {
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }
  handleRemoveAll() {
    console.log(this.props.options)
    // alert('remove All')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
        <Option />
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
  handleAddOption(e) {
    e.preventDefault

    const option = e.target.elements.option.value.trim()

    if(option) {
      alert(option)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))