import React from "react";
import style from './style/style.module.css'
import CoverProfile from "../../Components/Profile/CoverProfileImage";
import Details from "../../Components/Profile/Details";
import CollectionsCreated from '../../Components/Profile/CollectionsCreated'
const PublicViewProfile = () => {
    return (
        <React.Fragment>
            <div className={style.container} >
                <CoverProfile />
                <div className={style.details}>
                    <Details />
                </div>
                <div className={style.followBtnContainer}>
                    <button className={style.followbtn}>Follow</button>
                </div>
                <div className={style.links}>
                    <CollectionsCreated />
                </div>
               
            </div>
        </React.Fragment>
    )
}
export default PublicViewProfile;