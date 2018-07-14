import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import Wizard from './component/Wizard/Wizard';


import './App.css';
import Axios from 'axios';
import routes from './routes';

class App extends Component {




  
  render() {
    return (
      <div className="App">
        <Header />
        { routes }


      </div>
    );
  }
}

export default App;






// this.state(
//   {name: '',
//   address: '',
//   city: '',
//   state: '',
//   zipcode: ''}
// )

// handleChange(e, name){e => {
//   const value = e.target.value;
//   this.setState({[name]: value
//   })
// }


// app.get()

// axios
//   .get('/api/houselist')
//   .then(
//     this.state.map()
//   )
//   .catch(err){
//     console.warn(err)
//   }