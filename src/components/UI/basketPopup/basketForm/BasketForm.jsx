import Forminput from "../../../formComp/formContnet/formInput/Forminput";
import classes from "./basketForm.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasketStatus } from "../../../../store/slices/basketSlice";
import axios from "axios";

const BasketForm = () => {
	const [name, setName] = useState("");
	const [num, setNum] = useState("");
	const [city, setCity] = useState("");
	const [active, setActive] = useState(false);
	const [active2, setActive2] = useState(false);
	const [active3, setActive3] = useState(false);
	const value = useSelector((state) => state.basket.value);
	const dispatch = useDispatch();

	const handleSubmit = async () => {
		const data = {
			full_name: name,
			phone_number: num,
			region: city,
			known_from: "",
			product_id: value[0]?.id,
			quantity: value[0]?.num,
			created_at: toString(new Date()),
		};

		name ? setActive(false) : setActive(true);
		num ? setActive2(false) : setActive2(true);
		city ? setActive3(false) : setActive3(true);
		if (num && name && city) {
			await axios
				.post("https://api.it-test.uz/v1/orders", data, {
					headers: {
						accept: "application/json",
						"Content-Type": "application/json",
					},
				})
				.then((res) =>
					res.status === 200
						? dispatch(setBasketStatus(false))
						: setActive(true) & setActive2(true) & setActive3(true)
				);
		}
	};
	return (
		<div className={classes.form}>
			{active || active2 || active2 ? (
				<p className={classes.validation}>Заполните обязательные поля</p>
			) : null}
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
