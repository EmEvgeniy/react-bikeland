import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./favoritePopup.module.css";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
	minusNum,
	plusNum,
	setBasketStatus,
} from "../../../store/slices/basketSlice";
import BasketForm from "./basketForm/BasketForm";

const BasketPopup = () => {
	const value = useSelector((state) => state.basket.value);
	const status = useSelector((state) => state.basket.status);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!value.length) {
			dispatch(setBasketStatus(false));
		}
	}, [value, dispatch]);

	useEffect(() => {
		const body = document.querySelector("body");
		if (status) {
			body.classList.add("hold");
		} else {
			body.classList.remove("hold");
		}
	}, [status]);

	const handlePlus = (el) => {
		dispatch(plusNum(el));
	};

	const handleMinus = (el) => {
		dispatch(minusNum(el));
	};

	const handleClose = () => {
		dispatch(setBasketStatus(false));
	};

	return (
		<div className={`${classes.FavoritePopup} ${status && classes.active}`}>
			<div className={`${classes.inner} ${status && classes.active}`}>
				<p>ВАШ ЗАКАЗ</p>
				<div className={classes.close} onClick={handleClose}>
					<AiOutlineClose />
				</div>

				<div className={classes.list}>
					{value.map((el, index) => (
						<div className={classes.card} key={index}>
							<div className={classes.top}>
								<LazyLoadImage
									src={el.photos?.length ? el.photos[0]?.photo_url : ""}
									alt='card'
									effect='blur'
									loading='lazy'
								/>
								<p>
									<span className={classes.title}>{el.title}</span>
								</p>
							</div>
							<div className={classes.bottom}>
								<div className={classes.info}>
									<p>Цена товара:</p>
									<p style={{ fontWeight: 600 }}>
										{el.uzb_price.toLocaleString("ru")} UZB
									</p>
								</div>
								<div className={classes.counter}>
									<span className={classes.plus} onClick={() => handlePlus(el)}>
										<AiOutlinePlus />
									</span>
									<span className={classes.num}>{el.num}</span>
									<span
										className={classes.minus}
										onClick={() => handleMinus(el)}>
										<AiOutlineMinus />
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
				<BasketForm />
			</div>
		</div>
	);
};

export default BasketPopup;
