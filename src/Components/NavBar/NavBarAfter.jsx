import {
	Avatar,
	Button,
	IconButton,
	InputAdornment,
	Modal,
	OutlinedInput,
	Paper,
	Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./style/style.css";
import { LoginContext, LOGIN_ACTIONS } from "../../Context/Login";
import { NotificationsActive, Search } from "@material-ui/icons";

const NavBar = () => {
	// eslint-disable-next-line
	const [login, setLogin] = useContext(LoginContext);

	const [notifyOpen, setnotifyOpen] = React.useState(false);

	const handlenotifyClose = () => {
		setnotifyOpen(false);
	};
	return (
		<React.Fragment>
			<div className="navbar">
				<NavLink activeClassName="activeLink" to="/" exact>
					<Typography variant="h4" style={{ fontWeight: "bold" }}>
						Logo
					</Typography>
				</NavLink>
				<NavLink activeClassName="activeLink" to="/" exact>
					<div
						style={{
							fontWeight: "bolder",
							width: "8em",
							height: "3em",
							borderRadius: "1.5em",
							outline: "none",
							position: "relative",
							left: "1em",
							top: "1em",
							fontSize: "1.2rem",
							textDecoration: "none",
						}}
					>
						Home
					</div>
				</NavLink>
				<div className="remaining-navs" style={{ width: "87%" }}>
					<OutlinedInput
						id="outlined-basic"
						placeholder="Search..."
						style={{
							width: "78vw",
							position: "relative",
							top: ".3em",
							left: "-2em",
							height: "3em",
							borderRadius: "2em",
							outline: "none",
							border: "1px solid grey",
							paddingLeft: "1em",
						}}
						startAdornment={
							<InputAdornment position="start">
								<Search style={{ height: "1em" }} />
							</InputAdornment>
						}
						variant="outlined"
					/>
					<IconButton
						style={{
							outline: "none",
							position: "relative",
							left: "0em",
							paddingTop: "1em",
						}}
						onClick={() => {
							setnotifyOpen(!notifyOpen);
						}}
					>
						<NotificationsActive style={{ fontSize: "2rem", color: "grey" }} />
					</IconButton>
					<Modal
						open={notifyOpen}
						onClose={handlenotifyClose}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						style={{
							width: "100%",
							height: "100%",
							display: "flex",
							justifyContent: "flex-end",
							alignItems: "center",
							marginRight: "2em",
						}}
					>
						<Paper
							elevation={3}
							style={{
								width: "22vw",
								height: "85vh",
								maxHeight: "85vh",
								marginRight: "12em",
								marginTop: "1em",
								display: "grid",
								justifyContent: "space-evenly",
								flexDirection: "column",
								alignItems: "center",
								gridTemplateRows: "1.2fr 10fr",
								borderRadius: "2em",
							}}
						>
							<Typography
								style={{
									fontSize: "1.4rem",
									width: "25vw",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								Updates
							</Typography>
						</Paper>
					</Modal>
					<Button
						style={{
							fontWeight: "bold",
							height: "3em",
							width: "8em",
							borderRadius: "1.5em",
							paddingTop: "1em",
						}}
						onClick={() => {
							setLogin({ type: LOGIN_ACTIONS.LOGOUT });
						}}
					>
						<Avatar alt="Remy Sharp" src="" />
					</Button>
					{/* <Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
								eget.
							</Typography>
						</AccordionDetails>
					</Accordion> */}
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
