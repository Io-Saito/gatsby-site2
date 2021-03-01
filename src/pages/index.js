import * as React from "react";
import Container from "@material-ui/core/Container";
import FeatherPage from './feathers';
import HeaderPage from './header';
import WorksPage from './works'
import CarrerPage from './carrers'
import SkillPage from './skills'
import Contact from './contact' 
import Heading from '../components/heading'
import CodeIcon from '@material-ui/icons/Code';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import WebIcon from '@material-ui/icons/Web';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import ContactsIcon from '@material-ui/icons/Contacts';
import "@fontsource/quicksand";

const headings=[
  {section:"feather-section",title:"PROFILE",icon:<PersonOutlineIcon style={{ fontSize: 40 }}/>},
  {section:"work-section",title:"WORK",icon:<WebIcon style={{ fontSize: 40 }}/>},
  {section:"skills-section",title:"SKILL",icon:<CodeIcon style={{ fontSize: 40 }}/>},
  {section:"carrers-section",title:"CARRER",icon:<WorkOutlineIcon style={{ fontSize: 40 }}/>},
  {section:"contact-section",title:"CONTACT",icon:<ContactsIcon style={{ fontSize: 40 }}/>}
  ,]
// styles

const pageStyles = {
  color: "#232129",
  backgroundColor: "#f0f0f0",
  paddingRight: "40px",
  paddingLeft: "40px",
  fontFamily: 'quicksand'
}

const pageStylesMobile={
  color: "#232129",
  backgroundColor: "#f0f0f0",
  Width: "90%",
  paddingRight: "5px",
  paddingLeft: "5px",
  fontFamily: 'quicksand'
}  

// markup
const IndexPage = () => {
  var Style={}
  var Width = typeof window !== `undefined` ? require(window.innerWidth) : null
    console.log(Width)
      if(Width<600){
      Style=pageStylesMobile
  }else{
    Style=pageStyles
  }
  return (
     <main style={Style}>
      <Container maxWidth="ms" class="main-container">
        <HeaderPage />
        {Heading(headings[0])}
        <FeatherPage />
        {Heading(headings[1])}
        <WorksPage />
        {Heading(headings[2])}
        <SkillPage />
        {Heading(headings[3])}
        <CarrerPage />
        {Heading(headings[4])}
        <Contact />
      </Container>
      </main>
  )
}
export default IndexPage;
