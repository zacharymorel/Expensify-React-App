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
	),
	React.createElement(
		'form',
		null,
		React.createElement('input', { type: 'text', name: 'option' }),
		React.createElement(
			'button',
			null,
			'Add Option'
		)
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
