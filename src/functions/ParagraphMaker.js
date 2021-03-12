import React from 'react';
import Typography from '@material-ui/core/Typography';

const ParagraphMaker = (props)=>{
  
  
  return(
    <Typography>{props.map((t, i) => {
        return <div key={i}>{t}</div>
    })}</Typography>
  )
}
export default ParagraphMaker