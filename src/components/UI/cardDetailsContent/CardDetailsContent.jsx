import { useEffect, useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
	setBasketStatus,
	setItemIntoBasket,
} from "../../../store/slices/basketSlice";
import { changeCardStatus } from "../../../store/slices/cardDetailsSlice";
import {
	removeItemFromFavorite,
	setFavoriteStatus,
	setItemIntoFavorite,
} from "../../../store/slices/favoriteSlice";
import classes from "./cardDetailsContent.module.css";

const CardDetailsContent = ({ data }) => {
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.favorite.value);

	useEffect(() => {
		const isFavorite = favorites.some((el) => el.id === data.id);
		setActive(isFavorite);
	}, [favorites, data]);

	const handleFavoriteClick = () => {
		setActive(!active);
		dispatch(changeCardStatus(false));

		if (!active) {
			dispatch(setItemIntoFavorite(data));
			dispatch(setFavoriteStatus(true));
		} else {
			dispatch(removeItemFromFavorite(data));
		}
	};

	const handleOrderClick = () => {
		dispatch(setItemIntoBasket({ ...data, num: 1 }));
		dispatch(setBasketStatus(true));
		dispatch(changeCardStatus(false));
	};

	return (
		<div className={classes.CardDetailsContent}>
			<p className={classes.title}>{data.title}</p>
			<span className={classes.name}>Bikeland.uz</span>
			<p className={classes.price}>{data.uzb_price}</p>
			<div className={classes.btns}>
				<span className={classes.btn} onClick={handleOrderClick}>
					Заказать
				</span>
				<span
					className={`${classes.icon} ${active ? classes.acitve : ""}`}
					onClick={handleFavoriteClick}>
					{active ? <AiTwotoneHeart /> : <AiOutlineHeart />}
				</span>
			</div>
			<div className={classes.conf}>
				<p>{data.title}</p>
				<p>{data.description}</p>
				{data.clearance && (
					<p>
						<span>Клиренс:</span>
						{data.clearance}
					</p>
				)}
				{data.fuel_tank_volume && (
					<p>
						<span>Объём топливного бака:</span>
						{data.fuel_tank_volume}
					</p>
				)}
				{data.fuel_consumption && (
					<p>
						<span>Расход топлива:</span>
						{data.fuel_consumption}
					</p>
				)}
				{data.engine && (
					<p>
						<span>Двигатель:</span>
						{data.engine}
					</p>
				)}
				{data.max_power && (
					<p>
						<span>Максимальная мощность:</span>
						{data.max_power}
					</p>
				)}
				{data.max_speed && (
					<p>
						<span>Максимальная скорость:</span>
						{data.max_speed}
					</p>
				)}
				{data.ignition_system && (
					<p>
						<span>Система зажигания:</span>
						{data.ignition_system}
					</p>
				)}
				{data.gearbox && (
					<p>
						<span>Коробка передач:</span>
						{data.gearbox}
					</p>
				)}
				{data.main_gear && (
					<p>
						<span>Главная передача:</span>
						{data.main_gear}
					</p>
				)}
				{data.front_brake && (
					<p>
						<span>Тормоз передний:</span>
						{data.front_brake}
					</p>
				)}
				{data.back_brake && (
					<p>
						<span>Тормоз задний:</span>
						{data.back_brake}
					</p>
				)}
				{data.front_tires && (
					<p>
						<span>Шины передние:</span>
						{data.front_tires}
					</p>
				)}
				{data.back_tires && (
					<p>
						<span>Шины задние:</span>
						{data.back_tires}
					</p>
				)}
				{data.sizes && (
					<p>
						<span>ДxШxВ:</span>
						{data.sizes}
					</p>
				)}
			</div>
		</div>
	);
};

export default CardDetailsContent;
