import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ParagraphMaker from "../functions/ParagraphMaker"


const CardStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    Width: "150%",
    minWidth : 300
  },
  media: {
    height: 194,
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
  }
}));


const CardUI= (props)=> {
  const classes = CardStyle;
  const [expanded, setExpanded] = React.useState(false);
  console.log(props.img)
  const handleExpandClick = () =>{
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title= {props.title}
        subheader={props.date}
      />
      <CardMedia
        className={classes.media}>
      <img src={props.img} alt={props.title} />
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.tools}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>リンク</Typography>
          <a href={props.href}>{props.href}</a>
          <Typography paragraph>説明</Typography>
          {ParagraphMaker(props.paragraphs)}
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default CardUI