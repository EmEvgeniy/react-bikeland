import { useEffect, useState } from "react";
import { useGetDeliveryDataQuery } from "../../store/middleWares/resourcesApi";
import classes from "./deliveryPage.module.css";
import CategoryReasons from "../CategoryPage/categoryReasons/CategoryReasons";
import FormComp from "../../components/formComp/FormComp";
// import DealersSlider from "./DealersSlider/DealersSlider";
import { motion } from "framer-motion";
const DeliveryPage = () => {
	const { data = [], isSuccess } = useGetDeliveryDataQuery();
	const [list, setList] = useState([]);
	// const [listPhoto, setListPhoto] = useState([]);

	useEffect(() => {
		if (isSuccess) {
			setList(data.filter((el) => el.data_type === "dilivery"));
			// setListPhoto(data.filter((el) => el.data_type === "dilivery_photo"));
		}
	}, [isSuccess, data]);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.2 }}
			className={classes.DiliveryPage}>
			<h1 className={classes.title}>{list[1]?.title}</h1>
			<p className={classes.subTitle}>{list[1]?.text}</p>
			{/* <DealersSlider items={listPhoto} /> */}
			<CategoryReasons />
			<FormComp />
		</motion.div>
	);
};

export default DeliveryPage;
