"use client";
import classes from "./textContent.module.css";
import { useCashStore, useDetails } from "@/store/store";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

function TextContent({ data }) {
	const [active, setActive] = useState(false);
	const addFavoriteItem = useCashStore((state) => state.addFavoriteItem);
	const addBasketItem = useCashStore((state) => state.addBasketItem);
	const value = useCashStore((state) => state.favoriteValue);
	const changeFavoriteStatus = useCashStore(
		(state) => state.changeFavoriteStatus
	);
	const changeBasketStatus = useCashStore((state) => state.changeBasketStatus);
	const changeDetailsStatus = useDetails((state) => state.changeDetailsStatus);
	const removeFavoriteItem = useCashStore((state) => state.removeFavoriteItem);
	useEffect(() => {
		if (active) {
			addFavoriteItem(data);
			changeFavoriteStatus(true);
		} else {
			removeFavoriteItem(data);
		}
	}, [data, active, addFavoriteItem, changeFavoriteStatus, removeFavoriteItem]);

	useEffect(() => {
		if (!value.some((el) => el.id === data.id)) {
			setActive(false);
		} else {
			setActive(true);
		}
	}, [value, data]);
	const handleClick = () => {
		addBasketItem({ ...data, num: 1 });
		changeBasketStatus(true);
		changeDetailsStatus(false);
	};
	return (
		<div className={classes.CardDetailsContent}>
			<p className={classes.title}>{data.title}</p>
			<span className={classes.name}>Bikeland.uz</span>
			<p className={classes.price}>{data.price}</p>
			<div className={classes.btns}>
				<span className={classes.btn} onClick={handleClick}>
					Заказать
				</span>
				<span
					className={
						active ? `${classes.icon} ${classes.acitve}` : `${classes.icon}`
					}
					onClick={() => setActive(!active) && changeDetailsStatus(false)}>
					{active ? <AiTwotoneHeart /> : <AiOutlineHeart />}
				</span>
			</div>
			<p className={classes.conf}>{data.conf}</p>
		</div>
	);
}

export default TextContent;
