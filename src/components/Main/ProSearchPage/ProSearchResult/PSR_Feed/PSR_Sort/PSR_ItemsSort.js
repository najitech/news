import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',  
    height : '30px',
    flexWrap: 'wrap',
    marginLeft:3,
    marginRight:3,
    backgroundColor:'red',
  },
  divider: {
    margin: 0,
  },
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    height:'20px',
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
    
  },
}))(ToggleButtonGroup);

export default function PSR_ItemsSort(props) {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const classes = useStyles();

  return (
    <div className="SortItems">
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton className="PSR_ToggleButton" aria-label="left aligned">
            <p>نام</p>
          </ToggleButton>
          <ToggleButton className="PSR_ToggleButton" v aria-label="right aligned">
            <p>جدید ترین</p>
          </ToggleButton>
          <ToggleButton className="PSR_ToggleButton"  va aria-label="centered">
            <p>بیشترین داده</p>
          </ToggleButton>
          <ToggleButton className="PSR_ToggleButton" aria-label="right aligned">
            <p>پربازدیدترین</p>
          </ToggleButton>
        </StyledToggleButtonGroup>
    </div>
  );
}
