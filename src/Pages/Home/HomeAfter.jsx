import React, { useEffect, useLayoutEffect } from "react";
import "./style/style.css";
import Container from "../../Components/ImageContainer_afterLogin/Container";
import { useState } from "react";
import { Add } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSearch } from "../../Context/SearchContext";

const HomeAfter = () => {
	// eslint-disable-next-line
	const [limit, setLimit] = useState(5);

	const [size, setSize] = useState([0, 0]);
	const [pinsData] = useSearch();

	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	useEffect(() => {
		if (size[0] < 900) {
			setLimit(4);
			if (size[0] < 700) {
				setLimit(3);
				if (size[0] < 480) {
					setLimit(2);
				}
			}
		} else {
			setLimit(5);
		}
	}, [size]);

	return (
		<div
			className="container1"
			style={{
				// maxHeight: `${limit * 9}vh`,
				// maxWidth: "80vw",
				paddingTop: "2em",
				// height:"100vh"
			}}
		>
			<div className="column1">
				{pinsData?.map((image, i) =>
					i % limit === 0 ? (
						<Container
							data={image}
							key={i}
							height="70%"
							// height={Math.random() * limit * Math.random() + 12}
						/>
					) : null
				)}
			</div>
			<div className="column2">
				{pinsData?.map((image, i) =>
					i % limit === 1 ? (
						<Container
							data={image}
							key={i}
							height="70%"
							// height={Math.random() * limit * Math.random() + 12}
						/>
					) : null
				)}
			</div>
			<div className="column3">
				{pinsData?.map((image, i) =>
					i % limit === 2 ? (
						<Container
							data={image}
							key={i}
							height="70%"
							// height={Math.random() * limit * Math.random() + 12}
						/>
					) : null
				)}
			</div>
			<div className="column4">
				{pinsData?.map((image, i) =>
					i % limit === 3 ? (
						<Container
							data={image}
							key={i}
							height="70%"
							// height={Math.random() * limit * Math.random() + 12}
						/>
					) : null
				)}
			</div>
			<div className="column5">
				{pinsData?.map((image, i) =>
					i % limit === 4 ? (
						<Container
							data={image}
							key={i}
							height="70%"
							// height={Math.random() * limit * Math.random() + 12}
						/>
					) : null
				)}
			</div>
			<div
				className="add"
				style={{ position: "fixed", bottom: "5.5em", right: "2em" }}
			>
				<Link to="/boardCreation">
					<IconButton style={{ outline: "none", backgroundColor: "#dedede" }}>
						<Add style={{ fontSize: "2vw", color: "black" }} />
					</IconButton>
				</Link>
			</div>
		</div>
	);
};

export default HomeAfter;
