import { useDispatch, useSelector } from "react-redux";
import CallPopup from "../callPopup/CallPopup";
import classes from "./callStickyComp.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { changeCallStatus } from "@/store/slices/callSlice";

const CallStickyComp = () => {
	const callStatus = useSelector((state) => state.call.value);
	const dispatch = useDispatch();
	return (
		<div className={classes.wrapp}>
			<div
				className={classes.CallStickyComp}
				onClick={() => dispatch(changeCallStatus(!callStatus))}>
				<FaPhoneAlt className={classes.icon} />
			</div>
			<CallPopup />
		</div>
	);
};

export default CallStickyComp;
