import React from 'react';

const House = (props) => {


        return(
            <div className="house-list">   
                {props.name}
                <br />{props.address}
                <br /><button onClick={() => props.deleteHouse(props.id)}>Delete</button>
            </div>
        )


};

export default House;