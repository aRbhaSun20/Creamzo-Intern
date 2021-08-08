import React from 'react';
import style from './style/MyUploads.module.css'
import Grid from '@material-ui/core/Grid';
import img1 from './assets/img1.webp'
import img2 from './assets/img2.webp'

const MyUploads = () => {
    const pictures = [img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2]
    return (
        <div className={style.container} >
            <div className={style.container}>
                <div className={style.heading} >
                    <h1> Hello Welocome to Uploads</h1>
                </div>
                <div className={style.imageContainer}>

                </div>
            </div>
            <div>
                <Grid className={style.gridContainerUploads} container spacing={3}>
                    {pictures.map((image, index) => <Grid item xs={3}>
                        <img className={style.picture} src={image} alt="image" />

                    </Grid>
                    )}


                </Grid>
            </div>
        </div>
    );
}
export default MyUploads;
