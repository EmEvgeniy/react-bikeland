import { Box, CircularProgress } from "@mui/material";
import classes from "./layout.module.css";
import { Outlet, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import HeaderTop from "../../components/headerTop/HeaderTop";
import HeaderBottom from "../../components/headerBottom/HeaderBottom";

const CallStickyComp = lazy(() =>
	import("../../components/UI/callStickyComp/CallStickyComp")
);
const BracketStickyComp = lazy(() =>
	import("../../components/UI/bracketStickyComp/BracketStickyComp")
);
const BasketPopup = lazy(() =>
	import("../../components/UI/basketPopup/BasketPopup")
);
const FavoriteStickyComp = lazy(() =>
	import("../../components/UI/favoriteStickyComp/FavoriteStickyComp")
);
const FavoritePopup = lazy(() =>
	import("../../components/UI/favoritePopup/FavoritePopup")
);
const CardDetailPopup = lazy(() =>
	import("../../components/UI/cardDetailPopup/CardDetailPopup")
);
const Layout = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<div className={classes.Layout}>
			<HeaderTop />
			<HeaderBottom />
			<main className={classes.main}>
				<Suspense
					fallback={
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								minHeight: "100vh",
								width: "100%",
							}}>
							<CircularProgress />
						</Box>
					}>
					<Outlet />
				</Suspense>
				<Suspense fallback={false}>
					<CallStickyComp />
					<BracketStickyComp />
					<BasketPopup />
					<CardDetailPopup />
					<FavoritePopup />
					<FavoriteStickyComp />
				</Suspense>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
