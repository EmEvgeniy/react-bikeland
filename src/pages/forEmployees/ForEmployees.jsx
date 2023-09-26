import FormComp from "../../components/formComp/FormComp";
import classes from "./forEmployees.module.css";
import { motion } from "framer-motion";

const ForEmployees = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.3, duration: 1 }}
			className={classes.ForEmployeesPage}>
			<h1 className={classes.title}>РАБОТА В КОМАНДЕ BIKELAND.UZ</h1>
			<FormComp />
		</motion.div>
	);
};

export default ForEmployees;
