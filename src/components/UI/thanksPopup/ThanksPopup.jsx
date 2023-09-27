import classes from "./thanksPopup.module.css";
import Container from "../../container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { changeThanksStatus } from "../../../store/slices/thanksSlice";
import { BsYoutube } from "react-icons/bs";

const ThanksPopup = () => {
	const status = useSelector((state) => state.thanks.status);
	const dispatch = useDispatch();
	const refRef = useRef(null);

	const handleClickOutside = (e) => {
		if (refRef.current && !refRef.current.contains(e.target)) {
			dispatch(changeThanksStatus(false));
		}
	};
	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const handleLink = () => {
		dispatch(changeThanksStatus(false));
	};
	useEffect(() => {
		setTimeout(() => {
			dispatch(changeThanksStatus(false));
		}, 7000);
	});

	return (
		<div
			className={
				status
					? `${classes.ThanksPopup} ${classes.active}`
					: `${classes.ThanksPopup}`
			}>
			<Container>
				<div className={classes.inner} ref={refRef}>
					<p>
						Спасибо, скоро наш специалист вам перезвонит. А пока вы ожидаете,
						можете ознакомится с нашими видео на ютуб канале
					</p>
					<a
						onClick={handleLink}
						target='_blank'
						rel='noreferrer'
						href='https://www.youtube.com/@BikelandUz'>
						<BsYoutube className={classes.icon} />
					</a>
					<a
						href='https://www.youtube.com/@BikelandUz'
						onClick={handleLink}
						target='_blank'
						rel='noreferrer'
						className={classes.btn}>
						Перейти на канал
					</a>
				</div>
			</Container>
		</div>
	);
};

export default ThanksPopup;
