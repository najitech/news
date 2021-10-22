import { Chip } from '@material-ui/core';
import React from 'react';
import './TypeListPS.css';
function TypeListPS(props) {
    const {chipData}= props
    console.log(chipData);
    return (

        <div className="typeListPS"> 
            {chipData === undefined ? null :  chipData.map((data) => {
                let icon;
                return (
                <div key={data.key}>
                    <Chip
                    icon={icon}
                    label={data}
                    onDelete={()=>{props.handleDelete(data)}}
                    className="chipTypeItemPS"
                    />
                </div>
                );
            })}
        </div>
    )
}

export default TypeListPS
