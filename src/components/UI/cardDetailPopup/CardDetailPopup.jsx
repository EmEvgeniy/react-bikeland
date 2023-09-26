import classes from "./CardDetailPopup.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardDetailsContent from "../cardDetailsContent/CardDetailsContent";
import { AiOutlineClose } from "react-icons/ai";
import { addCardItem, changeCardStatus } from "@/store/slices/cardDetailsSlice";
import SeeAlsoComp from "../seeAlsoComp/SeeAlsoComp";
import { Container } from "@/components/wrappers/container/Container";
import DetailsPopUpContentSlider from "../DetailsPopup/detailPopUpContent/detailsPopUpContentSlider/DetailsPopUpContentSlider";
import BuyComp from "../DetailsPopup/detailPopUpContent/buyComp/BuyComp";
import Image from "next/image";

const CardDetailPopup = () => {
	const status = useSelector((state) => state.card.status);
	const value = useSelector((state) => state.card.value);
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
					? `${classes.CardDetailPopup} ${classes.active}`
					: `${classes.CardDetailPopup}`
			}>
			<Container>
				<div
					className={
						status ? `${classes.inner} ${classes.active}` : `${classes.inner}`
					}>
					<div
						className={classes.close}
						onClick={() =>
							dispatch(addCardItem([])) && dispatch(changeCardStatus(false))
						}>
						<AiOutlineClose className='icon' />
					</div>
					<div className={classes.inner_item1}>
						{value?.photos?.length > 1 ? (
							<DetailsPopUpContentSlider items={value.photos} />
						) : (
							<Image
								src={value?.photos?.length ? value?.photos[0]?.photo_url : ""}
								alt=''
							/>
						)}
					</div>
					<div className={classes.inner_item2}>
						<CardDetailsContent data={value} />
					</div>
				</div>
			</Container>
			<SeeAlsoComp />
			<BuyComp />
		</div>
	);
};

export default CardDetailPopup;
