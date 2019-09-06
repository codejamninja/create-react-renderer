import React, { Component, ReactNode } from 'react';
import { Smart, Code } from '../..';

export interface ReturnStatementProps {
  children: ReactNode | number | string;
}

export class ReturnStatement extends Component<ReturnStatementProps> {
  renderChildren() {
    if (typeof this.props.children === 'string') {
      const code = `'${this.props.children}'`;
      return <Code>{code}</Code>;
    }
    if (
      typeof this.props.children === 'number' ||
      typeof this.props.children === 'boolean'
    ) {
      return <Code>{this.props.children.toString()}</Code>;
    }
    return this.props.children;
  }

  render() {
    const code = `function f() {return null}`;
    return (
      <Smart code={code} scopePath="body.body.0" bodyPath="argument">
        {this.renderChildren()}
      </Smart>
    );
  }
}
