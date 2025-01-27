import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { navbarItems } from "@/data/navbar.data";
import { Menu } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MobileNavbar: React.FC = () => {
	const navigate = useNavigate();

	const user = false;

	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="md:hidden">
					<Menu />
				</div>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="text-start">Logo</SheetTitle>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="flex flex-col justify-center gap-4">
						{navbarItems.map((item, idx) => (
							<Link key={idx} to={item.url}>
								{item.title}
							</Link>
						))}
					</div>
				</div>
				<div className="hidden md:block">
					{user ? (
						<Button>Logout</Button>
					) : (
						<div className="space-x-4">
							<Button
								onClick={() => navigate("/login")}
								className="bg-primaryColor hover:bg-primaryHover"
							>
								Login
							</Button>
							<Button
								onClick={() => navigate("/signup")}
								className="bg-primaryColor hover:bg-primaryHover"
							>
								Sign Up
							</Button>
						</div>
					)}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNavbar;
