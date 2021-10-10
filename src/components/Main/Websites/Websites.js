import { FormControl, InputLabel, Select } from '@material-ui/core';
import { MenuItem } from 'material-ui';
import React from 'react';
import WebsiteCard from './websiteCard/WebsiteCard';
import './Websites.css';
function Websites(props) {
    const [sort, setSort] = React.useState('');
    const handleChange = (event) => {
      setSort(event.target.value);
    };
    return (
        <div className="websites">
            <div className="websitesContainer">
                <h3>خبر گزاری ها</h3>
                <div className="gridWebsites">
                    <WebsiteCard/>
                </div>
            </div>
            <div className="websiteInformationContainer">
                info
            </div>
        </div>
    )
}

export default Websites
