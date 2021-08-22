import {
  Avatar,
  IconButton,
  Input,
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
					<Typography variant="h5" style={{ fontWeight: "bold" }}>
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
							fontSize: ".9rem",
							textDecoration: "none",
						}}
					>
						Home
					</div>
				</NavLink>
				<div className="remaining-navs" style={{ width: "80%" }}>
					<Input
						id="outlined-basic"
						placeholder="Search..."
						style={{
							width: "70vw",
							position: "relative",
							top: ".3em",
							left: "-2em",
							height: "2.5em",
							borderRadius: "2em",
							outline: "none",
							paddingLeft: "1em",
							borderBottom: "none",
							backgroundColor: "#dbdbdb",
						}}
						startAdornment={
							<InputAdornment position="start">
								<Search style={{ height: ".7em" }} />
							</InputAdornment>
						}
						variant="outlined"
					/>
					<IconButton
						style={{
							outline: "none",
							position: "relative",
							left: "-.5em",
						}}
						onClick={() => {
							setnotifyOpen(!notifyOpen);
						}}
					>
						<NotificationsActive
							style={{ fontSize: "1.5rem", color: "grey" }}
						/>
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
						disableAutoFocus={true}
						disableEnforceFocus={true}
					>
						<Paper
							elevation={3}
							style={{
								width: "22vw",
								height: "85vh",
								maxHeight: "85vh",
								marginRight: "2em",
								marginTop: "2em",
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
									fontSize: "1rem",
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
					<div
						style={{
							fontWeight: "bold",
							borderRadius: "1.5em",
						}}
					>
						<Avatar
							alt="Remy Sharp"
							src=""
							onClick={() => {
								setLogin({ type: LOGIN_ACTIONS.LOGOUT });
							}}
						/>
					</div>
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
