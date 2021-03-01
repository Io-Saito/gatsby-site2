import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import RaderChart from './RaderChart';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    paddingBottom:5,
    Margin:200
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  h3:{
    marginTop:5,
    marginBottom:20,
    fontSize:25,
  },
  Radar:{
    minWidth:100
  }
});

const SkillCard=(props)=> {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justify="center" >
              <h3 className={classes.h3}>{props.Title}</h3>
            </Grid>
        <Grid container justify="space-around" spacing={1}>
            <Grid item className={classes.Radar}>
            {RaderChart(props.Rader)}
          </Grid>
          <Grid item sm={6}>
            <Typography paragraph>{props.Paragraph}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
export default SkillCard;