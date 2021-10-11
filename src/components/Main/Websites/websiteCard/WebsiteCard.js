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
      }
    },
  fill: {
  }
  },
});
 const [chartCircle , setChartCircle] = React.useState({series3: [43, 32, 12, 9],
  options3: {
    chart: {
      type: 'pie',
      width: 40,
      height: 40,
      sparkline: {
        enabled: true
      }
    }
  }
  });
  return (
    <Card className={[classes.root , 'websiteCardRss']}>
      <div className="piegraphWebsiteCard">
        <Chart options={chartCircle.options3} series={chartCircle.series3} type="donut" height={65} width={65} />
      </div>
      <div className="cardHeaderWebsite">
            <Avatar src={props.image} className="avatarWebsite">R</Avatar>
            <h4>{props.title}</h4>
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            <div className="lastPostDateWebsite">
                <FiCalendar style={{fontSize:17}}/>
                &nbsp;
                <span>{props.publish_date}</span>
            </div>
            <div className="locationWebsiteCard">
                <HiOutlineLocationMarker style={{fontSize:18}}/>
                &nbsp;
                <span>{props.location}</span>
            </div>
        </Typography>
        <div className="websiteCardFooter">
        <div className="chartCardWebsite">
          <div id="chart-1">
            <Chart options={chart.options1}  series={chart.series1} type="bar" height={60} width={160} />
          </div>
        </div>
        <div className="dataCardWebsite">
            <span>داده در روز</span>
            <br/>
            {props.daily_data}
        </div>
        </div>
      </CardContent>
    </Card>
  );
}
