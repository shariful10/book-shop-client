import Cart from "@/components/module/Cart";
import Container from "@/components/module/Container";
import { Button } from "@/components/ui/button";
import { navbarItems } from "@/data/navbar.data";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BtnLogout from "./BtnLogout";
import MobileNavbar from "./MobileNavbar";

const Navbar: React.FC = () => {
	const navigate = useNavigate();
	const token = useAppSelector(useCurrentToken);

	return (
		<div className="bg-[#0A2540] relative w-full">
			<Container className="flex justify-between items-center py-3 text-white relative">
				<div className="">Logo</div>
				<div className="hidden md:block space-x-4">
					{navbarItems.map((item, idx) => (
						<Link key={idx} to={item.url}>
							{item.title}
						</Link>
					))}
				</div>
				<div className="flex items-center space-x-4">
					<Cart length={0} className="hidden md:block" />
					{token ? (
						<div className="">
							<BtnLogout />
						</div>
					) : (
						<div className="space-x-4 md:block">
							<Button
								onClick={() => navigate("/login")}
								className="bg-[#635bff] hover:bg-[#4f47ea]"
							>
								Login
							</Button>
							<Button
								onClick={() => navigate("/signup")}
								className="bg-[#635bff] hover:bg-[#4f47ea]"
							>
								Sign Up
							</Button>
						</div>
					)}
					<div className="flex items-center space-x-3 justify-end">
						<Cart length={0} />
						<MobileNavbar />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
