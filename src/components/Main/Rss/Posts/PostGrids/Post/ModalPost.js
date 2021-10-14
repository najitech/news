import React , {useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './ModalPost.css';
import Chart from 'react-apexcharts';

import WordCloud from 'react-d3-cloud';
import PostTag from '../../../../../../UI/Tag';
import Hashtag from '../../../../../../UI/Hashtag';
import CustomizedProgressBars from './LinearProgress/CustomizedProgressBars'
import { BiCurrentLocation, BiTimeFive } from 'react-icons/bi';
import { BsFillPeopleFill } from 'react-icons/bs';
import Hashtag2 from '../../../../../../UI/Hashtag2';
import { MdWeb } from 'react-icons/md';
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
const data = [
  { text: 'افغانستان', value: 1000 },
  { text: 'طالبان', value: 200 },
  { text: 'خبر', value: 800 },
  { text: 'دولت', value: 1000000 },
  { text: 'مستقل', value: 10 },
  { text: 'کشور', value: 10 },
  { text: 'تروریسم', value: 70 },
  { text: 'ستیزه', value: 10 },
  { text: 'ترکمنستان', value: 30 },
  { text: 'دفاع', value: 20 },
  { text: 'زیرزمینی', value: 10 },
  { text: 'دفاع', value: 20 },
  { text: 'تسلیحات', value: 10 },
  { text: 'سطح', value: 20 },
  { text: 'سیاسی', value: 50},
  { text: 'قطعنامه‌', value: 30 },
  { text: 'انتقال', value: 10 },
  { text: 'المنافع', value: 20 },
  { text: 'شیعه', value: 10 },
  { text: 'طالبان', value: 20 },
  { text: 'مبارزه', value: 10 },
  { text: 'رئیس', value: 40 },
];
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
      fill: {
        colors: ['#764ee3']
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
                 <WordCloud
                    data={data}
                    width={200}
                    height={105}
                    font="shabnam"
                    fontWeight="bold"
                    fontSize={(word) => Math.log2(word.value)*1.3}
                    spiral="rectangular"
                    padding={4}
                    random={Math.random}
                    rotate={(word) => 0}
                    onWordClick={(event, d) => {
                      console.log(`onWordClick: ${d.text}`);
                    }}
                    onWordMouseOver={(event, d) => {
                      console.log(`onWordMouseOver: ${d.text}`);
                    }}
                    onWordMouseOut={(event, d) => {
                      console.log(`onWordMouseOut: ${d.text}`);
                    }}
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
                      <div className="Modal_website_Rss">  
                        <MdWeb/>
                        <p>خبرگزاری تسنیم</p>
                      </div>
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
                    <PostTag text="موضوعات :"  fontSize="13px" padding="0px" backGroundColor="white" color="black" marginP="0px" paddingP="0px"/>
                    <PostTag text="اقتصادی" color="#56bcdb" fontSize="11px" padding="5px" backGroundColor ="#ebf4f9"/>
                    <PostTag text="حوادث"  color="#56db82" fontSize="11px" padding="5px" backGroundColor="#ebf9ec"/>
                    <PostTag text="نظامی"  color="#db5656" fontSize="11px" padding="5px" backGroundColor="#f9ebeb"/>
                    <PostTag text="جنگ" color="#dbb156" fontSize="11px" padding="5px" backGroundColor="#f9f3eb"/>
                    <PostTag text="فرهنگی" color="#7556DB" fontSize="11px" padding="5px"  backGroundColor="#EFEBF9"/>
                    <PostTag text="ورزشی" color="#56db82" fontSize="11px" padding="5px"  backGroundColor="#ebf9ec"/>
                    <PostTag text="علمی" color="#db56af" fontSize="11px" padding="5px"  backGroundColor="#f9ebf3"/>
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