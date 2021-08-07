import { Paper, Tabs ,Tab} from "@material-ui/core";
import React from "react";
import OverView from "../../Components/OverView/OverView";

function About() {
	const [value, setValue] = React.useState(2);

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
					aria-label="disabled tabs example"
				>
					<Tab label="OverView"><OverView /></Tab>
					<Tab label="Team"></Tab>
					<Tab label="Creative"></Tab>
				</Tabs>
			
		</React.Fragment>
	);
}

export default About;
