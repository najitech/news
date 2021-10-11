import { FormControl, InputLabel, Select } from '@material-ui/core';
import { MenuItem } from 'material-ui';
import React from 'react';
import WebsiteCard from './websiteCard/WebsiteCard';
import WebsitePreview from './WebsitePreview/WebsitePreview';
import './Websites.css';
const data= [
    {
        title:'ایسنا',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ISNA_logo.jpg/250px-ISNA_logo.jpg',
        publish_date : '25 اسفند 99',
        daily_data : '11.546k',
        location : 'تهران',
        color : 'rgb(238, 6, 6)',
        chart_data : [45,76,12,30,12,43,60,17,80,21]
    },
    {
        title:'مشرق نیوز',
        image: 'https://yektalink.com/wp-content/uploads/2019/05/mashreghnews-logo.jpg',
        publish_date : '29 اسفند 99',
        daily_data : '131.56k',
        location : 'تهران',
        color : 'rgb(58, 216, 19)',
        chart_data : [20,45,32,56,31,76,34,12,87,23]
    },
    {
        title:'خبر آنلاین',
        image: 'https://apprecs.org/ios/images/app-icons/256/37/841251639.jpg',
        publish_date : '5 بهمن 99',
        daily_data : '70.834k',
        location : 'تهران',
        color : 'rgb(19, 144, 216)',
        chart_data : [80,23,56,87,23,86,65,76,90,14]
    },
    {
        title:'ایرنا',
        image: 'data:image/png;base64,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',
        publish_date : '18 مهر 1400',
        daily_data : '765.12k',
        location : 'تهران',
        color : 'rgb(216, 19, 200)',
        chart_data : [10,87,43,43,24,65,12,46,18,99]
    },
    {
        title:'تسنیم',
        image:'https://upload.wikimedia.org/wikipedia/commons/3/35/Tasnim_News_Agency_logo_2color_rounded_square.png',
        publish_date : '12 دی 99',
        daily_data : '692.43k',
        location : 'تهران',
        color : 'rgb(216, 203, 19)',
        chart_data : [45,55,21,80,67,31,80,87,32,12],
        active: true,
    },
    {
        title:'شهر خبر',
        image:'https://www.shahrekhabar.com/statics/images/logo.png',
        publish_date : '29 شهریور 1400',
        daily_data : '1.4m',
        location : 'تهران',
        color : 'rgb(19, 216, 167)',
        chart_data : [80,34,110,43,90,9,83,77,31,40]
    },
    {
        title:'فارس نیوز',
        image : "https://www.farsnews.ir/images/farsnewslogo.jpg",
        publish_date:  "7 مرداد 1400",
        daily_data : '603.21k',
        locatio : 'تهران', 
        color : 'rgb(157, 216, 19)',
        chart_data:[34,65,17,94,13,65,15,67,43,12]
    },
    {
        title:'خبرگزاری مهر',
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mehrnews_Logo.svg/1200px-Mehrnews_Logo.svg.png',
        publish_date : '8 شهریور 1400',
        daily_data : '592.41k',
        color : 'rgb(183, 19, 216)',
        location : 'مشهد',
        chart_data : [43,76,18,53,94,15,84,23,64,44]  
    }
]
function Websites(props) {
    const [sort, setSort] = React.useState('');

    const handleChange = (event) => {
      setSort(event.target.value);
    };
    return (
        <div className="websites">
            <div className="websiteInformationContainer">
                <WebsitePreview/>
            </div>
            <div className="websitesContainer">
                <div className="gridWebsites">
                    {data.map(item=>{
                        return <WebsiteCard title={item.title}
                                            color={item.color}
                                            image={item.image}
                                            publish_date={item.publish_date}
                                            location={item.location}
                                            daily_data={item.daily_data}
                                            chart_data={item.chart_data}
                                            active={item.active}/>
                    })}
                </div>
            </div>

        </div>
    )
}

export default Websites
