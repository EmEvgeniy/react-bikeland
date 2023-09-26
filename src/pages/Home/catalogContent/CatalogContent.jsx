import { useState } from "react";
import Card from "../../../components/UI/card/Card";
import classes from "./catalogContent.module.css";
import Container from "../../../components/container/Container";
import { useGetProductsQuery } from "../../../store/middleWares/productsApi";

const CatalogContent = () => {
	const [active, setActive] = useState(false);
	const { data: products = [], isSuccess } = useGetProductsQuery();
	return (
		<section className={classes.CatalogContent}>
			{isSuccess ? (
				<Container>
					<div className={classes.inner}>
						{active
							? products?.items
									?.filter(
										(el) => el.show_on_main_page === true && el.photos.length
									)
									.map((el, index) => (
										<Card data={el} key={index} index={index} />
									))
							: products?.items
									?.filter(
										(el) => el.show_on_main_page === true && el.photos.length
									)
									.slice(0, 8)
									.map((el, index) => (
										<Card data={el} key={index} index={index} />
									))}
					</div>
					<div
						className={
							active
								? `${classes.main_btn_wrap} ${classes.active}`
								: `${classes.main_btn_wrap}`
						}>
						{products?.items?.length && (
							<span
								className={classes.main_btn}
								onClick={() => setActive(true)}>
								Загрузить ещё
							</span>
						)}
					</div>
				</Container>
			) : null}
		</section>
	);
};

export default CatalogContent;
