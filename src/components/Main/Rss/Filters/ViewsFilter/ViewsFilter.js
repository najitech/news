import { Slider, TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import React from 'react'
import { AiFillHeart } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';
import './ViewsFilter.css'
const PrettoSlider = withStyles({
    root: {
      color: '#764ee3',
      height: 8,
    },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);  
  const WhitePrettoSlider = withStyles({
    root: {
      color: '#F50057',
      height: 8,
    },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
  const CssTextDarkInput = withStyles({
    root: {
      '& label.Mui-focused': {
          borderColor:'rgba(255, 217, 0, 0.89)',
        color: 'rgba(255, 217, 0, 0.89)',
      },'&:after': {
        borderColor: 'rgba(255, 217, 0, 0.89)',
    },
    borderBottomColor : 'rgba(255, 217, 0, 0.89)',
    '&:not(.Mui-disabled):hover::before': {
        borderColor: 'rgba(255, 217, 0, 0.89)',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'rgba(255, 217, 0, 0.89)',
      },
      color:'red',
    },
  })(TextField);
function ViewsFilter(props) {
const [like, setLike] = React.useState(30);
const [view , setView] =React.useState(50);
const [retweet , setRetweet] = React.useState(10);
  const handleLike = (event, newValue) => {
    setLike(newValue);
  };
  const handleView = (event, newValue) => {
    setView(newValue);
  };
  const handleRetweet = (event, newValue) => {
    setRetweet(newValue);
  };
    return (
        <div className={["viewFilter", props.dark? "darkViewFilter" : 'whiteModeviewFilter'].join(" ")}>
            
            {!props.off ? <div>
            <h6>تعداد لایک :<span>
              <CssTextDarkInput 
                 size="small" 
                 Icon={AiFillHeart}
                 InputProps={{ disableUnderline: true }} 
                  class="inputSlider"
                  variant="outlined"
                  value={like}
                  onChange={(e)=>{handleLike(e.target.value)}}/></span> </h6>
            {props.dark ? <PrettoSlider className="sliderDarkThemFilter" value={like} onChange={handleLike} aria-labelledby="continuous-slider" /> : <WhitePrettoSlider  className="sliderDarkThemFilter" value={like} onChange={handleLike} aria-labelledby="continuous-slider" />}
            </div> : null}
    
            <div className="lastChildSlider">
            <h6>تعداد بازدید :<span><CssTextDarkInput 
                 size="small" 
                 Icon={GrView}
                 InputProps={{ disableUnderline: true }} 
                  class="inputSlider"
                  variant="outlined"
                  value={view}
                  onChange={(e)=>{handleView(e.target.value)}}/></span> </h6>
            {props.dark ? <PrettoSlider className="sliderDarkThemFilter" value={view} onChange={handleView} aria-labelledby="continuous-slider" /> : <WhitePrettoSlider className="sliderDarkThemFilter" value={view} onChange={handleView} aria-labelledby="continuous-slider"/>}
            </div>
            {props.retweet ? <div className="lastChildSlider">
            <h6>تعداد ریتوییت :<span><CssTextDarkInput 
                 size="small" 
                 Icon={GrView}
                 InputProps={{ disableUnderline: true }} 
                  class="inputSlider"
                  variant="outlined"
                  value={retweet}
                  onChange={(e)=>{handleRetweet(e.target.value)}}/></span> </h6>
            {props.dark ? <PrettoSlider className="sliderDarkThemFilter" value={retweet} onChange={handleRetweet} aria-labelledby="continuous-slider" /> : <WhitePrettoSlider  className="sliderDarkThemFilter" value={retweet} onChange={handleRetweet} aria-labelledby="continuous-slider"/> } 
            </div> :null }
        </div>
    )
}

export default ViewsFilter
