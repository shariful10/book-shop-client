import { adminPaths, userPaths } from "@/data/sidebar.data";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { NavLink } from "react-router-dom";

const userRole = {
	USER: "user",
	ADMIN: "admin",
	SUPER_ADMIN: "superAdmin",
};

const Sidebar = () => {
	const user = useAppSelector(selectCurrentUser);

	let sidebarItems;

	switch (user?.role) {
		case userRole.USER:
			sidebarItems = userPaths;
			break;
		case userRole.ADMIN:
			sidebarItems = adminPaths;
			break;
		case userRole.SUPER_ADMIN:
			sidebarItems = adminPaths;
			break;
		default:
			break;
	}

	return (
		<div className="sticky top-8">
			<h1 className="ml-5 py-3 text-2xl capitalize font-semibold mb-5">
				{" "}
				{user?.role} Dashboard
			</h1>
			<div className="flex flex-col font-medium">
				{sidebarItems?.map((item) => {
					return (
						<NavLink
							key={item.title}
							to={item.url}
							className={({ isActive }) =>
								isActive
									? "bg-primaryColor py-3 px-5 rounded-md text-white"
									: "bg-transparent py-3 px-5 rounded-md"
							}
						>
							<span>{item.title}</span>
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
