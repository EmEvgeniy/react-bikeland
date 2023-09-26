import { createBrowserRouter } from "react-router-dom";
import { Home, Layout } from "./pages";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
]);
