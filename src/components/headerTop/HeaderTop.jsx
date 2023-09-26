import { Suspense, lazy } from "react";
import classes from "./headerTop.module.css";
import Burger from "../UI/burger/Burger";
import SocialLinks from "../UI/socialLinks/SocialLinks";
import SearchInput from "../UI/searchInput/SearchInput";
import Logo from "../UI/logo/Logo";
import Container from "../container/Container";
const CallBackComp = lazy(() => import("../UI/callBackComp/CallBackComp"));
const SearchComp2 = lazy(() => import("../UI/searchComp2/SearchComp2"));

const HeaderTop = () => {
	return (
		<header className={classes.HeaderTop}>
			<Container>
				<div className={classes.top}>
					<div className={classes.inner_item1}>
						<Burger />
						<SocialLinks />
						<SearchInput />
					</div>
					<Logo />
					<div className={classes.inner_item2}>
						<Suspense fallback={false}>
							<CallBackComp />
							<SearchComp2 />
						</Suspense>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default HeaderTop;
