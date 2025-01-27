import App from "@/App";
import AllProducts from "@/pages/AllProducts";
import Cart from "@/pages/Cart";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/all-products",
				element: <AllProducts />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/about",
				element: <Home />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
]);

export default router;
