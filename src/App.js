import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props){

    super(props);

    this.state = {
      list : [
        {"name":"Ox, musk","number":"672-927-6623","avatar":"https://robohash.org/utdoloret.bmp?size=50x50&set=set1"},
        {"name":"Vicuna","number":"644-749-9803","avatar":"https://robohash.org/mollitiaestharum.bmp?size=50x50&set=set1"},
        {"name":"Australian sea lion","number":"156-330-4905","avatar":"https://robohash.org/nonquiaquaerat.bmp?size=50x50&set=set1"},
        {"name":"Bear, grizzly","number":"210-398-5238","avatar":"https://robohash.org/nonnequeperspiciatis.bmp?size=50x50&set=set1"},
        {"name":"Wallaroo, common","number":"211-865-6178","avatar":"https://robohash.org/eligendibeataeunde.png?size=50x50&set=set1"},
        {"name":"Giant heron","number":"284-515-6756","avatar":"https://robohash.org/deseruntaccusantiumdolores.jpg?size=50x50&set=set1"},
        {"name":"Hawk-headed parrot","number":"780-206-1559","avatar":"https://robohash.org/idutaccusamus.jpg?size=50x50&set=set1"},
        {"name":"Killer whale","number":"524-678-5324","avatar":"https://robohash.org/consequatursedin.bmp?size=50x50&set=set1"},
        {"name":"Langur, gray","number":"616-318-0351","avatar":"https://robohash.org/nobiseximpedit.bmp?size=50x50&set=set1"},
        {"name":"Boa, malagasy ground","number":"361-139-7222","avatar":"https://robohash.org/etodiounde.jpg?size=50x50&set=set1"}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.list.map((item, index)=>{
          return(
            <div key={index}>
              <img src={item.avatar} />
              <div >{item.name}</div>
              <div >{item.number}</div>
            </div>

          )
        })}
      </div>
    );
  }
}

export default App;
