import React from 'react';
import Grid from '@material-ui/core/Grid';
import style from './style/style.module.css'
import femaleImage from './assets/silhouette-woman-4-pdv-transparent.png'
const Team = ({ team, members }) => {
    const pictures = [femaleImage, femaleImage, femaleImage, femaleImage, femaleImage, femaleImage, femaleImage, femaleImage, femaleImage, femaleImage, femaleImage, femaleImage]

    return (
        <div  >

            <div className={style.team}>
                <h1>{team} Team </h1>
            </div>
            <div className={style.DetailContainer} >
                <Grid className={style.gridContainer} container spacing={2}>
                    {members.map((name, index) => <Grid key={index} item xs={3}>
                        <div className={style.memberCard}>
                            <div>
                                <img className={style.memberImage} src={femaleImage} alt="member image" />
                            </div>
                            <div className={style.details}>
                                <h1>{name.name}</h1>
                                <p>role here</p>
                            </div>
                        </div>
                    </Grid>
                    )}


                </Grid>

            </div>
        </div>
    )
}

export default Team;