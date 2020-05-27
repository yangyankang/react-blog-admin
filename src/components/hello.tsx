import React, { Component } from 'react'

export interface IHelloProps { compiler: string; framework: string }

export class Hello extends Component <IHelloProps, {}> {
  render() {
    return <h1>hello from {this.props.compiler} and {this.props.framework}!</h1>
  }
}

