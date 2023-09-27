import classes from "./categoryCatalog.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../../store/middleWares/productsApi";
import Container from "../../../components/container/Container";
import Card from "../../../components/UI/card/Card";
import FilterComp from "../../../components/UI/filterComp/FilterComp";
import EquipmentsTitle from "../../../components/UI/EquipmentsTitle/EquipmentsTitle";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const categories = [
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
];
const CategoryCatalog = ({ pathName }) => {
	const [active, setActive] = useState(false);
	const [title, setTitle] = useState("");
	const [prod, setProd] = useState([]);
	const value = useSelector((state) => state.category.value);
	const value2 = useSelector((state) => state.filter.value);

	const { data: products = [], isSuccess } = useGetProductsQuery();
	useEffect(() => {
		if (categories.filter((el) => el.link === pathName).length) {
			setTitle(categories.filter((el) => el.link === pathName)[0]?.title);
		} else {
			setTitle("");
		}
	}, [pathName]);
	useEffect(() => {
		if (value && products?.items?.length) {
			setProd(products?.items?.filter((el) => el.category_id === value));
		}
	}, [value, products]);

	return (
		<section className={classes.CategoryCatalog}>
			<Container>
				<div className={classes.inner}>
					<h1>{title}</h1>
					<FilterComp />
					{pathName === "EQUIPMENT_ACCESSORIES_SPARE PARTS" ? (
						<EquipmentsTitle />
					) : null}
					{isSuccess && (
						<div className={classes.content}>
							<div className={classes.content_inner}>
								{active
									? prod
											?.filter((el) =>
												value2 == "Новики"
													? el.tag
													: value2 == "Популярные"
													? el.amount_views > 10
													: el
											)
											.map((el, index) => (
												<Card data={el} key={index} index={index} />
											))
									: prod
											?.filter((el) =>
												value2 == "Новики"
													? el.tag
													: value2 == "Популярные"
													? el.amount_views > 10
													: el
											)
											.slice(0, 8)
											.map((el, index) => (
												<Card data={el} key={index} index={index} />
											))}
							</div>
							{products.items.filter((el) => el.category_id === value)
								?.length ? (
								<div
									className={
										active
											? `${classes.btn} ${classes.active}`
											: `${classes.btn}`
									}>
									<span onClick={() => setActive(true)}>Загрузить ещё</span>
								</div>
							) : (
								<motion.div
									initial={{ scale: 0, opacity: 1 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ delay: 0.1, duration: 0.5 }}
									className={classes.added}>
									<p>
										К сожалению товар не найден, возможно он остался на складе,
										обратитесь в отдел продаж за подробной информацией.
									</p>
									<Link
										to='form' // Указываем идентификатор элемента, к которому нужно прокрутиться
										spy={true}
										smooth={true}
										offset={-70} // Опционально, смещение от верха, если необходимо
										duration={500}
										className={classes.btns_btn}>
										<span>Оставить запрос</span>
									</Link>
								</motion.div>
							)}
						</div>
					)}
				</div>
			</Container>
		</section>
	);
};

export default CategoryCatalog;
