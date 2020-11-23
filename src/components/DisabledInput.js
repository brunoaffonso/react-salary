import React, { Component } from 'react';

export default class DisabledInput extends Component {
  render() {
    return (
      <div>
        <label>
          {this.props.description}
          <input type="text" readOnly />
        </label>
      </div>
    );
  }
}
