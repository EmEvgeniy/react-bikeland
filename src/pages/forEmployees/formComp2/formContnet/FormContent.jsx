import { useState, useCallback } from "react";
import classes from "./formContent.module.css";
import Forminput from "./formInput/Forminput";
import FormCheckBox from "./formCheckBox/FormCheckBox";
import { usePostFormMutation } from "../../../../store/middleWares/FormApi";

const FormContent = () => {
	const [name, setName] = useState("");
	const [num, setNum] = useState("");
	const [city, setCity] = useState("");
	const [known, setKnown] = useState("");
	const [about, setAbout] = useState("");
	const [active, setActive] = useState(false);
	const [active2, setActive2] = useState(false);
	const [active3, setActive3] = useState(false);
	const [active4, setActive4] = useState(false);
	const [active5, setActive5] = useState(false);
	const [postForm] = usePostFormMutation();

	const handleSubmit = async () => {
		const data = {
			name: name,
			phone_number: num,
			location: city,
			known_from: known,
			about: about,
		};
		name ? setActive(false) : setActive(true);
		num ? setActive2(false) : setActive2(true);
		city ? setActive3(false) : setActive3(true);
		known ? setActive4(false) : setActive4(true);
		about ? setActive5(false) : setActive5(true);
		if (num && name && city && known && about) {
			await postForm(data).then((res) => console.log(res));
		}
	};

	const handleSetName = useCallback((value) => {
		setName(value);
		setActive(false);
	}, []);

	const handleSetNum = useCallback((value) => {
		setNum(value);
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
			<p className={classes.title}>Расскажите о себе</p>
			<Forminput
				title={"Как к вам обращаться?"}
				fn={handleSetName}
				active={active}
				placeholder='Ваше имя'
			/>
			<Forminput
				title={"На какой номер вам перезвонить?"}
				fn={handleSetNum}
				active={active2}
				placeholder='Введите номер +998'
			/>
			<Forminput
				title={"Ваш город или регион?"}
				fn={handleSetCity}
				active={active3}
				placeholder='Название города, региона'
			/>
			<span>Расскажите о себе, чем занимаетесь, каким навыками обладаете</span>
			<textarea
				name='about'
				placeholder='Я умею…'
				className={
					active5
						? `${classes.textarea} ${classes.fail}`
						: `${classes.textarea}`
				}
				onChange={(e) => setAbout(e.target.value)}
				cols='30'
				rows='10'></textarea>
			<p className={classes.sub_title}>Откуда узнали о нас?</p>
			<FormCheckBox fn={handleSetKnown} active={active4} />
			<span className={classes.main_btn} onClick={handleSubmit}>
				Заказать звонок
			</span>
		</div>
	);
};

export default FormContent;
