import React, { Component } from 'react';

class Item extends Component {
  constructor(props){

    super(props);
    console.log(props.match.params.id)

  }
  render() {
    return (
      <div >
        Item
      </div>
    );
  }
}

export default Item;
