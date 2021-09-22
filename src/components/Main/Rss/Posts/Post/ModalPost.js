import React , {useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './ModalPost.css';
import Chart from 'react-apexcharts';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      height : '100%',
      borderRadius : 5,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding :5,
    },
  }),
);

export default function ModalPost(props) {
  const classes = useStyles();
  const {PostProps} = props ;
  console.log(PostProps)
  const [chart , setChart] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });
  const [donChart , setdonChart] = useState({
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E']
  });
  return (
    <div className="ModalPost">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal ,"ModalPost2" }
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableEnforceFocus
      >
        <Fade in={props.open}>
          <div className={[classes.paper ,'modalBase'].join(" ")}> 
              <div className="graphsRss">
                <div className="categoriesChart">
                    <Chart
                    options={chart.options}
                    series={chart.series}
                    type="bar"
                  />
                </div>
                <div className="PieChartRss">
                  <Chart
                      options={donChart.options}
                      series={donChart.series}
                      type="donut"
                      height="200px"
                    />
                </div>
              </div>
              <div className="PostContentRss">
                <div className="PostImage">
                  <img width="100%" src={props.image} alt={props.title}/>
                  <div className="tites">
                    <p className="publishDatePost">{(props.publish_date)} </p>
                    <h3>{props.title}</h3>
                  </div>
                </div>
                <div className="postContent">
                  <p>
                    {props.text}
                  </p>
                <div className="hashtags"></div>
                <div className="keywords"></div>
                <div className=""></div>
              </div>
              </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}