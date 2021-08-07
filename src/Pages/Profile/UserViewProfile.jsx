import React from "react";
import style from './style/style.module.css'
import CoverProfile from "../../Components/Profile/CoverProfileImage";
import Details from "../../Components/Profile/Details";
import CollectionsMyuploads from '../../Components/Profile/CollectionsMyuploads'
const UserViewProfile = () => {
    return (
        <React.Fragment>
            <div className={style.container} >
                <CoverProfile />
                <div className={style.details}>
                    <Details />
                </div>
                <div className={style.links}>
                    <CollectionsMyuploads />
                </div>
            </div>
        </React.Fragment>
    )
}
export default UserViewProfile;