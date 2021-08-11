import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import picture from "./assets/cover.png"
import styles from "./style/collectionStyle.module.css"
import Glide from "@glidejs/glide";

const Collection = () => {
    let arr = [picture, picture, picture, picture, picture, picture, picture, picture, picture, picture]
    return (
        <React.Fragment>
            <div className={styles.Container} >
                <div className={styles.CollectionHeading}>
                    <h1>My Collections</h1>
                </div>
                <div id={styles.CollectionPictures}>
                    <Grid id={styles.CollectionGridContainer} container spacing={0}>
                        {arr.map((image, index) => <Grid className={styles.CollectionImageContainer} id="grid-item" item xs={2}>
                            <img id={styles.CollectionImage} src={image} alt="discover" />
                        </Grid>
                        )}


                    </Grid>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Collection;