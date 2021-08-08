import React, { useState} from "react";

import { Button} from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import ronaldo from "./assets/ronaldo.jpg";
import "./Pin_details.css"

const Pin_details=()=>{
	

	const [liked,setLiked] = useState("false");

	const handleLike=()=>{
		setLiked(!liked);
	};

	const [imageHeight,setImageHeight]=useState(0);

	const onImageLoad=({target:img})=>{
		setImageHeight(img.offsetHeight);

	};



	  
	
	  

        return(
            <React.Fragment>
				<div className="screen">
				<div className="card">
					<div className="image">
					<img src={ronaldo} alt="Ronaldo" onClick={onImageLoad} />
						</div>
					<div className="text" style={{height:imageHeight}}>
						<Button
							className={!liked ? "liked": "like"}
							color="#21222b"
							size="large"
							startIcon={!liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
							onClick={handleLike}
						/>
					
					
						<Button
							className="share"
							color="#21222b"
							size="large"
							startIcon={<ShareIcon />}
						/>
						<Button
							className="download"
							color="#21222b"
							size="large"
							startIcon={<GetAppIcon />}
						/>
					<div className="Topic">
						Enter the Topic Here
					</div>
					<div className="Author">
						Author
					</div>
					<p className="Matter">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est sit amet facilisis magna etiam. Nam at lectus urna duis convallis convallis tellus id interdum. Turpis massa tincidunt dui ut ornare lectus. Libero id faucibus nisl tincidunt. Nunc id cursus metus aliquam. Tristique senectus et netus et. Orci a scelerisque purus semper eget duis. Dui nunc mattis enim ut. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Nunc non blandit massa enim nec dui nunc mattis. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Id aliquet risus feugiat in ante metus dictum. Mi sit amet mauris commodo.

Purus sit amet volutpat consequat mauris nunc. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Enim sed faucibus turpis in eu mi. Sagittis id consectetur purus ut faucibus. Enim ut tellus elementum sagittis vitae et leo duis. At elementum eu facilisis sed odio. Id aliquet lectus proin nibh nisl condimentum id. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Euismod in pellentesque massa placerat. Sed vulputate odio ut enim blandit volutpat. Aliquam ut porttitor leo a. Quam adipiscing vitae proin sagittis. Ac feugiat sed lectus vestibulum mattis ullamcorper. Tristique senectus et netus et malesuada fames ac.

Leo urna molestie at elementum eu. Nisl purus in mollis nunc sed id. Quam quisque id diam vel quam elementum pulvinar etiam non. Aliquam faucibus purus in massa tempor. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Tortor aliquam nulla facilisi cras fermentum odio. Lorem mollis aliquam ut porttitor leo a. Ullamcorper a lacus vestibulum sed arcu non odio. Libero nunc consequat interdum varius sit amet. Sem integer vitae justo eget magna. Amet nisl suscipit adipiscing bibendum. Et netus et malesuada fames. Eget mi proin sed libero enim sed faucibus turpis.

Amet mattis vulputate enim nulla aliquet porttitor. Duis at tellus at urna condimentum mattis pellentesque id. Porttitor leo a diam sollicitudin tempor id. Nibh sit amet commodo nulla. Amet aliquam id diam maecenas. Risus pretium quam vulputate dignissim. Egestas erat imperdiet sed euismod. Non nisi est sit amet. Enim sit amet venenatis urna cursus eget nunc. Arcu vitae elementum curabitur vitae nunc.

Hac habitasse platea dictumst quisque sagittis purus sit amet. Ut aliquam purus sit amet luctus venenatis lectus. Ut venenatis tellus in metus vulputate eu. Quam vulputate dignissim suspendisse in est ante in nibh. Pharetra et ultrices neque ornare aenean euismod. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Enim lobortis scelerisque fermentum dui faucibus in. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Urna nec tincidunt praesent semper feugiat nibh sed. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Massa tincidunt dui ut ornare lectus. Vulputate eu scelerisque felis imperdiet. Aenean sed adipiscing diam donec adipiscing tristique. At ultrices mi tempus imperdiet nulla malesuada. Est ullamcorper eget nulla facilisi etiam. Sit amet dictum sit amet justo donec enim diam. Convallis a cras semper auctor neque vitae. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Quis vel eros donec ac odio. Eget duis at tellus at urna condimentum mattis pellentesque.

Nibh nisl condimentum id venenatis a condimentum. Turpis nunc eget lorem dolor sed. Amet consectetur adipiscing elit duis. Ac auctor augue mauris augue neque gravida in fermentum et. Sapien eget mi proin sed. Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer enim neque volutpat ac tincidunt vitae. Bibendum enim facilisis gravida neque convallis. Purus non enim praesent elementum facilisis leo. Pretium fusce id velit ut tortor. At varius vel pharetra vel. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Lacus sed viverra tellus in hac.
					</p>
						
					</div>

						
					</div>
				</div>
		</React.Fragment>
        )
    }


export default Pin_details;