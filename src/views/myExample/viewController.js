import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import view from './view.rt';


export default class MyExample extends React.Component {
    constructor() {
        super();
        this.render = view;
    }
    handleClick() {
      alert('You\'ve clicked a button!');
    }
}


MyExample.propTypes = {
  text: React.PropTypes.string.isRequired
};
