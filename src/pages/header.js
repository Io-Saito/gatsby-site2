import * as React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CustomizedTabs from "../components/NavBar"
import { makeStyles } from '@material-ui/core/styles';
// import headerImage from "../images/header.jpg"

var ContentData=[
  
    {"text":"PROFILE","href":"#feather-section"},
    {"text":"WORKS","href":"#work-section"},
    {"text":"SKILLS","href":"#skills-section"},
    {"text":"CAREERS","href":"#carrers-section"},
    {"text":"CONTACT","href":"#contact-section"},
]

var ContentList=[];
for(var i in ContentData){
    ContentList.push(
    <li class="gnav-item">
      <a class="gnav-link" href={ContentData[i].href}>{ContentData[i].text}</a>
      </li>
      );
  }

const useStyles = makeStyles({
  root: {
    backgroundImage:'url(/static/images/Cityscapes.jpg)',
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    // position: "absolute"

  },
  h1:{
    marginTop:45,
    color:"white"
  },
  h4:{
    marginBottom:40,
    color:"white"
  },
  h1Mobile:{
    marginTop:45,
    color:"white",
    fontSize:40
  },
  h4Mobile:{
    marginBottom:40,
    color:"white",
    fontSize:20
  }
});



const HeaderPage = () => {
  var classes = useStyles();
  var Width = window.innerWidth
  var classH1;
  var classH4;
  if(Width >600){
    classH1 =classes.h1
    classH4=classes.h4
  }else{
    classH1 =classes.h1Mobile
    classH4=classes.h4Mobile
  }
  return (
  <div id="header-section"  className={classes.root}>
        <Grid container xs={12} spacing={1} justify="center"  id="header-section" >
          <Grid container justify="center" direction="column" alignItems="center" >
            <Typography variant="h1" className={classH1}>MY PORTFOLIO</Typography>
            <Typography variant="h4" className={classH4}>by Iorin</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1} class="nav-bar"  justify="center">
          <Grid item xs={12}>
            {CustomizedTabs(ContentData)}
          </Grid>
        </Grid>
    </div>)}
export default HeaderPage;