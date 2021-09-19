import React from 'react';
import './style/style.css'
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Appbar=(props)=>{
	// console.log(props.status);
	if(props.status){
	return(
		<div className="AppbarContainer">
			<NavLink activeClassName="activeLink" to="/about" className="appbar">
				<Typography>
					About
				</Typography>
			</NavLink>
			<NavLink activeClassName="activeLink" to="/blog" className="appbar">
				<Typography >
					Blog
				</Typography>
			</NavLink>
			<NavLink activeClassName="activeLink" to="/discover" className="appbar">
				<Typography >
					Discover
				</Typography>
			</NavLink>
		</div>
	)
	}
	return(
		<span style={{display:"none"}}></span>
	)
}

export default Appbar;