import Palette from './Palette';
import {Route, Switch} from 'react-router-dom';
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';

import React, { Component } from 'react'


 class App extends Component {

  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id === id;
    });
    console.log(id);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette List goes here</h1>}/>
        <Route 
          exact 
          path='/palette/:id' 
          render={routeProps => 
            <Palette 
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )} 
            />}
        />
      </Switch>
    )
  }
}

export default App;
