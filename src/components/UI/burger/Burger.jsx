import { useDispatch, useSelector } from "react-redux";
import classes from "./burger.module.scss";
import { changeBurgerStatus } from "../../../store/slices/BurgerSlice";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Burger = () => {
	const status = useSelector((state) => state.burger.value);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(changeBurgerStatus(!status));
	};
	return (
		<div
			className={
				status ? `${classes.burger} ${classes.active}` : `${classes.burger}`
			}
			onClick={handleClick}>
			{!status ? <AiOutlineMenu /> : <AiOutlineClose />}
		</div>
	);
};

export default Burger;
