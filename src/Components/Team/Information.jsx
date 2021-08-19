import React from 'react';
import style from './style/style.module.css'


const Information =()=>{
    return(
        <React.Fragment>
            <div className={style.aboutInfo} >
                <div className={style.teamName} >
                    <h1>Creamzo</h1>
                </div>
                <div className={style.introduction}>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fugit.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est porro iure, ipsam necessitatibus autem recusandae esse dolore ea laboriosam veritatis! Autem quasi repudiandae voluptatem vitae.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Information;