import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Item from './Item';
import List from './List';
import Add from './Add';


class App extends Component {
  constructor(props){

    super(props);

    this.state = {
      list : [
        {"name":"Stork, white-necked","number":"964-750-1864","avatar":"https://robohash.org/numquamdolorelaboriosam.bmp?size=50x50&set=set1","id":"b0572828-dfb1-4f68-8c50-6c6ebd2a9379"},
        {"name":"Small Indian mongoose","number":"637-891-6335","avatar":"https://robohash.org/exercitationeminciduntvoluptatem.jpg?size=50x50&set=set1","id":"fb216fba-b9af-4f6a-9eaa-c895b8a33450"},
        {"name":"Eland, common","number":"861-846-7429","avatar":"https://robohash.org/uteteos.png?size=50x50&set=set1","id":"c406f924-7701-4c11-b30b-cfd62e10fcad"},
        {"name":"Swallow-tail gull","number":"404-142-4453","avatar":"https://robohash.org/aliasmollitiaquibusdam.png?size=50x50&set=set1","id":"643225c2-ab39-4505-857a-0177d2d5b32c"},
        {"name":"Denham's bustard","number":"900-390-4805","avatar":"https://robohash.org/enimvoluptatevitae.jpg?size=50x50&set=set1","id":"0d1d1309-9b01-4ce1-b0b6-f5f9d5daf80e"},
        {"name":"Lion, southern sea","number":"875-374-2724","avatar":"https://robohash.org/animimagnilabore.png?size=50x50&set=set1","id":"f0cc2c9d-563c-4298-8f98-4dccc3d9d38e"},
        {"name":"Phascogale, brush-tailed","number":"755-500-5716","avatar":"https://robohash.org/delectusnonet.jpg?size=50x50&set=set1","id":"14f3f6e5-eacf-415b-965a-5eae59212722"},
        {"name":"Boubou, southern","number":"852-307-2229","avatar":"https://robohash.org/oditeosvoluptate.jpg?size=50x50&set=set1","id":"5defd205-d76f-451c-bada-50b029cc7f86"},
        {"name":"Short-nosed bandicoot","number":"186-967-5236","avatar":"https://robohash.org/porroutasperiores.bmp?size=50x50&set=set1","id":"dbb10cf4-ce71-42d9-b11c-66cc31128ecf"},
        {"name":"Kookaburra, laughing","number":"416-280-4732","avatar":"https://robohash.org/fugiatadipiscisaepe.jpg?size=50x50&set=set1","id":"31af77ce-2038-43f9-b598-baeea9f0bfc9"}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            
            <ul>
              <li><Link to="/">List</Link></li>
              <li><Link to="/add">Add</Link></li>
              <li><Link to="/contact/2345">Item</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={List}/>
            <Route exact path="/add" component={Add}/>
            <Route path="/contact/:id" component={Item}/>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
