import { Container } from "@/components/wrappers/container/Container";
import classes from "./equipmentsTitle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "@/store/slices/titleSlice";

const list = ["Экипировки", "Аксессуары", "Запчасти"];

export default function EquipmentsTitle() {
	const value = useSelector((state) => state.title.value);
	const dispatch = useDispatch();
	return (
		<div className={classes.EquipmentsTitle}>
			<Container>
				<div className={classes.inner_cat}>
					{list.map((el, index) => (
						<span
							className={
								value === el
									? `${classes.btn} ${classes.active}`
									: `${classes.btn}`
							}
							key={index}
							onClick={() => dispatch(changeTitle(el))}>
							{el}
						</span>
					))}
				</div>
			</Container>
		</div>
	);
}
