import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class StepTwo extends Component {


    inputs = [
        {
            label: "Image URL",
            property: "house_img"
        }
    ];


    constructor(props){
        super(props);

        const inputProperties = this.refreshState();

        this.state = {
            ...inputProperties,
            // houses: [ ],
            // house_name: '',
            // house_address: '',
            // house_city: '',
            // house_state: '',
            // house_zipcode: '',
            // house_img: '',
            house_mortgage: '',
            // house_rent: '',
            // house_id: 0,
            // selectHouse: props.selectHouse,
            // editHouse: props.selectHouse,
        }

        this.baseState = this.state;
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            // house_name: nextProps.formInfo.house_name,
            // house_address: nextProps.formInfo.house_price,
            // house_city: nextProps.formInfo.house_city,
            // house_state: nextProps.formInfo.house_state,
            // house_zipcode: nextProps.formInfo.house_zipcode,
            house_img: nextProps.formInfo.house_img,
            // house_mortgage: nextProps.formInfo.house_mortgage,
            // house_rent: nextProps.formInfo.house_rent,
            // house_id: nextProps.formInfo.id,
        })
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

    // resetForm(e){
    //     this.setState(this.baseState)
    // }

    // handleSubmit(e){
    //     e.preventDefault();
    //     const {house_id, house_name, house_address, house_city, house_state, house_zipcode, house_img, house_mortgage, house_rent} = this.state;
    //     const newHouse = {house_id, house_name, house_address, house_city, house_state, house_zipcode, house_img, house_mortgage, house_rent};

    //     if(this.onSubmit){
    //         this.onSubmit(e, newHouse)
    //     }

    //     // if(this.state.house_id > 0){
    //     //     axios  
    //     //         .put('/api/houses/' + this.state.id, newHouse)
    //     //         .then(response => {
    //     //             this.props.getHouseList()
    //     //         })
    //     //         .then(() => this.props.getHouses())
    //     //         .catch(err => {
    //     //             console.warn("House could not be updated", err)
    //     //         })
    //     // } else {        
    //         axios
    //         .post('/api/houses', newHouse)
    //         .then(response => {
    //             this.props.getHouseList()
    //             this.props.getHouses()
    //             this.setState(this.refreshState());
    //         })
    //         .catch(err => {
    //             console.warn('Could not add house', err)
    //         })
    //     // }
    // }


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

        // let url;
        // if(this.state.house_img){
        //     url = this.state.house_img
        // }


        return(
            <div>
                <form className='house-form'>
                    <div className="input-box">

                        <Link to='/'>
                            <button>Cancel</button>
                        </Link>

                        {inputs}

                        <div className="step-buttons">
                            <Link to='/wizard/step1'>
                                <button>Previous Step</button>
                            </Link>
                            <Link to='/wizard/step3'>
                                <button>Next Step</button>
                            </Link>
                        </div>

                    </div>
                </form>
            </div>
        )
    };
}

export default StepTwo;