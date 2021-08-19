import React from 'react';
import { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import style from './style/style.module.css'
import {TeamContext} from '../../Context/team';
const Team = ({ team, members }) => {
	const value = useContext(TeamContext);
	// eslint-disable-next-line
	
	return (
		<div>
			<div className={style.team}>
				<h1 style={{ color: "white" }}>{team} Team </h1>
			</div>
			<div className={style.DetailContainer}>
				<Grid className={style.gridContainer} container spacing={2}>
					{members.map((name, index) => (
						<Grid key={index} item xs={3}>
							<div className={style.memberCard}>
								<div style={{width:"50%"}}>
									<img
										className={style.memberImage}
										src={index%2===0?value[1]: value[0]}
										alt="member"
									/>
								</div>
								<div style={{ width: "50%" }} className={style.details}>
									<h1 style={{color:"white"}}>name</h1>
									<p>role here</p>
								</div>
							</div>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default Team;