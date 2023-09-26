import Forminput from "../../../formComp/formContnet/formInput/Forminput";
import classes from "./basketForm.module.css";
import { useState } from "react";
import { usePostForm2Mutation } from "../../../../store/middleWares/FormApi";

const BasketForm = () => {
	const [name, setName] = useState("");
	const [num, setNum] = useState("");
	const [city, setCity] = useState("");
	const [active, setActive] = useState(false);
	const [active2, setActive2] = useState(false);
	const [active3, setActive3] = useState(false);
	const [postForm] = usePostForm2Mutation();
	const handleSubmit = async () => {
		const data = {
			name: name,
			phone_number: num,
			location: city,
		};
		name ? setActive(false) : setActive(true);
		num ? setActive2(false) : setActive2(true);
		city ? setActive3(false) : setActive3(true);
		if (num && name && city) {
			await postForm(data).then((res) => console.log(res));
		}
	};
	return (
		<div className={classes.form}>
			<Forminput
				placeholder={"Введите имя"}
				fn={setName}
				active={active}
				title='Как к вам обращаться?'
			/>
			<Forminput
				placeholder={"На какой номер вам перезвонить?"}
				title='Введите номер +998'
				fn={setNum}
				active={active2}
			/>
			<Forminput
				placeholder={"Ваш город или регион?"}
				title='Название города, региона'
				fn={setCity}
				active={active3}
			/>
			<span className={classes.btn} onClick={handleSubmit}>
				Заказать
			</span>
		</div>
	);
};

export default BasketForm;
