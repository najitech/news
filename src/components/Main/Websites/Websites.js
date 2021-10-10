import { FormControl, InputLabel, Select } from '@material-ui/core';
import { MenuItem } from 'material-ui';
import React from 'react';
import './Websites.css';
function Websites(props) {
    const [sort, setSort] = React.useState('');
    const handleChange = (event) => {
      setSort(event.target.value);
    };
    return (
        <div className="websites">
            <div className="websitesContainer">
                <div className="sortSitesContainer">
                </div>
            </div>
            <div className="websiteInformationContainer">
                info
            </div>
        </div>
    )
}

export default Websites
