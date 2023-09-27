import { useEffect, useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
	removeItemFromFavorite,
	setItemIntoFavorite,
} from "../../../store/slices/favoriteSlice";
import {
	setBasketStatus,
	setItemIntoBasket,
} from "../../../store/slices/basketSlice";
import {
	addCardItem,
	changeCardStatus,
} from "../../../store/slices/cardDetailsSlice";
import classes from "./card.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ data }) => {
	const dispatch = useDispatch();
	const favoriteItems = useSelector((state) => state.favorite.value);
	const isItemInFavorite = favoriteItems.some((el) => el.id === data.id);
	const [active, setActive] = useState(isItemInFavorite);
	const [active2, setActive2] = useState(false);

	useEffect(() => {
		if (active) {
			dispatch(setItemIntoFavorite(data));
		} else {
			dispatch(removeItemFromFavorite(data));
		}
	}, [active, data, dispatch]);

	useEffect(() => {
		setActive(isItemInFavorite);
	}, [isItemInFavorite]);

	const handleHeartClick = (event) => {
		event.stopPropagation(); // Остановить всплытие события
		setActive(!active);
	};

	const handleDetailsClick = () => {
		dispatch(changeCardStatus(true));
		dispatch(addCardItem(data));
	};

	const handleOrderClick = (event) => {
		event.stopPropagation(); // Остановить всплытие события
		dispatch(changeCardStatus(false));
		dispatch(setItemIntoBasket({ ...data, num: 1 }));
		dispatch(setBasketStatus(true));
	};

	return (
		<div className={classes.Card} onClick={handleDetailsClick}>
			<div className={classes.top}>
				<LazyLoadImage
					src={
						data?.photos?.length && data?.photos[0]?.photo_url
							? !active2
								? data.photos[0]?.photo_url
								: data.photos[1]?.photo_url
							: ""
					}
					alt='bike'
					effect='blur'
					width={"100%"}
					height={"100%"}
					className={classes.img}
					onMouseOver={() => setActive2(true)}
					onMouseLeave={() => setActive2(false)}
				/>
				{data.tag ? <div className={classes.tag}>{data.tag}</div> : null}
				<div
					className={`${classes.heart} ${active && classes.active}`}
					onClick={handleHeartClick}>
					{active ? <AiTwotoneHeart /> : <AiOutlineHeart />}
				</div>
			</div>
			<div className={classes.bottom}>
				<p className={classes.title}>{data.title}</p>
				<span className={classes.text}>
					{data.description ? data?.description.slice(0, 90) : null}
				</span>
				<p className={classes.price}>
					{data.uzb_price.toLocaleString("ru")} UZS
				</p>
				<div className={classes.bottom_btns}>
					<div
						className={classes.see_details}
						onClick={(e) => {
							e.stopPropagation(); // Остановить всплытие события
							handleDetailsClick();
						}}>
						Смотреть подробнее
					</div>
					<span
						onClick={(e) => {
							e.stopPropagation(); // Остановить всплытие события
							handleOrderClick(e);
						}}
						className={classes.main_btn}>
						Заказать
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
