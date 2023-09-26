import { useDispatch, useSelector } from "react-redux";
import classes from "./favoriteStickyComp.module.scss";
import { AiTwotoneHeart } from "react-icons/ai";
import { setFavoriteStatus } from "@/store/slices/favoriteSlice";
import { motion } from "framer-motion";

const FavoriteStickyComp = () => {
	const dispatch = useDispatch();
	const value = useSelector((state) => state.favorite.value);

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={
				value.length ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
			}
			exit={{ opacity: 0, scale: 0 }}
			className={classes.FavoriteStickyComp}
			onClick={() => dispatch(setFavoriteStatus(true))}>
			<AiTwotoneHeart />
			<p className={classes.num}>{value.length}</p>
		</motion.div>
	);
};

export default FavoriteStickyComp;
