import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Layout from "./pages/Layout/Layout";
const CategoryPage = lazy(() => import("./pages/CategoryPage/CategoryPage"));
const DealersPage = lazy(() => import("./pages/DealersPage/DealersPage"));
const Home = lazy(() => import("./pages/Home/Home"));
const DeliveryPage = lazy(() => import("./pages/DeliveryPage/DeliveryPage"));
const ForEmployees = lazy(() => import("./pages/forEmployees/ForEmployees"));
const BlogPage = lazy(() => import("./pages/blog/BlogPage"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/categories/:title",
				element: <CategoryPage />,
			},
			{
				path: "/dealers",
				element: <DealersPage />,
			},
			{
				path: "/delivery",
				element: <DeliveryPage />,
			},
			{
				path: "/forEmployees",
				element: <ForEmployees />,
			},
			{
				path: "/blog",
				element: <BlogPage />,
			},
		],
	},
]);
