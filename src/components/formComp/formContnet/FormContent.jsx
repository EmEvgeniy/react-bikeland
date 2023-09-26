import { useState } from "react";
import classes from "./formContent.module.css";
import Forminput from "./formInput/Forminput";
import FormCheckBox from "./formCheckBox/FormCheckBox";
import { usePostFormMutation } from "../../../store/middleWares/FormApi";

const FormContent = () => {
	const [name, setName] = useState("");
	const [num, setNum] = useState("");
	const [city, setCity] = useState("");
	const [known, setKnown] = useState("");
	const [active, setActive] = useState(false);
	const [active2, setActive2] = useState(false);
	const [active3, setActive3] = useState(false);
	const [active4, setActive4] = useState(false);
	const [postForm] = usePostFormMutation();

	const handleSubmit = async () => {
		const data = {
			name: name,
			phone_number: num,
			location: city,
			known_from: known,
		};
		name ? setActive(false) : setActive(true);
		num ? setActive2(false) : setActive2(true);
		city ? setActive3(false) : setActive3(true);
		known ? setActive4(false) : setActive4(true);
		if (num && name && city && known) {
			await postForm(data).then((res) => console.log(res));
		}
	};

	return (
		<div className={classes.FormContent}>
			<p className={classes.title}>
				Вы можете заказать обратный звонок <br /> и мы перезвоним Вам сами
			</p>
			<Forminput
				title={"Как к вам обращаться?"}
				fc={setName}
				active={active}
				placeholder='Ваше имя'
			/>
			<Forminput
				title={"На какой номер вам перезвонить?"}
				fc={setNum}
				active={active2}
				placeholder='Введите номер +998'
			/>
			<Forminput
				title={"Ваш город или регион?"}
				fc={setCity}
				active={active3}
				placeholder='Название города, региона'
			/>
			<p className={classes.sub_title}>Откуда узнали о нас?</p>
			<FormCheckBox fn={setKnown} active={active4} />
			<span className={classes.main_btn} onClick={handleSubmit}>
				Заказать звонок
			</span>
		</div>
	);
};

export default FormContent;
