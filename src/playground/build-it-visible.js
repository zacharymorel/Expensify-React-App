// Create a Toggle Visibility button to show some text

let visibility = false


const toggleVisiblity = () => {
  visibility = !visibility
  render()
}

const show = {
  text: 'Here are somethings'
}

const appRoot = document.getElementById('app')

const render = () => {
  const template = (
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggleVisiblity}>{visibility ? 'Hide Details' : 'Show Details'}</button>
      {visibility && (
        <div>
          <p>There are some detials you should be able to see.</p>
        </div>
      )}
    </div> 
  )
  
  ReactDOM.render(template, appRoot)
}

render()