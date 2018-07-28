import React from 'react';
import './House.css';

const House = (props) => {


        return(
            <div className="house-box">  
                    <img src={props.house_img} />
                    <br />{props.house_name}
                    <br />{props.house_address}
                    <br />{props.house_city}
                    <br />{props.house_state}
                    <br />{props.house_zipcode}
                    <br />{props.house_mortgage}
                    <br />{props.house_rent}
                    <div className="house-buttons">
                        {/* <button>Update House</button> */}
                        <button onClick={() => props.deleteHouse(props.id)}>Delete</button>
                    </div>
            </div>
        )


};

export default House;


// onClick={() => props.deleteHouse(props.id)}