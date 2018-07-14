import React, {Component} from 'react';
import axios from 'axios';

class Wizard extends Component {


    inputs = [
        {
            label: "Name",
            property: "name"
        },
        {
            label: "Address",
            property: "address"
        },
        {
            label: "City",
            property: "city"
        },
        {
            label: "State",
            property: "state"
        },
        {
            label: "Zip Code",
            property: "zipcode"
        }
    ]


    constructor(props){
        super(props);

        const inputProperties = this.refreshState();

        this.state = {
            ...inputProperties,
            houseList: props.getHouses,

            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    handleChange(e, name) {
        const value = e.target.value;
        this.setState({[name]: value})
    }

    refreshState(){
        return this.inputs.reduce((map, input) => {
            return {
                ...map,
                [input.property] : ''
            }
        }, {});
    }

    handleSubmit(e){
        e.preventDefault();
        const {name, address, city, state, zipcode} = this.state;
        const newHouse = {name, address, city, state, zipcode};

        if(this.props.onSubmit){
            this.props.onSubmit(e, newHouse)
        }
        
        return axios
            .post('/api/houses', newHouse)
            .then(response => {
                this.props.getHouses()
                this.setState(this.refreshState());
            })
            .catch(err => {
                console.warn('Could not add house', err)
            })
    }


    render(){
        const inputs = this.inputs
        .map((input, i) => (
            <div key={`new-house-${i}`}>
                <div>
                    <label>
                        {input.label}:
                        <br /><input
                            type='text'
                            value={this.state[input.property]}
                            onChange={e => this.handleChange(e, input.property)}
                            name={input.property} />
                    </label>

                </div>
            </div>
        ));

        return(

            <div>

                <form className='house-form'>
                
                    {inputs}

                    <button onClick={e => this.handleSubmit(e)}>Complete</button>
                
                </form>


            </div>
        )
    }


}

export default Wizard;