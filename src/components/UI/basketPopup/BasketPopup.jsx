import { useEffect } from "react";
import classes from "./favoritePopup.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { minusNum, plusNum, setBasketStatus } from "../../../store/slices/basketSlice";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import BasketForm from "./basketForm/BasketForm";

const BasketPopup = () => {
	const value = useSelector((state) => state.basket.value);
	const status = useSelector((state) => state.basket.status);
	const dispatch = useDispatch();

	useEffect(() => {
		if (status) {
			document.querySelector("body").classList.add("hold");
		} else {
			document.querySelector("body").classList.remove("hold");
		}
	}, [status]);

	useEffect(() => {
		if (!value.length) {
			dispatch(setBasketStatus(false));
		}
	}, [value, dispatch]);

	return (
		<div
			className={
				status
					? `${classes.FavoritePopup} ${classes.active}`
					: `${classes.FavoritePopup}`
			}>
			<div
				className={
					status ? `${classes.inner} ${classes.active}` : `${classes.inner}`
				}>
				<p>ВАШ ЗАКАЗ</p>
				<div
					className={classes.close}
					onClick={() => dispatch(setBasketStatus(false))}>
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
								/>
								<p>
									<span className={classes.title}>{el.title}</span>
								</p>
							</div>
							<div className={classes.bottom}>
								<div className={classes.info}>
									<p>Цена товара:</p>
									<p style={{ fontWeight: 600 }}>{el.price}</p>
								</div>
								<div className={classes.counter}>
									<span
										className={classes.plus}
										onClick={() => dispatch(plusNum(el))}>
										<AiOutlinePlus />
									</span>
									<span className={classes.num}>{el.num}</span>
									<span
										className={classes.minus}
										onClick={() => dispatch(minusNum(el))}>
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
