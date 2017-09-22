import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom'

class List extends Component {
  constructor(props){

    super(props);


    this.state = {
      list : []
    }


    fetch('https://contact-list-afterparty.herokuapp.com/contacts', {
       method: 'GET',
     }).then((resp)=>{
        return resp.json()
     }).then((data)=>{
       console.log(data)
       this.setState({
         list: data
       })
     })


  }
  removeItem = (item) =>{
    console.log(item)

    var updatedList = this.state.list.filter((el)=> el._id != item._id)
    this.setState({
      list: updatedList
    })

    fetch('https://contact-list-afterparty.herokuapp.com/contacts/'+item._id, {
       method: 'DELETE',
     }).then((resp)=>{
     })


  }
  render() {
    return (
      <div >
        {this.state.list.map((item, index)=>{
          return(
            <div key={index} className="item">
              <img className="avatar" src={item.avatar} />
              <Link to={`/contact/${ item._id }`}>
                <div>{item.name}</div>
                <div >{item.number}</div>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div onClick={()=>this.removeItem(item)}>Remove Item</div>

            </div>

          )
        })}
      </div>
    );
  }
}

export default List;
