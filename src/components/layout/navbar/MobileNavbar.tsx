import CloseIcon from "@/assets/icons/CloseIcon";
import { Button } from "@/components/ui/button";
import { navbarItems } from "@/data/navbar.data";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

type TMobileNavbarProps = {
	show: boolean;
	setShowNav: (show: boolean) => void;
};

const MobileNavbar: React.FC<TMobileNavbarProps> = ({ show, setShowNav }) => {
	const navigate = useNavigate();

	const user = false;

	return (
		<div
			className={`${
				show ? "animate-slide-in w-full" : "animate-slide-out w-0"
			} absolute top-0 bg-gray-700 text-white p-6 h-[100vh] md:hidden`}
		>
			<div className="flex justify-between items-center">
				<div>Logo</div>
				<div onClick={() => setShowNav(false)}>
					<CloseIcon />
				</div>
			</div>
			<div className="flex flex-col space-y-6 mt-6">
				{navbarItems.map((item) => (
					<Link to={item.url}>{item.title}</Link>
				))}
			</div>
			<div className="">
				{user ? (
					<Button>Logout</Button>
				) : (
					<div className="flex flex-col space-y-6 mt-6">
						<Button onClick={() => navigate("/login")} className="w-[30%]">
							Login
						</Button>
						<Button onClick={() => navigate("/signup")} className="w-[30%]">
							Sign Up
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default MobileNavbar;
