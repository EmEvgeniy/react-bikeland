import { useEffect, useState } from "react";
import Card from "../card/Card";
import classes from "./seeAlsoComp.module.css";
import { motion } from "framer-motion";
import axios from "axios";
import Container from "../../container/Container";

const SeeAlsoComp = () => {
	const [list, setList] = useState([]);
	useEffect(() => {
		const getData = async () => {
			await axios
				.get("https://api.it-test.uz/v1/products?status_id=4")
				.then((res) => setList(res.data));
		};
		getData();
	}, []);

	return (
		<div style={{ width: "100%" }}>
			<Container>
				<motion.div
					initial={{ opacity: 0 }}
					animate={list?.items?.length ? { opacity: 1 } : { opacity: 0 }}
					transition={{ delay: 0.3, duration: 0.3 }}
					className={classes.SeeAlsoComp}>
					<p className={classes.title}>Смотрите так же:</p>
					<div className={classes.inner}>
						{list?.items
							?.filter((el) => el.show_on_see_also && el.photos.length)
							.slice(0, 4)
							.map((el, index) => (
								<Card key={index} data={el} />
							))}
					</div>
				</motion.div>
			</Container>
		</div>
	);
};

export default SeeAlsoComp;
