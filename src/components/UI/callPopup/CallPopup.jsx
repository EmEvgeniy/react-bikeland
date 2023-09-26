import { Container } from "@/components/wrappers/container/Container";
import classes from "./callPopup.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { usePostFormMutation } from "@/store/middleWares/FormApi";

const CallPopup = () => {
	const [num, setNum] = useState("");
	const [postFormMutation] = usePostFormMutation();
	const callStatus = useSelector((state) => state.call.value);
	const [active,setACtive] = useState(false)
	const handleSubmit = async () => {
		const data = { "phone_number": num };
		
		if (data && num) {
			await postFormMutation(data).then((res) => console.log(res));
			setACtive(false)
		}else{
			setACtive(true)
		}
	};
	return (
		<div
			className={
				callStatus
					? `${classes.CallPopup} ${classes.active}`
					: `${classes.CallPopup}`
			}>
			<Container>
				<div className={classes.inner}>
					<p className={classes.title}>
						<span>Оставьте свой номер</span>
						<br />
						наш специалист свяжется с вами в ближайшие 30 минут!
					</p>
					<input
						type='text'
						placeholder='+998 90 999 99 99'
						className={active  ? `${classes.input} ${classes.fail}` : `${classes.input}`}
						onChange={(e) => setNum(e.target.value)}
					/>
					<span className={classes.btn}  onClick={handleSubmit}>
						Заказать звонок
					</span>
				</div>
			</Container>
		</div>
	);
};

export default CallPopup;
