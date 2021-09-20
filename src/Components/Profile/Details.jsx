import React from "react";
import style from "./style/style.module.css";

const Details = () => {
	const user = JSON.parse(sessionStorage.getItem("creamzoUser"));

	return (
		<div className={style.information}>
			<h1
				style={{ textTransform: "capitalize" }}
			>{`${user.fname} ${user.lname}`}</h1>
			<div>
				<p className={style.publicf}>{`${user.followers.length} followers`} </p>
				<p className={style.publicf}>{`${user.following.length} following`} </p>
			</div>
		</div>
	);
};
export default Details;
