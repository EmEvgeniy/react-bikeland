import { Link } from "react-router-dom";
import classes from "./footerNav.module.css";

const list = [
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
	{ title: "БЛОГ", link: "blog" },
	{ title: "РАБОТА У НАС", link: "forEmployees" },
];

const FooterNav = () => {
	return (
		<ul className={classes.FooterNav}>
			{list.map((link) => (
				<li key={link.title}>
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
