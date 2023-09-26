import { Box, CircularProgress } from "@mui/material";
import Header from "../../components/header/Header";
import classes from "./layout.module.css";
import { Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "../../components/footer/Footer";
const CallBackComp = lazy(() =>
	import("../../components/UI/callBackComp/CallBackComp")
);
const CallStickyComp = lazy(() =>
	import("../../components/UI/callStickyComp/CallStickyComp")
);
const BracketStickyComp = lazy(() =>
	import("../../components/UI/bracketStickyComp/BracketStickyComp")
);
const BasketPopup = lazy(() => import("../../components/UI/basketPopup/BasketPopup"))
const FavoriteStickyComp = lazy(() => import("../../components/UI/favoriteStickyComp/FavoriteStickyComp"))
const FavoritePopup = lazy(() => import("../../components/UI/favoritePopup/FavoritePopup"))
const Layout = () => {
	return (
		<div className={classes.Layout}>
			<Header />
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
					<CallBackComp />
					<BracketStickyComp />
					<BasketPopup/>
					<FavoritePopup/>
					<FavoriteStickyComp/>
				</Suspense>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
