import React, { Component } from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './component/Header/Header';
import routes from './routes';
// import Wizard from './component/Wizard/Wizard';
// import Dashboard from './component/Dashboard/Dashboard';

import './App.css';



class App extends Component {

  // constructor(props){
  //   super(props)

  //   this.state = {
  //     houseList:[],
  //     houseInfo:{
  //       house_id: 0,
  //       house_name: '',
  //       house_address: '',
  //       house_city: '',
  //       house_state: '',
  //       house_zipcode: '',
  //       house_url: '',
  //       house_mortgage: '',
  //       house_rent: '',
  //       buttonText:'Add House'
  //     }
  //   }
    // this.getHouses = this.getHouses.bind(this);
    // this.selectHouse = this.selectHouse.bind(this)
  // }

  // componentWillMount(){
  //   this.getHouses()
  // }

  // handleSubmit(e){
  //   e.preventDefault();

  //   axios
  //     .post('/api/houses')
  //       .then(res => {
  //         console.log(res);
  //       })
  // }

  // getHouses(){
  //   axios
  //     .get('/api/houses')
  //     .then(response => {
  //       this.setState({
  //         houseList: response.data,
  //       });
  //     });
  // }

  // selectHouse(id){
  //   debugger
  //   axios
  //     .get(`/api/houses/${id}`)
  //     .then(response => {
  //       response.data.buttonText = 'Save Changes'
  //       this.setState({
  //         formInfo: response.data,
  //       });
  //     });
  // }


  
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Dashboard 
          getHouses={this.getHouses} //Inventory
          houseList={this.state.houseList}
          selectHouse={this.state.selectHouse}
        />
        <Wizard 
          getHouseList={this.getHouses} //Inventory
          getHouses={this.getHouses} //Select
          houseInfo={this.houseInfo}
        /> */}
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