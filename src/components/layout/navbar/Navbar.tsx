import Container from "@/components/module/Container";
import { Button } from "@/components/ui/button";
import { navbarItems } from "@/data/navbar.data";
import {
	selectCurrentUser,
	useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { useGetMeQuery } from "@/redux/features/userManagement/userManagementApi";
import { useAppSelector } from "@/redux/hook";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BtnLogout from "./BtnLogout";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";

const Navbar: React.FC = () => {
	const navigate = useNavigate();
	const token = useAppSelector(useCurrentToken);

	const user = useAppSelector(selectCurrentUser);
	const { data: me } = useGetMeQuery(user?.email);

	return (
		<div className="relative w-full border-b-2 border-b-primaryColor">
			<Container className="flex justify-between items-center py-3 text-white relative">
				<Logo />
				<div className="hidden md:block space-x-4 text-[#222222] font-medium">
					{navbarItems.map((item, idx) => (
						<Link key={idx} to={item.url}>
							{item.title}
						</Link>
					))}
				</div>
				<div className="flex items-center space-x-4">
					{token ? (
						<div className="flex items-center space-x-4">
							{me && <Dropdown />}
							<BtnLogout />
						</div>
					) : (
						<div className="space-x-4 md:block">
							<Button
								onClick={() => navigate("/login")}
								className="text-white hover:text-primaryColor bg-primaryColor hover:bg-transparent border border-primaryColor px-4 py-2 rounded-md duration-500"
							>
								Login
							</Button>
							<Button
								onClick={() => navigate("/signup")}
								className="text-white hover:text-primaryColor bg-primaryColor hover:bg-transparent border border-primaryColor px-4 py-2 rounded-md duration-500"
							>
								Sign Up
							</Button>
						</div>
					)}
					<div className="flex items-center space-x-3 justify-end">
						<MobileNavbar />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
