import React, { Component } from 'react';
import { LogForm } from './components/logForm';
import { Grid } from 'semantic-ui-react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid padded>
          <Grid.Column>
            <LogForm />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
