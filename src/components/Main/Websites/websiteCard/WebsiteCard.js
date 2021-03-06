import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {FiCalendar} from 'react-icons/fi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import './WebsiteCard.css';
import Chart from "react-apexcharts";
import '../../../../UI/Styles.css';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function WebsiteCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [chart , setChart] = React.useState({
    series1: [{
    data: props.chart_data
  }],
  options1: {
    chart: {
      type: 'line',
      width: 100,
      height: 35,
      sparkline: {
        enabled: true
      },
    },
    
  fill: {
    colors:[props.color]
  }
  },
});
 const [chartCircle , setChartCircle] = React.useState({series3: [53, 67],
  options3: {
    chart: {
      type: 'radialBar',
      width: 40,
      height: 40,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },}
  });
  const [chartCircle2 , setChartCircle2] = React.useState({     
    series: [{
      name: 'Sales',
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }],
    options: {
      fill: {
        colors: ['#764ee3']
      },    

      grid: {
        show: true,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: false
            }
        },   
        yaxis: {
            lines: {
                show: false
            }
        },  
        row: {
            colors: undefined,
            opacity: 0.1
        },  
        column: {
            colors: undefined,
            opacity: 0.1
        },  
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, 
      },
      chart: {
        height: 350,
        type: 'line',
        sparkline: {
            enabled: true
          }
      },
      stroke: {
        width: 2,
        curve: 'smooth',
        show: true,
        curve: 'smooth',
        colors: ["#764ee3"],
        width: 2,
        dashArray: 0,      
      },
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
        tickAmount: 10,
      },
    },
});

  return (
    <Card onClick={()=>{props.open(props.title)}} className={[classes.root , 'websiteCardRss',props.active?'activateCardWebsite':'' , 'noselect']}>
      
      <div className="cardHeaderWebsite">
            <Avatar src={props.image} className="avatarWebsite">R</Avatar>
            <p>{props.title}</p>
      </div>
      <CardContent>
        <div className="WebsiteCard_dateAndData">
          <Typography variant="body2" color="textSecondary" className="typographyWebsiteCard" component="p">
              <div className="lastPostDateWebsite">
                  <FiCalendar className="WebsiteCard_icons" />
                  &nbsp;
                  <span className="WebsiteCard_iconContent">{props.publish_date}</span>
              </div>
              <div className="locationWebsiteCard">
                  <HiOutlineLocationMarker className="WebsiteCard_icons" />
                  &nbsp;
                  <span className="WebsiteCard_iconContent">{props.location}</span>
              </div>
          </Typography>
          <div className="WebsiteCard_GrowthAndDataContainer">
            <div className="dataCardWebsite">
                <span className="dataCardWebsite_title">???????? ???? ??????</span>
                <span className="dataCardWebsite_number">{props.daily_data}</span>
            </div>
            <div className="WebsitePreview_growth">
                <span className="Growth_title">??????</span>
                <span className="Growth_number">{props.daily_data}</span>
            </div>
          </div>

        </div>
        <Chart className="WebsiteCard_sparkline" options={chartCircle2.options} series={chartCircle2.series} type="area" height="50" width="100%"/>

      </CardContent>
    </Card>
  );
}
