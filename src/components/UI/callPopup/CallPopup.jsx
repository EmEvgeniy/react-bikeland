import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./callPopup.module.css";
import { usePostFormMutation } from "../../../store/middleWares/FormApi";
import Container from "../../container/Container";
import { changeCallStatus } from "../../../store/slices/callSlice";
import { changeThanksStatus } from "../../../store/slices/thanksSlice";
import InputMask from "react-input-mask";
import { usePostNotificationMutation } from "../../../store/middleWares/notificationApi";

const CallPopup = () => {
	const [num, setNum] = useState("");
	const [id,setId] = useState(null)
	const [postFormMutation] = usePostFormMutation();
	const callStatus = useSelector((state) => state.call.value);
	const dispatch = useDispatch();
	const [postNotification] = usePostNotificationMutation();
	const [active, setActive] = useState(false);

	const handleSubmit = async () => {
		const data = { phone_number: num };
		const data2 = {
			message: "Обратный звонок2",
			order_id: 0,
			feedback_id: id,
			created_at: toString(new Date()),
		};
		if (num) {
			await postFormMutation(data).then((res) =>
				res.data.id ? dispatch(changeThanksStatus(true)) & setId(res.data.id) : null
			);
			if (id) {
				await postNotification(data2);
			}
			setNum(""); // Clear input after submission
			dispatch(changeCallStatus(false)); // Close the popup
		} else {
			setActive(true);
		}
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
					<InputMask
						type='text'
						mask='+\9\9\8\ 99 999 99 99'
						placeholder='+99890 999 99 99'
						value={num}
						className={`${classes.input} ${active && classes.fail}`}
						onChange={handleInputChange}
					/>
					<span className={classes.btn} onClick={handleSubmit}>
						Заказать звонок
					</span>
				</div>
			</Container>
		</div>
	);
};

export default CallPopup;
