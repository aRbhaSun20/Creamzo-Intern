import React from "react";
import style from "./style/style.module.css"

const Details = ()=>{
   return(
       <div className={style.information} >
               <h1 style={{textTransform:"capitalize"}}>user name</h1>
               <div>
               <p className={style.publicf}> 100 followers</p><p className={style.publicf}>20 following </p>
               </div>
       </div>
   );
}
export default Details