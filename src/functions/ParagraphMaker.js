import React from 'react';
import Typography from '@material-ui/core/Typography';

const ParagraphMaker = (props)=>{
  var paragraphlist=[]
  for(var i in props){
    paragraphlist.push(<Typography paragraph>{props[i]}</Typography>)
  }
  return(
    paragraphlist
  )
}
export default ParagraphMaker