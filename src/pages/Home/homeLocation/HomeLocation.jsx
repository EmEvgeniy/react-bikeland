import { Suspense, lazy } from "react";
import Container from "../../../components/container/Container";
import classes from "./homeLocation.module.css";
const CityInfo = lazy(() => import("./cardInfo/CardInfo"));

export default function HomeLocation({block}) {
	return (
		<section className={classes.HomeLocation}>
			<Container>
				{block && <h3>НАШИ ШОУРУМЫ</h3>}
				<Suspense fallback={false}>
					<CityInfo  />
				</Suspense>
			</Container>
		</section>
	);
}
