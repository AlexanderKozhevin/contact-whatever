import React, { Component } from 'react';

import { withRouter } from 'react-router'

class Add extends Component {
  constructor(props){

    super(props);

    this.state = {
      name: 'some name',
      number: '9347583',
      avatar: 'avatar.jpg',
    }


  }
  upadteInput = (e, param) =>{

    this.setState({
      [param]: e.target.value
    })

  }
  // https://contact-list-afterparty.herokuapp.com
  createItem = () =>{
    console.log(this.state)
    fetch('https://contact-list-afterparty.herokuapp.com/contacts', {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({item: this.state})
     }).then((resp)=>{
        return resp.json()
     }).then((data)=>{
       console.log(data)
       this.props.history.push('/')
     })
  }
  render() {

    return (
      <div >

        <input value={this.state.name} onChange={(e)=>this.upadteInput(e,'name')} />
        <br />
        <br />
        <input value={this.state.number} onChange={(e)=>this.upadteInput(e,'number')} />
        <br />
        <br />
        <input value={this.state.avatar} onChange={(e)=>this.upadteInput(e,'avatar')} />

        <br />
        <br />
        <button onClick={()=>this.createItem()}>Create</button>
      </div>
    );
  }
}

export default withRouter(Add);
