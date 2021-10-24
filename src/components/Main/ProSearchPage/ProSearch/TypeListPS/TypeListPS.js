import { Chip, Grow } from '@material-ui/core';
import React from 'react';
import './TypeListPS.css';
function TypeListPS(props) {
    const {chipData}= props;
    return (

        <div className="typeListPS"> 
            {chipData === undefined ? null :  chipData.map((data) => {
                let icon;
                return (
                <Grow in={true}
                {...(true ? { timeout: 400 } : {})}>
                <div key={data.key}>
                    <Chip
                    icon={icon}
                    label={data}
                    onDelete={()=>{props.handleDelete(data)}}
                    className="chipTypeItemPS"
                    />
                </div>
                </Grow>
                );
            })}
        </div>
    )
}

export default TypeListPS
