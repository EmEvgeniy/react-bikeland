import classes from "./detailsPopup.module.css";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import DetailsPopUpContent from "./detailPopUpContent/DetailsPopUpContent";
import SeeAlsoComp from "../seeAlsoComp/SeeAlsoComp";
import BuyComp from "./detailPopUpContent/buyComp/BuyComp";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";
import { setBasketStatus } from "../../../store/slices/basketSlice";

export default function DetailsPopup() {
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
					? `${classes.DetailsPopup} ${classes.active}`
					: `${classes.DetailsPopup}`
			}>
			<div className={classes.inner}>
				<Container>
					<div
						className={classes.close}
						onClick={() => dispatch(setBasketStatus(false))}>
						<AiOutlineClose />
					</div>
					<DetailsPopUpContent />
				</Container>
				<BuyComp />
				<SeeAlsoComp />
			</div>
		</div>
	);
}
