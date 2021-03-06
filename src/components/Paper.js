import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    fontFamily: 'Open Sans'
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
    marginBottom: 20,
    marginTop: 20,
  },

});

const Papers=(props)=> {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        {props}
      </CardContent>
    </Card>
  );
}
export default Papers;
