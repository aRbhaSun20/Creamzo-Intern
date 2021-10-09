import React from "react";
import { useSnackbar } from "notistack";
import { axiosSendRequest, AXIOS_ACTIONS } from "../../utils/AxiosSendRequest";
import { usePin } from "../../Context/PinsContext";
import { useUploads } from "../../Context/UploadsContext";

import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function DeletePinButton({ id }) {
	const [, refetchPins] = usePin();
	const [, refetchUploads] = useUploads();

	const { enqueueSnackbar } = useSnackbar();

	const handleClick = () => {
		axiosSendRequest(AXIOS_ACTIONS.DELETE, `delete`, { _id: id })
			.then((data) => {
				refetchPins();
				refetchUploads();
				enqueueSnackbar("Pin Deleted", { variant: "success" });
			})
			.catch((err) => {
				enqueueSnackbar("Pin not deleted", { variant: "error" });
				console.log(err);
			});
	};

	return (
		<IconButton
			onClick={handleClick}
			name="download"
			style={{ outline: "none", padding: "4px" }}
		>
			<DeleteForeverIcon
				style={{
					color: "white",
					fontSize: "1.2rem",
					position: "relative",
					bottom: "0em",
				}}
			/>
		</IconButton>
	);
}
