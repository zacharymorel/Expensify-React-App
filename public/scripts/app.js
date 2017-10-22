'use strict';

// Create a Toggle Visibility button to show some text

var visibility = false;

var toggleVisiblity = function toggleVisiblity() {
  visibility = !visibility;
  render();
};

var show = {
  text: 'Here are somethings'
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisiblity },
      visibility ? 'Hide Details' : 'Show Details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'There are some detials you should be able to see.'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
