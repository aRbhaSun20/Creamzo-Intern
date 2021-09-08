import React from "react";
import style from "./style/style.module.css"

const Details = ()=>{
   return(
       <div className={style.information} >
               <h1 style={{textTransform:"capitalize"}}>user name</h1>
               <p> 100 followers . 20 following </p>
       </div>
   );
}
export default Details