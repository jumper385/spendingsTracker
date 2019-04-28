import React, { Component } from 'react';
import { LogForm } from './components/logForm';
import { Grid } from 'semantic-ui-react'
import { Past5 } from './components/past5';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid columns = 'equal' padded divided>
          <Grid.Column><LogForm /></Grid.Column>
          <Grid.Column><Past5 /></Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
