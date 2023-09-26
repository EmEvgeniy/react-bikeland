import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FormCheckBox = ({ fn, active }) => {
	return (
		<FormGroup
			sx={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
				alignItems: "center",
				justifyItems: "cneter",
				width: "100%",
				margin: "0px 0 50px 0",
				color: active ? "red" : "#000",
			}}
			onChange={(e) => fn(e.target.value)}>
			<FormControlLabel
				control={<Checkbox value={"Посоветовали друзья"} />}
				label={"Посоветовали друзья"}
			/>

			<FormControlLabel
				control={<Checkbox value={"Посетил шоурум"} />}
				label='Посетил шоурум'
			/>
			<FormControlLabel
				control={<Checkbox value={"YouTube"} />}
				label='YouTube'
			/>
			<FormControlLabel
				control={<Checkbox value={"Telegram"} />}
				label='Telegram'
			/>
			<FormControlLabel
				control={<Checkbox value={"Instagram"} />}
				label='Instagram'
			/>
			<FormControlLabel
				control={<Checkbox value={"Facebook"} />}
				label='Facebook'
			/>
		</FormGroup>
	);
};

export default FormCheckBox;
