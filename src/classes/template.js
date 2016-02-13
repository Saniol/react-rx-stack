import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import template from '../views/template.rt';

class Template extends React.Component {
    constructor() {
        super();
        this.displayName = 'Hello';
        this.render = template;
    }
}

ReactDOM.render(React.createElement(Template), document.getElementById('container'));
