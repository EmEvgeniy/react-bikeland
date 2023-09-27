import { Link } from "react-router-dom";
import classes from "./footerNav.module.css";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";
import { getCategoryId } from "../../../store/slices/categoryId";
import { changeBurgerStatus } from "../../../store/slices/BurgerSlice";

const list = [
	{ title: "МОТОЦИКЛЫ", link: "bikes", id: 1 },
	{ title: "СКУТЕРЫ", link: "scooter", id: 2 },
	{ title: "МОПЕДЫ", link: "mopeds", id: 3 },
	{ title: "ЭЛЕКТРОСКУТЕРЫ", link: "electric_scooter", id: 4 },
	{ title: "ТРИЦИКЛЫ", link: "tricycles", id: 5 },
	{ title: "МИНИ БАЙКИ", link: "mini_bikes", id: 6 },
	{ title: "КВАДРОЦИКЛЫ", link: "atvs", id: 7 },
	{ title: "ДВИГАТЕЛИ", link: "engines", id: 8 },
	{
		title: "ЭКИП/АКСЕССУАРЫ/ЗАПЧАСТИ",
		link: "EQUIPMENT_ACCESSORIES_SPARE PARTS",
		id: 9,
	},
	{ title: "ДИЛЕРЫ", link: "dealers" },
	{ title: "ДОСТАВКА", link: "delivery" },
];

const FooterNav = () => {
	const dispatch = useDispatch();
	const handleLinkClick = debounce((link) => {
		dispatch(changeBurgerStatus(false));
		if (link.id) {
			dispatch(getCategoryId(link.id));
		}
	}, 100);
	return (
		<ul className={classes.FooterNav}>
			{list.map((link) => (
				<li key={link.title} onClick={() => handleLinkClick(link)}>
					<Link
						to={
							!["dealers", "delivery", "forEmployees", "blog"].includes(
								link.link
							)
								? `/categories/${link.link}`
								: `/${link.link}`
						}>
						{link.title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default FooterNav;
