console.log('App.js is running')

// JSK - Javascript XML
// Javascript syntax  extension

const app = {
	title: 'Indecision App',
	subtitle: 'Put Your Hands in the Hands of a Computer',
	options: ['One', 'Two']
}

const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? 'Here are your Options' : 'No Options'}</p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
)

// ----------------------------------------

let count = 0
const addOne = () => console.log('addOne')
const minusOne = () => console.log('minusOne')
const reset = () => console.log('RESET')

const templateTwo = (
	<div>
		 <h1>Count: {count} </h1>
		 <button onClick={addOne}>+1</button>
		 <button onClick={minusOne}>-1</button>
		 <button onClick={reset}>Reset</button>
	</div>
)





const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)