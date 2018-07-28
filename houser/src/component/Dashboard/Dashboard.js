import React, {Component} from 'react';
import House from '../House/House';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {

    constructor(){
        super();

        this.state = {
            houseList:[],
            houseInfo:{
              house_id: 0,
              house_name: '',
              house_address: '',
              house_city: '',
              house_state: '',
              house_zipcode: '',
              house_url: '',
              house_mortgage: '',
              house_rent: '',
              buttonText:'Add House'
            }
        }

        this.getHouses = this.getHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount(){
        this.getHouses()
    }

    getHouses = () => {
        axios.get('/api/houses')
        .then(response => {
            console.log(response.data)
            this.setState({
                houseList: response.data,
            });
        });
    }

    deleteHouse(id){
        axios
            .delete('/api/houses/' + id)
            .then(response => {
                this.getHouses()
            })
            .catch(err => {
                console.warn("House could not be deleted", err)
            })
    }





    render(){
        return(
            <div className="dashboard-container">


                <div className="house-list">
                    {this.state.houseList
                        .map((item) => {
                            return(
                                <House {...item}
                                    className="house-box"
                                    key={item.id}   
                                    deleteHouse={this.deleteHouse}
                                />
                            )
                        })
                    }

                    <Link to='/wizard/step1'><button className="add-button">Add New Property</button></Link>

                </div>


            </div>

        )
    }



}

export default Dashboard;







    
    // handleSubmit(e){
    //   e.preventDefault();
 
    //   axios
    //     .post('/api/houses')
    //       .then(res => {
    //         console.log(res);
    //       })
    // }