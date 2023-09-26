import { useEffect } from "react";
import classes from "./navComp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeBurgerStatus } from "../../../store/slices/BurgerSlice";
import { Link } from "react-router-dom";
import { getCategoryId } from "../../../store/slices/categoryId";

const navigationLinks = [
	{ title: "МОТОЦИКЛЫ", link: "bikes",id: 1, },
	{ title: "СКУТЕРЫ", link: "scooter" , id: 2},
	{ title: "МОПЕДЫ", link: "mopeds" ,id:3},
	{ title: "ЭЛЕКТРОСКУТЕРЫ", link: "electric_scooter",id:4 },
	{ title: "ТРИЦИКЛЫ", link: "tricycles", id:5 },
	{ title: "МИНИ БАЙКИ", link: "mini_bikes",id: 6 },
	{ title: "КВАДРОЦИКЛЫ", link: "atvs", id:7},
	{ title: "ДВИГАТЕЛИ", link: "engines", id:8},
	{
		title: "ЭКИП/АКСЕССУАРЫ/ЗАПЧАСТИ",
		link: "EQUIPMENT_ACCESSORIES_SPARE PARTS",
		id:9
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
							}
							onClick={() => link.id ? dispatch(getCategoryId(link.id)): null}
							>
							{link.title}
						</Link>
					}
				</li>
			))}
		</ul>
	);
};

export default NavComp;
