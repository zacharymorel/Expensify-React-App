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
		<form>
			<input type="text" name="option"/>
			<button>Add Option</button>
		</form>
	</div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)