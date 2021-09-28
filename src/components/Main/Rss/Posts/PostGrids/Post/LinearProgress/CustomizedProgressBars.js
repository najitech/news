import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import './CustomizedProgressBars.css';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 7,
    margin:"10px 20px",
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'red',
  },
}))(LinearProgress);

const BorderLinearProgress2 = withStyles((theme) => ({
  root: {
    height: 7,
    margin:"10px 20px",
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'green',
  },
}))(LinearProgress);
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomizedProgressBars(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.barValue > 50 ? <BorderLinearProgress2 className="customProg" variant="determinate" value={props.barValue} /> : 
      <BorderLinearProgress className="customProg" variant="determinate" value={props.barValue} />}
      
    </div>
  );
}
