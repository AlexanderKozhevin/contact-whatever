import React, { Component } from 'react';

class Item extends Component {
  constructor(props){

    super(props);
    console.log(props.match.params.id)

    this.state = {
      name: 'some name',
      number: '9347583',
      avatar: 'avatar.jpg',
    }

    fetch('https://contact-list-afterparty.herokuapp.com/contacts/' + props.match.params.id, {
       method: 'GET',
     }).then((resp)=>{
        return resp.json()
     }).then((data)=>{
       console.log(data)
       this.setState(data)
     })

  }

  upadteInput = (e, param) =>{

    this.setState({
      [param]: e.target.value
    })

    //API call -> redirect
  }

  updateItem = () =>{
    console.log(this.props.match.params.id)
    var saveData = this.state
    delete this.state._id
    console.log(saveData)
    fetch('https://contact-list-afterparty.herokuapp.com/contacts/'+this.props.match.params.id, {
       method: 'PUT',
       headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({item: saveData})
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
          <button onClick={()=>this.updateItem()}>Save</button>
      </div>


    );
  }
}

export default Item;
