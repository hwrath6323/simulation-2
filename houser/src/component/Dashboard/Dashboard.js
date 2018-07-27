import React, {Component} from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            houseList: [
                {
                    name: 'House',
                    address: '1800 Callme Lane'
                },
                {
                    name: 'Mad Ludwigs Castle',
                    address: 'Bavaria'
                },
                {
                    name: 'Draculas Castle',
                    address: 'Carpathia'
                }
            ],
        }

        this.getHouses = this.getHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }


    componentWillMount(){
        this.getHouses()
    }

    getHouses(){
        axios
            .get('/api/houses')
            .then(response => {
                    this.setState({
                        houseList: response.data,
                    });
                }
            )
    }


    deleteHouse(id){
        axios
            .delete('/api/houses/' + id)
            .then(response => {
                this.props.getHouses()
            })
            .catch(err => {
                console.warn("House could not be deleted", err)
            })
    }





    render(){
        return(
            <div>

                {this.state.houseList
                    .map((item) => {
                        return(
                            <House {...item} 
                                key={item.id}   
                                houseList={this.houseList}
                                deleteHouse={this.deleteHouse}
                            >
                                <button>Delete</button>
                            </House>
                        )
                    })
                }

                <Link to='/wizard'><button>Add New Property</button></Link>
                <Link to='/'><button>Cancel</button></Link>

            </div>

        )
    }



}

export default Dashboard;