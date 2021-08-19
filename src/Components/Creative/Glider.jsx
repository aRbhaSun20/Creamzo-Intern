import React from "react";
import style from './style/Creativestyle.module.css'
import i from './assets/img1.webp'
const Glider = () => {
	return (
		<React.Fragment>
			<div className={style.CreativeCarousalContainer}>
				<div >

					<div className={style.imageCOrousalCOnatiner1} style={{ display: "flex" }} >

						<img className={style.corousalImageCreative} src={i} alt="" />
						<img className={style.corousalImageCreative} src={i} alt="" />
						<img className={style.corousalImageCreative} src={i} alt="" />
						<img className={style.corousalImageCreative} src={i} alt="" />
						<img className={style.corousalImageCreative} src={i} alt="" />
						<img className={style.corousalImageCreative} src={i} alt="" />


					</div>
					
				</div>
			</div>
		</React.Fragment>
	);
};

export default Glider;
