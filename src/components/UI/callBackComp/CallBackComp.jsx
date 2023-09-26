import classes from "./callBackComp.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";

const CallBackComp = () => {
	return (
		<div className={classes.CallBackComp}>
			<a href='tel:+998936216001' className={classes.CallBackComp_btn}>
				<BsFillTelephoneFill className='icon' />
				<span>консультант на связи 24/7</span>
			</a>
		</div>
	);
};
export default CallBackComp;
