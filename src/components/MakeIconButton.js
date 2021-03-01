import React from 'react';
import IconButton from '@material-ui/core/IconButton';


const MakeIconButton=(props)=>{
        return(
            <IconButton 
          key={props.key}
          href={props.href}>
          {props.icon}
        </IconButton>
        )
            }
export default MakeIconButton;