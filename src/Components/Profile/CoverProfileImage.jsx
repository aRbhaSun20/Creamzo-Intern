import React from "react";
import style from "./style/style.module.css"
import coverImage from './assets/cover.png'
import profile from './assets/profile.png'
const CoverProfile =()=>{
    return (
        <React.Fragment>
            <div className={style.images} >
             <img className={style.cover} src={coverImage} alt="cover " />
             <div className={style.profile}>
                 <img className={style.profileImage} src={profile} alt="" />
             </div>
            </div>
        </React.Fragment>
    )
}
export default CoverProfile;