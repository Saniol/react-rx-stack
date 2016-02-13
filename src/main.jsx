import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './classes/hello.jsx';
import World from './classes/world.jsx';
import Template from './classes/template.js';
// import Router from './router.jsx';

import MyExample from './views/myExample/viewController.js';

// ReactDOM.render(React.createElement(MyExample, {text: 'test'}), document.getElementById('btnContainer'));
ReactDOM.render( <MyExample text="test" />, document.getElementById('btnContainer'));
