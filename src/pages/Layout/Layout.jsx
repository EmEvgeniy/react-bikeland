import { Box, CircularProgress } from "@mui/material";
import Header from "../../components/header/Header";
import classes from "./layout.module.css";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "../../components/footer/Footer";

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
			</main>
			<Footer/>
		</div>
	);
};

export default Layout;
