import * as React from 'react';
import './hello.css';

export interface HelloStateProps {
    name: string;
    enthusiasmLevel?: number;
} 

export interface HelloDispatchProps {
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export interface HelloBaseProps {

}

export type HelloProps = HelloStateProps & HelloDispatchProps & HelloBaseProps;

export interface HelloState {

}

export default class Hello extends React.Component<HelloProps, HelloState> {
    getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
    }
    render() {
        if(!this.props.enthusiasmLevel || this.props.enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + this.getExclamationMarks(this.props.enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={() => this.props.onDecrement && this.props.onDecrement()}>-</button>
                    <button onClick={() => this.props.onIncrement && this.props.onIncrement()}>+</button>
                </div>
            </div>
        );
    }
}

