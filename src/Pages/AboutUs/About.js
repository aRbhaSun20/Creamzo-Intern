import { Tabs, Tab, Box, Typography } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import AlbumSection from "../../Components/Creative/Glider";
import OverView from "../OverVIew/OverView";
import Team from "../Team/Teams";
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

function About() {
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<React.Fragment>
			<Tabs
				value={value}
				indicatorColor="primary"
				textColor="primary"
				onChange={handleChange}
				style={{ width: "70%", position: "relative", top: "1rem" }}
			>
				<Tab
					label="OverView"
					style={{ outline: "none", fontSize: "12px" }}
					{...a11yProps(0)}
				></Tab>
				<Tab
					label="Team"
					style={{ outline: "none", fontSize: "12px" }}
					{...a11yProps(1)}
				></Tab>
				<Tab
					label="Creative"
					style={{ outline: "none", fontSize: "12px" }}
					{...a11yProps(2)}
				></Tab>
			</Tabs>
			<TabPanel value={value} index={0}>
				<OverView />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Team />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<AlbumSection />
			</TabPanel>
		</React.Fragment>
	);
}

export default About;
