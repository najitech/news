import React , {useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './ModalPost.css';
import Chart from 'react-apexcharts';
import PostTag from '../../../../../../UI/Tag';
import Hashtag from '../../../../../../UI/Hashtag';
import CustomizedProgressBars from './LinearProgress/CustomizedProgressBars'
import { BiCurrentLocation, BiTimeFive } from 'react-icons/bi';
import { BsFillPeopleFill } from 'react-icons/bs';
import Hashtag2 from '../../../../../../UI/Hashtag2';
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
    },
  }),
);

export default function ModalPost(props) {
  const classes = useStyles();
  const {PostProps} = props ;
  const [chart , setChart] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar : {
            show : false,
        },
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
  return (
    <div className="ModalPost">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={[classes.modal ,"ModalPost2"].join(" ")}
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
                      options={distributedChart.options}
                      series={distributedChart.series}
                      type="treemap"
                      width="104%"
                      height="240px"
                      className="ChartStyleClassRssModal"
                    />
                </div>
                <div>
                </div>
                <div className="PieChartRss">
                  <Chart
                      options={donChart.options}
                      series={donChart.series}
                      type="donut"  
                      width="350px"
                      height="auto"
                    />
                  <Chart
                    options={chart.options}
                    series={chart.series}
                    type="bar"
                    height="250px"
                  />
                </div>
                <div className="NER_tags">
                      <div className="NER_location">
                        <span className="NER_title_head">:مکان
                        <BiCurrentLocation className="NER_iconsmodal" /> </span>
                        <span>
                          مشهد ، تهران ، تبریز ، اصفهان ، شیراز
                          </span>
                      </div>
                      <div className="NER_people">
                        
                      <span className="NER_title_head">:اشخاص
                      <BsFillPeopleFill className="NER_iconsmodal"/></span>
                      <span>
                          روحانی ، رئیس جمهور ، سرباز ، رهبر 
                          </span>
                      </div>
                      <div className="NER_time">
                      <span className="NER_title_head">:زمان
                      <BiTimeFive className="NER_iconsmodal"/></span>
                      <span>
                           هفته ناجا، روز معلم ، شهریور 
                          </span>
                      </div>
                  </div>
              </div>
              <div className="PostContentRss">
                <div className="postContent">
                  <div className="PostImage">
                    <img width="100%" src={props.image} alt={props.title}/>
                    <div className="tites">
                      <p className="publishDatePost">تاریخ انتشار : {(props.publish_date)} </p>
                      <h3>{props.title}</h3>
                    </div>
                  </div> 
                  <div className="textAreaRss">  
                    <p className="textRssPost">
                      {props.text}
                    </p>
                  </div>
                </div>
                <div className="postRssFooter">
                  <CustomizedProgressBars barValue={70}/>
                  <div className="hashtags">
                    <PostTag text="موضوعات :" fontSize="13px" padding="0px" backGroundColor="white" color="black" marginP="0px" paddingP="0px"/>
                    <PostTag text="اقتصادی" fontSize="11px" padding="5px" backGroundColor ="#15AEFA"/>
                    <PostTag text="حوادث"  fontSize="11px" padding="5px" backGroundColor="red"/>
                    <PostTag text="نظامی"  fontSize="11px" padding="5px" backGroundColor="orange"/>
                    <PostTag text="جنگ"  fontSize="11px" padding="5px" backGroundColor="green"/>
                    <PostTag text="فرهنگی" fontSize="11px" padding="5px"  backGroundColor="purple"/>
                    <PostTag text="ورزشی" fontSize="11px" padding="5px"  backGroundColor="brown"/>
                    <PostTag text="علمی" fontSize="11px" padding="5px"  backGroundColor="rgb(145, 135, 53)"/>
                  </div> 
                  <div className="keywords">
                    <PostTag text="کلمات کلیدی :" fontSize="13px" padding="0px" backGroundColor="white" color="black" marginP="0px" paddingP="0px"/>
                    <div className="keywords_tags">
                      <Hashtag/>
                      <Hashtag/>
                      <Hashtag/>
                      <Hashtag/>  
                    </div>  
                  </div>  
                      <div className="Modal_Hashtags2">
                        <Hashtag2/>
                        <Hashtag2/>
                        <Hashtag2/>
                        <Hashtag2/>
                        <Hashtag2/>
                    </div>
                </div>
              </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}