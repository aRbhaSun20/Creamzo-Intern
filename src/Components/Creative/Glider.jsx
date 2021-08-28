import React from "react";
import style from './style/Creativestyle.module.css'
// import { Slide } from "react-slideshow-image";
import Carousel from "./Carousel.jsx";

function importAll(r){
    return r.keys().map(r);
}
const images=importAll(require.context('./assets/',false,/\.(png|jpe?g|svg|jpg)$/));


// const style
const Glider = () => {
	console.log(images[1]);
    // images.map(image => {
    //     <div>
    //         <div style={{padding: 8}}>
    //             <img src={image} alt="placeholder" style={{width: '100%'}} />
    //         </div>
    //     </div>
    // })
	return(
		<React.Fragment>
			<Carousel show={3}>
                {
                    images.map(image =>
                        <div>
                            <div style={{padding: 8}} className={style.imageContainer}>
                                <img src={image.default} alt="placeholder" style={{width: '100%',height:"370px"}} className={style.creativeImage} />
                                <div className={style.creativeName}>
                                    Name
                                </div>
                            </div>
                            
                        </div>
                    )
                }
                {/*<div>
                    <div style={{padding: 8}}>
                        <img src={i} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={i} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={i} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={i} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={i} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={i} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={i} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={i} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>*/}
            </Carousel>
			{/*<div className={style.CreativeCarousalContainer}>
				<div>

					<div className={style.imageCOrousalCOnatiner1} style={{ display: "flex" }} >

						<img className={style.corousalImageCreative} src={i} alt="" />
						<img className={style.corousalImageCreative} src={i} alt="" />
						<img className={style.corousalImageCreative} src={i} alt="" />
						<img className={style.corousalImageCreative} src={i} alt="" />
						<img className={style.corousalImageCreative} src={i} alt="" />
						<img className={style.corousalImageCreative} src={i} alt="" />

					</div>
					
				</div>
			</div>*/}
		</React.Fragment>
	);
};

export default Glider;
