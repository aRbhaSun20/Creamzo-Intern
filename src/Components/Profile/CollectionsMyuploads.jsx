import React from "react";
import style from "./style/style.module.css"
import { Link } from "react-router-dom";
const CollectionsMyuploads = () => {
    return (
        <div className={style.linksContainer} >
            <Link className={style.link} exact to="/created">Liked</Link>
            <Link className={style.link} exact to="/collections" >Collections</Link>
            <Link className={style.link} exact to="/created">My uploads</Link>
            
        </div>
    )
}
export default CollectionsMyuploads;