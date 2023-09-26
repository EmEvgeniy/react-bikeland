import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { setBasketStatus } from "@/store/slices/basketSlice";
import classes from "./bracketStickyComp.module.scss";

const BracketStickyComp = () => {
	const dispatch = useDispatch();
	const value = useSelector((state) => state.basket.value);

	const shouldShowBracket = value.length > 0;

	const handleBracketClick = () => {
		dispatch(setBasketStatus(true));
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={
				shouldShowBracket ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
			}
			exit={{ opacity: 0, scale: 0 }}
			className={
				shouldShowBracket
					? `${classes.BracketStickyComp} ${classes.active}`
					: `${classes.BracketStickyComp}`
			}
			onClick={handleBracketClick}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='33'
				height='31'
				viewBox='0 0 33 31'
				fill='none'>
				<path
					d='M29 25H7C6.7 25 6.4 24.8077 6.2 24.6154C6 24.4231 6 24.0385 6.1 23.75L8 19.1346L6.1 1.92308H0V0H7C7.5 0 7.9 0.384615 8 0.865384L10 19.1346C10 19.3269 10 19.4231 9.9 19.6154L8.5 23.0769H30L29 25Z'
					fill='#BB1D1E'
				/>
				<path
					d='M8.975 20L8.5875 18L31.0625 13.2V5H7.8125V3H32.0312C32.6125 3 33 3.4 33 4V14C33 14.5 32.7094 14.9 32.225 15L8.975 20ZM29.125 31C26.9937 31 25.25 29.2 25.25 27C25.25 24.8 26.9937 23 29.125 23C31.2563 23 33 24.8 33 27C33 29.2 31.2563 31 29.125 31ZM29.125 25C28.0594 25 27.1875 25.9 27.1875 27C27.1875 28.1 28.0594 29 29.125 29C30.1906 29 31.0625 28.1 31.0625 27C31.0625 25.9 30.1906 25 29.125 25ZM5.875 31C3.74375 31 2 29.2 2 27C2 24.8 3.74375 23 5.875 23C8.00625 23 9.75 24.8 9.75 27C9.75 29.2 8.00625 31 5.875 31ZM5.875 25C4.80938 25 3.9375 25.9 3.9375 27C3.9375 28.1 4.80938 29 5.875 29C6.94063 29 7.8125 28.1 7.8125 27C7.8125 25.9 6.94063 25 5.875 25Z'
					fill='#BB1D1E'
				/>
			</svg>
			{shouldShowBracket && (
				<p
					className={
						shouldShowBracket
							? `${classes.num} ${classes.active}`
							: `${classes.num}`
					}>
					{value.length}
				</p>
			)}
		</motion.div>
	);
};

export default BracketStickyComp;
