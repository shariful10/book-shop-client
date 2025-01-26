import Bar from "@/assets/icons/Bar";
import Container from "@/components/module/Container";
import { Button } from "@/components/ui/button";
import { navbarItems } from "@/data/navbar.data";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const Navbar: React.FC = () => {
	const navigate = useNavigate();
	const [showNav, setShowNav] = useState(false);

	const user = false;
	return (
		<div className="bg-gray-700 relative w-full">
			<Container>
				<div className="flex justify-between items-center py-3 text-white">
					<div className="">Logo</div>
					<div className="hidden md:block space-x-4">
						{navbarItems.map((item) => (
							<Link to={item.url}>{item.title}</Link>
						))}
					</div>
					<div className="hidden md:block">
						{user ? (
							<Button>Logout</Button>
						) : (
							<div className="space-x-4">
								<Button onClick={() => navigate("/login")}>Login</Button>
								<Button onClick={() => navigate("/signup")}>Sign Up</Button>
							</div>
						)}
					</div>
					<div onClick={() => setShowNav(!showNav)} className="md:hidden">
						<Bar />
					</div>
				</div>
			</Container>
			{showNav && <MobileNavbar show={showNav} setShowNav={setShowNav} />}
		</div>
	);
};

export default Navbar;
