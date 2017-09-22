import React, { Component } from 'react';

class Add extends Component {
  constructor(props){

    super(props);

    this.state = {
      name: 'some name',
      phone: '9347583',
      avatar: 'avatar.jpg',
    }

  }
  upadteInput = (e, param) =>{
    this.setState({
      [param]: e.target.value
    })

    //API call -> redirect
  }
  render() {

    return (
      <div >

        <input value={this.state.name} onChange={(e)=>this.upadteInput(e,'name')} />
        <br />
        <br />
        <input value={this.state.phone} onChange={(e)=>this.upadteInput(e,'phone')} />
        <br />
        <br />
        <input value={this.state.avatar} onChange={(e)=>this.upadteInput(e,'avatar')} />

      </div>
    );
  }
}

export default Add;
