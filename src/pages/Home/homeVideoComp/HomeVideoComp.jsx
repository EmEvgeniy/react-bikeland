import Container from "../../../components/container/Container";
import classes from "./homeVideoComp.module.css";
import { Suspense, lazy } from "react";
const  HomeVideoCompContent = lazy(()=> import("./HomeVideoCompContent/HomeVideoCompContent"))

export default function HomeVideoComp() {
	return (
		<section className={classes.MainVideoComp}>
			<Container>
				<Suspense fallback={false}>
				<HomeVideoCompContent />
				</Suspense>
			</Container>
		</section>
	);
}
