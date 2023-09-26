import { useEffect, useState } from "react";
import classes from "./cardDetailsContent.module.scss";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setBasketStatus, setItemIntoBasket } from "@/store/slices/basketSlice";
import { changeCardStatus } from "@/store/slices/cardDetailsSlice";
import {
	removeItemFromFavorite,
	setFavoriteStatus,
	setItemIntoFavorite,
} from "@/store/slices/favoriteSlice";

const CardDetailsContent = ({ data }) => {
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();
	const value = useSelector((state) => state.favorite.value);

	useEffect(() => {
		if (active) {
			dispatch(setItemIntoFavorite(data));
			dispatch(setFavoriteStatus(true));
		} else {
			dispatch(removeItemFromFavorite(data));
		}
	}, [data, active, dispatch]);
	useEffect(() => {
		if (!value.some((el) => el.id === data.id)) {
			setActive(false);
		} else {
			setActive(true);
		}
	}, [value, data]);

	return (
		<div className={classes.CardDetailsContent}>
			<p className={classes.title}>{data.title}</p>
			<span className={classes.name}>Bikeland.uz</span>
			<p className={classes.price}>{data.uzb_price}</p>
			<div className={classes.btns}>
				<span
					className={classes.btn}
					onClick={() =>
						dispatch(setItemIntoBasket({ ...data, num: 1 })) &
						dispatch(setBasketStatus(true)) &
						dispatch(changeCardStatus(false))
					}>
					Заказать
				</span>
				<span
					className={
						active ? `${classes.icon} ${classes.acitve}` : `${classes.icon}`
					}
					onClick={() =>
						setActive(!active) & dispatch(changeCardStatus(false))
					}>
					{active ? <AiTwotoneHeart /> : <AiOutlineHeart />}
				</span>
			</div>
			<div className={classes.conf}>
				<p>{data.title}</p>
				<p>{data.description}</p>
				<p>
					<span>Вес:</span>
					{data.weight}
				</p>
				{data.clearance ? (
					<p>
						<span>Клиренс:</span>
						{data.clearance}
					</p>
				) : null}
				{data.fuel_tank_volume ? (
					<p>
						<span>Объём топливного бака:</span>
						{data.fuel_tank_volume}
					</p>
				) : null}
				{data.fuel_consumption ? (
					<p>
						<span>Расход топлива:</span>
						{data.fuel_consumption}
					</p>
				) : null}
				{data.engine ? (
					<p>
						<span>Двигатель:</span>
						{data.engine}
					</p>
				) : null}
				{data.max_power ? (
					<p>
						<span>Максимальная мощность:</span>
						{data.max_power}
					</p>
				) : null}
				{data.max_speed ? (
					<p>
						<span>Максимальная скорость:</span>
						{data.max_speed}
					</p>
				) : null}
				{data.ignition_system ? (
					<p>
						<span>Система зажигания:</span>
						{data.ignition_system}
					</p>
				) : null}
				{data.gearbox ? (
					<p>
						<span>Коробка передач:</span>
						{data.gearbox}
					</p>
				) : null}
				{data.main_gear ? (
					<p>
						<span>Главная передача:</span>
						{data.main_gear}
					</p>
				) : null}
				{data.front_brake ? (
					<p>
						<span>Тормоз передний:</span>
						{data.front_brake}
					</p>
				) : null}
				{data.back_brake ? (
					<p>
						<span>Тормоз задний:</span>
						{data.back_brake}
					</p>
				) : null}
				{data.front_tires ? (
					<p>
						<span>Шины передние:</span>
						{data.front_tires}
					</p>
				) : null}
				{data.back_tires ? (
					<p>
						<span>Шины задние:</span>
						{data.back_tires}
					</p>
				) : null}
				{data.sizes ? (
					<p>
						<span>ДxШxВ:</span>
						{data.sizes}
					</p>
				) : null}
			</div>
		</div>
	);
};

export default CardDetailsContent;
