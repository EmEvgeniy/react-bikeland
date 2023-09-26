import classes from "./buyComp.module.css";
import ReactIframe from "react-iframe";
import { useDispatch, useSelector } from "react-redux";
import {
	setBasketStatus,
	setItemIntoBasket,
} from "../../../../../store/slices/basketSlice";
import { changeCardStatus } from "../../../../../store/slices/cardDetailsSlice";
import Container from "../../../../container/Container";

export default function BuyComp() {
	const value = useSelector((state) => state.card.value);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setItemIntoBasket({ ...value, num: 1 })) &&
			dispatch(changeCardStatus(false)) &&
			dispatch(setBasketStatus(true));
	};

	return (
		<div className={classes.buy}>
			<Container>
				<div className={classes.inner_wrap}>
					<div className={classes.buy_inner}>
						<p className={classes.buy_inner_title}>{value.title}</p>
						<p className={classes.buy_inner_subTitle}>Bikeland.uz</p>
						<div className={classes.buy_inner_btns}>
							<span className={classes.buy_inner_btns_price}>
								{value.price}
							</span>
							<span
								onClick={handleClick}
								className={classes.buy_inner_btns_btn}>
								Заказать
							</span>
						</div>
					</div>
					<div className={classes.video}>
						<ReactIframe
							url='https://www.youtube.com/embed/SSweGNAULe4?si=mjLtUCMiHLybHtWt'
							width='100%'
							height='100%'
							loading='lazy'
							frameBorder={0}
							styles={{ borderRadius: "15px" }}
						/>
					</div>
				</div>
			</Container>
		</div>
	);
}
