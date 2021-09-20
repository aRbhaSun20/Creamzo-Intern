import React from 'react';
import style from './style/style.module.css'


const Information =()=>{
    return(
        <React.Fragment>
            <div className={style.aboutInfo} >
                <div className={style.teamName} >
                    <h1 style={{ color: "white" }}>Creamzo</h1>
                </div>
                <div className={style.introduction}>
                    <h2 style={{ color: "white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fugit.</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est porro iure, ipsam necessitatibus autem recusandae esse dolore ea laboriosam veritatis! Autem quasi repudiandae voluptatem vitae.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Information;