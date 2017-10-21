console.log('App.js is running')

// JSK - Javascript XML
// Javascript syntax  extension

let template = (
	<div>
		<h1>Indecision App</h1>
		<p>This is some info</p>
		<ol>
			<li>foo</li>
			<li>foo</li>
		</ol>
	</div>
)

let templateTwo = (
	<div>
		<h1>Zach Morel</h1>
		<p>Age: 25</p>
		<p>Location: Tampa</p>
	</div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)