import React, { Component } from 'react';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends Component<HelloProps, {}> {
  render() {
    return <h1>hello from {this.props.compiler} and {this.props.framework}!</h1>
  }
}

