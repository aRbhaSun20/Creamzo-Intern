import React from "react";
import './style/style.css'
import col1 from './assets/collage1.png';
import col2 from './assets/collage2.png';
import col3 from './assets/collage3.png';
import col4 from './assets/collage4.png';
import col5 from './assets/collage5.png';
import col6 from './assets/collage6.png';
import col7 from './assets/collage7.png';
import col8 from './assets/collage8.png';
import col9 from './assets/collage9.png';
import col10 from './assets/collage10.png';
import col11 from './assets/collage11.png';
import col12 from './assets/collage12.png';
const Carousel = () => {
	
	return (
		<React.Fragment>
			<div className="OverviewCarousalContainer ">
				<div className="imageCOrousalCOnatiner" style={{display:"flex"}} >
					<img  className="corousalImage" src={col1} alt="" />
					<img  className="corousalImage" src={col2} alt="" />
					<img  className="corousalImage" src={col3} alt="" />
					<img  className="corousalImage" src={col4} alt="" />
					<img  className="corousalImage" src={col5} alt="" />
					<img  className="corousalImage" src={col6} alt="" />
					<img  className="corousalImage" src={col7} alt="" />
					<img  className="corousalImage" src={col8} alt="" />
					<img  className="corousalImage" src={col9} alt="" />
					<img  className="corousalImage" src={col10} alt="" />
					<img  className="corousalImage" src={col11} alt="" />
					<img  className="corousalImage" src={col12} alt="" />
					
				</div>
			</div>
		</React.Fragment>
	);
};

export default Carousel;
