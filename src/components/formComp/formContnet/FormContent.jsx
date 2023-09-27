import { useState, useCallback } from "react";
import classes from "./formContent.module.css";
import Forminput from "./formInput/Forminput";
import FormCheckBox from "./formCheckBox/FormCheckBox";
import { usePostFormMutation } from "../../../store/middleWares/FormApi";
import { useDispatch } from "react-redux";
import { changeThanksStatus } from "../../../store/slices/thanksSlice";
import InputMask from "react-input-mask";
import { usePostNotificationMutation } from "../../../store/middleWares/notificationApi";

const FormContent = () => {
	const [name, setName] = useState("");
	const [num, setNum] = useState("");
	const [id, setId] = useState(null);
	const [city, setCity] = useState("");
	const [known, setKnown] = useState("");
	const [active, setActive] = useState(false);
	const [active2, setActive2] = useState(false);
	const [active3, setActive3] = useState(false);
	const [active4, setActive4] = useState(false);
	const [postForm] = usePostFormMutation();
	const [postNotification] = usePostNotificationMutation();
	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		event.preventDefault()
		const data = {
			name: name,
			phone_number: num,
			location: city,
			known_from: known,
		};
		const data2 = {
			message: "Обратный звонок",
			order_id: 0,
			feedback_id: id,
			created_at: toString(new Date()),
		};
		name ? setActive(false) : setActive(true);
		num ? setActive2(false) : setActive2(true);
		city ? setActive3(false) : setActive3(true);
		known ? setActive4(false) : setActive4(true);
		if (num && name && city && known) {
			await postForm(data).then((res) =>
				res.data.id
					? dispatch(changeThanksStatus(true)) && setId(res.data.id)
					: null
			);
			if (id) {
				await postNotification(data2)
			}
		}
	};

	const handleSetName = useCallback((value) => {
		setName(value);
		setActive(false);
	}, []);

	const handleSetNum = useCallback((event) => {
		setNum(event.target.value);
		setActive2(false);
	}, []);

	const handleSetCity = useCallback((value) => {
		setCity(value);
		setActive3(false);
	}, []);

	const handleSetKnown = useCallback((value) => {
		setKnown(value);
		setActive4(false);
	}, []);

	return (
		<div className={classes.FormContent}>
			<p className={classes.title}>
				Вы можете заказать обратный звонок <br /> и мы перезвоним Вам сами
			</p>
			<Forminput
				title={"Как к вам обращаться?"}
				fn={handleSetName}
				active={active}
				placeholder='Ваше имя'
			/>
			<span className={classes.ttt}>На какой номер вам перезвонить?</span>
			<InputMask
				type='text'
				mask='+\9\9\8\ 99 999 99 99'
				placeholder='+99890 999 99 99'
				value={num}
				className={`${classes.input} ${active2 && classes.fail}`}
				onChange={handleSetNum}
			/>
			<Forminput
				title={"Ваш город или регион?"}
				fn={handleSetCity}
				active={active3}
				placeholder='Название города, региона'
			/>
			<p className={classes.sub_title}>Откуда узнали о нас?</p>
			<FormCheckBox fn={handleSetKnown} active={active4} />
			<span className={classes.main_btn} onClick={handleSubmit}>
				Заказать звонок
			</span>
		</div>
	);
};

export default FormContent;
