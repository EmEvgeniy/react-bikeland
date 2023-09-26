import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./callPopup.module.css";
import { usePostFormMutation } from "../../../store/middleWares/FormApi";
import Container from "../../container/Container";
import { changeCallStatus } from "../../../store/slices/callSlice";

const CallPopup = () => {
	const [num, setNum] = useState("");
	const [postFormMutation] = usePostFormMutation();
	const callStatus = useSelector((state) => state.call.value);
	const dispatch = useDispatch();

	const [active, setActive] = useState(false);

	const handleSubmit = async () => {
		const data = { phone_number: num };

		if (num) {
			await postFormMutation(data).then((res) => console.log(res));
			setNum(""); // Clear input after submission
			dispatch(changeCallStatus(false)); // Close the popup
		} else {
			setActive(true);
		}
	};

	const handleClose = () => {
		dispatch(changeCallStatus(false));
	};

	const handleInputChange = (e) => {
		setNum(e.target.value);
		setActive(false); // Reset the error state on input change
	};

	return (
		<div className={`${classes.CallPopup} ${callStatus && classes.active}`}>
			<Container>
				<div className={classes.inner}>
					<p className={classes.title}>
						<span>Оставьте свой номер</span>
						<br />
						наш специалист свяжется с вами в ближайшие 30 минут!
					</p>
					<input
						type='text'
						placeholder='+998 90 999 99 99'
						className={`${classes.input} ${active && classes.fail}`}
						value={num}
						onChange={handleInputChange}
					/>
					<span className={classes.btn} onClick={handleSubmit}>
						Заказать звонок
					</span>
					<span className={classes.closeBtn} onClick={handleClose}>
						Закрыть
					</span>
				</div>
			</Container>
		</div>
	);
};

export default CallPopup;
