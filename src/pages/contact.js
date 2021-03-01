import React from 'react';
import Grid from "@material-ui/core/Grid"
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import MakeIconButton from "../components/MakeIconButton"

const ContactData=[
    {name:"Twitter",href:"https://twitter.com/iorin_love_ML",key:0,icon:<TwitterIcon/>},
    {name:"Facebook",href:"https://www.facebook.com/io.saito",key:1,icon:<FacebookIcon/>},
    {name:"Instagram",href:"https://www.instagram.com/io_ringo_study/",key:2,icon:<InstagramIcon/>},
    {name:"GitHub",href:"https://github.com/Io-Saito",key:3,icon:<GitHubIcon/>},]

const ContactPage = () =>{
    return(
    <div id="work-section">
        <Grid container justify="space-around" >
            {MakeIconButton(ContactData[0])}
            {MakeIconButton(ContactData[1])}
            {MakeIconButton(ContactData[2])}
            {MakeIconButton(ContactData[3])}
        </Grid>
        
    </div>
    )}
        
export default ContactPage;