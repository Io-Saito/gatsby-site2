import React from 'react';
import Grid from "@material-ui/core/Grid"

const headingStyle={
  fontSize:35,
  Margin:"40px"
}

const Heading = (props) =>{
    return(
    <div id={props.section} style={headingStyle}>
      <Grid container xs={12} spacing={1} class={props.section}>
        <Grid container justify="center"  alignItems="center">
        {props.icon}
        <h2 className={headingStyle}>{props.title}</h2>
        </Grid>
      </Grid>
    </div>
    )}
export default Heading;