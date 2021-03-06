import React, { Component } from 'react'
import {
  Button,
  Form,
  Header,
  Checkbox,
  Input,
} from 'semantic-ui-react'
import firebase from './firebase'

const shortid = require('shortid')
const db = firebase.firestore()


// https://medium.com/get-it-working/get-googles-firestore-working-with-react-c78f198d2364

export class LogForm extends Component {

  super(props){
    this.onSubmit.bind(this.onSubmit)
  }

  state = {
    isCash: false,
    isOutgoing: false
  }

  onSubmit(){
    db.collection('logs').add({
      ...this.state, 
      timestamp: new Date(),
      shortid: shortid.generate()
    }).then( data => {
      console.log(data)
    })
  }

  render(){
    return(
      <Form size='small' onSubmit={() => this.onSubmit()}>
        <Header>Enter a new Log</Header>
        <Form.Group widths='equal'>
          <Form.Input fluid placeholder='Spending Name' label='Spending Name' required onChange={e => this.setState({name: e.target.value})}/>
          <Form.Field required>
            <label>Amount</label>
            <Input label='$' onChange={e => this.setState({amount:Number(e.target.value)})} required/>
          </Form.Field>
          <Form.Select fluid label='Spending Category' options={[
            {key:'w', text:'Work', value:'work'},
            {key:'s', text:'School', value:'school'},
            {key:'p', text:'Parents', value:'parents'},
            {key:'t', text:'Transport', value:'transport'},
            {key:'b', text:'Bills', value:'bills'},
          ]} placeholder='Category' onChange={(e, {value})=> this.setState({category:value})} required/>
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input fluid placeholder='Spending Description' label='Spending Description' onChange={e => this.setState({description:e.target.value})}/>
        </Form.Group>

        <Form.Field>
          <label>Additional Transaction Details</label>
        </Form.Field>

        <Form.Group widths='equal'>
          <Form.Field><Checkbox label='Cash Transaction' onChange={() => {
            const isCash = this.state.isCash ? this.state.isCash : false
            const newIsCash = isCash ? false : true
            this.setState({isCash: newIsCash})
          }}/></Form.Field>
          <Form.Field><Checkbox label='Outgoing Transaction' onChange={() => {
            const isOutgoing = this.state.isOutgoing ? this.state.isOutgoing : false
            const newIsOutgoing = isOutgoing ? false : true
            this.setState({isOutgoing: newIsOutgoing})
          }}/></Form.Field>
        </Form.Group>

        <Button color='green' type='submit' fluid>Submit</Button>

      </Form>
    )
  }

}
