
import { Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React from 'react'
import {Link} from 'react-router-dom';
import './styles.css'

function FABPin() {
    const style = {
        margin: 0,
        top: 'auto',
        right: '2rem',
        bottom: '2rem',
        left: 'auto',
        position: 'fixed',
        outline:'none',
        backgroundColor:'black',
        color:'white',
     
    };

    return (
        
           <div>
               <Link to="/articleitem">
               <Fab style={style}>
                <Add />
          </Fab>
               </Link>
         
          </div>
      
           
      
    )
}

export default FABPin
