import React from "react";
import Team from "../../Components/Team/Team";
import { Team1 } from "../../Context/team";
import Information from "../../Components/Team/Information";
import style from "../../Components/Team/style/style.module.css";
const Teams = () => {
	// console.log(value);
	let hrTeam = [{ name: "namenamnnkk" }];
	let webTeam = [
		{ name: "namenknkjkjnNAMNKJK" },
		{ name: "namennnnnn,,,,,,,,,,,lllllllko" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
	];
	let contentTeam = [
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
	];
	let graphicTeam = [
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
		{ name: "name" },
	];
	return (
		<React.Fragment>
				<Team1>
			<div style={{ backgroundColor: "black", color: "white" }}>

					<div className={style.container}>
						<Information />
						<Team team="HR" members={hrTeam} />
						<Team team="Content Writing" members={contentTeam} />
						<Team team="Web Development" members={webTeam} />
						<Team team="Graphic" members={graphicTeam} />
					</div>
			</div>
				</Team1>
		</React.Fragment>
	);
};

export default Teams;
