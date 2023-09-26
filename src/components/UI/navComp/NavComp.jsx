import { useEffect } from "react";
import classes from "./navComp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeBurgerStatus } from "../../../store/slices/BurgerSlice";
import { Link } from "react-router-dom";

const navigationLinks = [
	{ title: "МОТОЦИКЛЫ", link: "bikes" },
	{ title: "СКУТЕРЫ", link: "scooter" },
	{ title: "МОПЕДЫ", link: "mopeds" },
	{ title: "ЭЛЕКТРОСКУТЕРЫ", link: "electric_scooter" },
	{ title: "ТРИЦИКЛЫ", link: "tricycles" },
	{ title: "МИНИ БАЙКИ", link: "mini_bikes" },
	{ title: "КВАДРОЦИКЛЫ", link: "atvs" },
	{ title: "ДВИГАТЕЛИ", link: "engines" },
	{
		title: "ЭКИП/АКСЕССУАРЫ/ЗАПЧАСТИ",
		link: "EQUIPMENT_ACCESSORIES_SPARE PARTS",
	},
	{ title: "ДИЛЕРЫ", link: "dealers" },
	{ title: "ДОСТАВКА", link: "delivery" },
];

const NavComp = () => {
	const burgerStatus = useSelector((state) => state.burger.value);
	const dispatch = useDispatch();

	useEffect(() => {
		document.body.classList.toggle("hold", burgerStatus);
	}, [burgerStatus]);

	return (
		<ul className={`${classes.NavComp} ${burgerStatus ? classes.active : ""}`}>
			{navigationLinks.map((link, index) => (
				<li key={index} onClick={() => dispatch(changeBurgerStatus(false))}>
					{
						<Link
							to={
								link.link !== "dealers" && link.link !== "delivery"
									? `/categories/${link.link}`
									: `/${link.link}`
							}>
							{link.title}
						</Link>
					}
				</li>
			))}
		</ul>
	);
};

export default NavComp;
