import React, { Component } from 'react'
import { Grid, Header} from 'semantic-ui-react'

const balance = 0

export class Past5 extends Component {
  render() {
    return (
      <Grid columns={1}>
        <Grid.Row columns={3} divided responsive>
          <Grid.Column style={{textAlign:'center'}}>
            <p><Header>Balance</Header></p>
            <p>{ balance ? balance >= 0 ? `$${balance}`: `-$${-1*balance}` :  '$0' }</p>
          </Grid.Column>
          <Grid.Column style={{textAlign:'center'}}>Balance 2</Grid.Column>
          <Grid.Column style={{textAlign:'center'}}>Balance 3</Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}