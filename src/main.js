import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import HelloUser from './HelloUser';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
	React.createElement(Counter),
	document.getElementById('countMount')
  );

  ReactDOM.render(
    React.createElement(HelloUser),
    document.getElementById('helloMount')
  );

});

