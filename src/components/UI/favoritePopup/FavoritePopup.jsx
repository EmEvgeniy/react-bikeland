import { useEffect } from "react";
import classes from "./favoritePopup.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import {
	removeItemFromFavorite,
	setFavoriteStatus,
} from "../../../store/slices/favoriteSlice";

const FavoritePopup = () => {
	const value = useSelector((state) => state.favorite.value);
	const status = useSelector((state) => state.favorite.status);
	const dispatch = useDispatch();

	useEffect(() => {
		if (status) {
			document.querySelector("body").classList.add("hold");
		} else {
			document.querySelector("body").classList.remove("hold");
		}
	}, [status]);

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
				<p>ИЗБРАННОЕ</p>
				<div
					className={classes.close}
					onClick={() => dispatch(setFavoriteStatus(false))}>
					<AiOutlineClose />
				</div>

				<div className={classes.list}>
					{value.map((el, index) => (
						<div className={classes.card} key={index}>
							<LazyLoadImage
								src={el.photos?.length ? el.photos[0]?.photo_url : ""}
								alt='card'
								effect='blur'
							/>
							<div className={classes.bottom}>
								<p>
									<span className={classes.title}>{el.title}</span>
									<span className={classes.price}>{el.uzb_price}</span>
								</p>
								<span
									className={classes.close2}
									onClick={() => dispatch(removeItemFromFavorite(el))}>
									<AiOutlineClose />
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FavoritePopup;
