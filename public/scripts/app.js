'use strict';

console.log('App.js is running');

// JSK - Javascript XML
// Javascript syntax  extension

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Indecision App'
	),
	React.createElement(
		'p',
		null,
		'This is some info'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'foo'
		),
		React.createElement(
			'li',
			null,
			'foo'
		)
	)
);

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Zach Morel'
	),
	React.createElement(
		'p',
		null,
		'Age: 25'
	),
	React.createElement(
		'p',
		null,
		'Location: Tampa'
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
