import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Memoize from './Memoize.js';
import _ from 'lodash';

class App extends Component {

    memoizedHelloWorld = _.memoize((value) => {
        console.log("_MEMOIZE IS CALLED")
        return () => console.log('memoizedHelloWorld was called with ', value)
    })

    state = {}

    triggerParentRerender = () => {
        this.setState(this.state)
    }

    // helloWorld = (value) => {
    //     console.log("My sole purpose is to be passed as a prop")
    // }
  render() {
      console.log("PARENT IS RERENDERING")
      const myArray = [1, 2, 3, 4, 5]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.triggerParentRerender}>Trigger Parent Rerender</button>
        {/* <Memoize/> */}
        {/* <Memoize
            myFunction={this.helloWorld}
        /> */}
        {/* <Memoize
            myFunction={() => this.helloWorld('hello')}
        /> */}
        {/* <Memoize
            myFunction={this.memoizedHelloWorld('hello')}
        /> */}
        <Memoize
            myFunction={this.memoizedHelloWorld('hello')}
        />
        <Memoize
            myFunction={this.memoizedHelloWorld('bonjour')}
        />
        <Memoize
            myFunction={this.memoizedHelloWorld('goodbye')}
        />
        <Memoize
            myFunction={this.memoizedHelloWorld('au revoir')}
        />

      </div>
    );
  }
}

export default App;
