import App from "@/App";
import Dashboard from "@/components/layout/dashboard/Dashboard";
import ProtectedRoute from "@/components/layout/protectedRoute/ProtectedRoute";
import AllProducts from "@/pages/AllProducts";
import Cart from "@/pages/Cart";
import OrderManagement from "@/pages/dashboard/OrderManagement";
import ProductManagement from "@/pages/dashboard/ProductManagement";
import ProfileManagement from "@/pages/dashboard/ProfileManagement";
import Home from "@/pages/homePage/Home";
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
	{
		path: "/dashboard",
		element: (
			<ProtectedRoute>
				<Dashboard />
			</ProtectedRoute>
		),
		children: [
			{
				path: "profile-management",
				element: <ProfileManagement />,
			},
			{
				path: "product-management",
				element: <ProductManagement />,
			},
			{
				path: "order-management",
				element: <OrderManagement />,
			},
		],
	},
]);

export default router;
