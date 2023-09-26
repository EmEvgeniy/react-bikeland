import classes from "./filterComp.module.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilterValue } from "../../../store/slices/filterSlice";

const listOne = ["По умолчанию", "Новики", "Популярные"];

const FilterComp = () => {
	const [active, setActive] = useState(false);
	const value = useSelector((state) => state.filter.value);
	const refRoot3 = useRef(null);
	const dispatch = useDispatch();
	const handleClickOutside = (e) => {
		if (refRoot3.current && !refRoot3.current.contains(e.target)) {
			setActive(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);
	useEffect(() => {
		dispatch(addFilterValue(listOne[0]));
	}, []);
	return (
		<div className={classes.FilterComp}>
			<div className={classes.inner}>
				<div className={classes.FilterComp_title}>
					<span className={classes.title}>Порядок:</span>
					<span
						ref={refRoot3}
						className={classes.btn}
						onClick={() => setActive(true)}>
						{value}
					</span>
					<ul
						className={
							active
								? `${classes.FilterComp_list} ${classes.active}`
								: `${classes.FilterComp_list}`
						}>
						{listOne.map((el, index) => (
							<p onClick={() => dispatch(addFilterValue(el))} key={index}>
								{el}
							</p>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FilterComp;
