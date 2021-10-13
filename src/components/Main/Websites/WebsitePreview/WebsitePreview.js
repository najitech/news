import React , {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import './WebsitePreview.css'
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import Chart from "react-apexcharts";
import Chart2 from "react-google-charts";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

const colors= ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'];
const state = {
    series: [{
        data: [28, 16, 21, 13, 30,21,5]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
          toolbar: {
            show: false
          },
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '45%',
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        title: {
            text: "تعداد پست ها در هفت روز گذشته",
            align: 'right',
            margin: 10,
            offsetX: -170,
            offsetY:7,
            floating: false,
            style: {
              fontSize:  '12px',
              fontFamily: 'Shabnam',
              color:  '#263238'
            },
        },
        xaxis: {
          categories: [
            ['شنبه'],
            ['یکشنبه'],
            ['دوشنبه'],
            ['سه شنبه'],
            ['چهارشنبه'],
            ['پنج شنبه'],
            ['جمعه'],
           ],
          labels: {
            style: {
              colors: colors,
              fontSize: '9px'
            }
          }
        }
      },
    
    
};




function WebsitePreview(props) {
  const [donChart , setdonChart] = useState({
    options: {
      plotOptions: {
        pie: {
          size: 500
        }
      }
    },
    series: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E']
  });
  const [distributedChart , setDistributed] = useState({
          
    series: [
      {
        data: [
          {
            x: 'طنز',
            y: 218
          },
          {
            x: 'تاریخی',
            y: 149
          },
          {
            x: 'آموزشی',
            y: 184
          },
          {
            x: 'مذهبی',
            y: 55
          },
          {
            x: 'هنری',
            y: 84
          },
          {
            x: 'علمی',
            y: 31
          },
          {
            x: 'طبیعت',
            y: 70
          },
          {
            x: 'حوادث',
            y: 30
          },
          {
            x: 'ورزشی',
            y: 44
          },
          {
            x: 'نظامی',
            y: 68
          },
          {
            x: 'جنگ',
            y: 28
          },
          {
            x: 'سیاسی',
            y: 19
          },
          {
            x: 'اجتماعی',
            y: 29
          }
        ]
      }
    ],
    options: {
      legend: {
        show: false
      },
      chart: {
        toolbar : {
          show : false,
        },
        height: 350,
        type: 'treemap'
      },
      colors: [
        '#3B93A5',
        '#F7B844',
        '#ADD8C7',
        '#EC3C65',
        '#CDD7B6',
        '#C1F666',
        '#D43F97',
        '#1E5D8C',
        '#421243',
        '#7F94B0',
        '#EF6537',
        '#C0ADDB'
      ],
      plotOptions: {
        treemap: {
          distributed: true,
          enableShades: false
        }
      }
    },
  })
    const classes = useStyles();
    return (
        <div className="WebsitePreview">
            <Avatar className="WebsitePreview_avatar"  src={props.image} className="WebsitePreview_avatar" >R</Avatar>
            <div className="WebsitePreview_header">
                <h4 className="WebsitePreview_title"> {props.title}</h4>
            </div>
            <Button
                variant="contained"
                color="primary"
                className={[classes.button , "WebsitePreview_button"].join(" ")}

            >
                <div className="WebsitePreview_buttonContent">
                    <RssFeedIcon className="WebsitePreview_buttonIcon" />
                    <p>مشاهده ی اخبار {props.title}</p>
                </div>
            </Button>
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="320"
                height="170"
                className="WebsitePreview_chart"
            />
            <div className="bin">
              <Chart
                options={donChart.options}
                series={donChart.series}
                type="donut"  
                width="280px"
                height="auto"
              />
            </div>


        </div>
    )
}

export default WebsitePreview
