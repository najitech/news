import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './WebsitePreview.css'
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import Chart from "react-apexcharts";



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
        colors: colors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
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
            ['John'],
            ['Joe'],
            ['Jake'],
            ['Amber'],
            ['Peter'],
            ['Joe'],
            ['Jake'],
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

function WebsitePreview() {
    const classes = useStyles();
    return (
        <div className="WebsitePreview">
            <Avatar className="WebsitePreview_avatar"  src="https://upload.wikimedia.org/wikipedia/commons/e/e9/ISNA_logo.jpg" className="WebsitePreview_avatar" >R</Avatar>
            <div className="WebsitePreview_header">
                <h4 className="WebsitePreview_title">خبرگزاری ایسنا</h4>
            </div>
            <Button
                variant="contained"
                color="primary"
                className={[classes.button , "WebsitePreview_button"].join(" ")}

            >
                <div className="WebsitePreview_buttonContent">
                    <RssFeedIcon className="WebsitePreview_buttonIcon" />
                    <p>مشاهده ی اخبار {"ایسنا"}</p>
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
        </div>
    )
}

export default WebsitePreview
