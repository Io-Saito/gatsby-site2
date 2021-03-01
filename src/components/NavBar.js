import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid"


const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#0a6788',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(2),
  },
  demo2: {
    backgroundColor: '#0a6788',
  },
}));


const CustomizedTabs= (props) => {
  const classes = useStyles();
  const StyledTabList=[]
    for (var r in props){
        StyledTabList.push(<StyledTab label={props[r].text} href={props[r].href}></StyledTab>)
    }
  return (
      <div className={classes.demo2}>
          <Grid container xs={12} justify="center" >
        <StyledTabs value={props}  aria-label="styled tabs example">
          {StyledTabList}
        </StyledTabs>
        <Typography className={classes.padding} />
        </Grid>
      </div>
  );
}
export default CustomizedTabs;