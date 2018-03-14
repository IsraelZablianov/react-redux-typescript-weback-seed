import * as React from 'react';
import HelloContainer from "../hello/hello-container";
import './app.less';
const logo = require('../../assets/images/logo.svg');

export interface AppProps {

}

export interface AppState {

}

export default class App extends React.Component<AppProps, AppState> {
    render() {
        return (
            <div className="app">
                <div className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="app-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
              </p>
                <HelloContainer />
            </div>
        );
    }
}
