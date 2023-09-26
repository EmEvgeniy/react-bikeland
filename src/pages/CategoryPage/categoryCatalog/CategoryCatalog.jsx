import classes from "./categoryCatalog.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../../store/middleWares/productsApi";
import Container from "../../../components/container/Container";
import Card from "../../../components/UI/card/Card";
import FilterComp from "../../../components/UI/filterComp/FilterComp";
import EquipmentsTitle from "../../../components/UI/EquipmentsTitle/EquipmentsTitle";
import { debounce } from "lodash";

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
	const value = useSelector((state) => state.category.value);

	const setActiveDebounced = debounce((status) => {
		setActive(status);
	}, 300);

	const { data: products = [], isSuccess } = useGetProductsQuery();
	useEffect(() => {
		if (categories.filter((el) => el.link === pathName).length) {
			setTitle(categories.filter((el) => el.link === pathName)[0]?.title);
		} else {
			setTitle("");
		}
	}, [pathName]);

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
									? products.items
											.filter((el) => el.category_id === value)
											.map((el, index) => (
												<Card data={el} key={index} index={index} />
											))
									: products.items
											.filter((el) => el.category_id === value)
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
									<span onClick={() => setActiveDebounced(true)}>
										Загрузить ещё
									</span>
								</div>
							) : null}
						</div>
					)}
				</div>
			</Container>
		</section>
	);
};

export default CategoryCatalog;
