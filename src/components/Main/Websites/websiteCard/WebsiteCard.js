import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {FiCalendar} from 'react-icons/fi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import './WebsiteCard.css';
import { CCol, CWidgetDropdown } from '@coreui/react';
import ChartLineSimple from '../../../../views/charts/ChartLineSimple';
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

export default function WebsiteCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <div className="cardHeaderWebsite">
            <Avatar className="avatarWebsite">R</Avatar>
            <h4>عنوان سایت</h4>
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            <div className="lastPostDateWebsite">
                <FiCalendar style={{fontSize:17}}/>
                &nbsp;
                <span>25 اسفند 99</span>
            </div>
            <div className="locationWebsiteCard">
                <HiOutlineLocationMarker style={{fontSize:18}}/>
                &nbsp;
                <span>تهران</span>
            </div>
        </Typography>
        <div className="websiteCardFooter">
            
            <CWidgetDropdown
                    className="websiteCardChart"
                    footerSlot={
                        <ChartLineSimple
                        pointed
                        className="c-chart-wrapper mt-3 mx-3"
                        dataPoints={[65, 59, 84, 84, 51, 55, 40]}
                        label="Members"
                        pointHoverBackgroundColor="primary"
                        borderColor="primary"
                        labels="months"
                        />
                    }
                    >
                    </CWidgetDropdown>
                    <div></div>
        </div>
      </CardContent>
    </Card>
  );
}
