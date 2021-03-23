import Palette from './Palette';
import seedColors from './seedColors';
import React, { Component } from 'react'


 class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[4]}/>
      </div>
    )
  }
}

export default App;
