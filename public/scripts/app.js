'use strict';

console.log('App.js is running');

// JSK - Javascript XML
// Javascript syntax  extension

var app = {
	title: 'Indecision App',
	subtitle: 'Put Your Hands in the Hands of a Computer',
	options: ['One', 'Two']
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'p',
		null,
		app.options.length > 0 ? 'Here are your Options' : 'No Options'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item One'
		),
		React.createElement(
			'li',
			null,
			'Item Two'
		)
	)
);

// ----------------------------------------

var count = 0;
var addOne = function addOne() {
	return console.log('addOne');
};
var minusOne = function minusOne() {
	return console.log('minusOne');
};
var reset = function reset() {
	return console.log('RESET');
};

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Count: ',
		count,
		' '
	),
	React.createElement(
		'button',
		{ onClick: addOne },
		'+1'
	),
	React.createElement(
		'button',
		{ onClick: minusOne },
		'-1'
	),
	React.createElement(
		'button',
		{ onClick: reset },
		'Reset'
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
