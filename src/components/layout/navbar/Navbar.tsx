import Cart from "@/components/module/Cart";
import Container from "@/components/module/Container";
import { Button } from "@/components/ui/button";
import { navbarItems } from "@/data/navbar.data";
import {
	selectCurrentUser,
	useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { useGetAllUsersQuery } from "@/redux/features/userManagement/userManagementApi";
import { useAppSelector } from "@/redux/hook";
import { TUser } from "@/types";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Avatar from "./Avatar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formattedName } from "@/utils/formattedName";
import { AvatarImage } from "@radix-ui/react-avatar";
import BtnLogout from "./BtnLogout";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";

const Navbar: React.FC = () => {
	const navigate = useNavigate();
	const token = useAppSelector(useCurrentToken);
	const user = useAppSelector(selectCurrentUser);

	const { data: users } = useGetAllUsersQuery(undefined);

	const currentUser = users?.data?.find((u: TUser) => u.email === user?.email);

	return (
		<div className=" relative w-full">
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
					<Cart length={0} className="hidden md:block" />
					{token ? (
						<div className="flex items-center space-x-4">
							<Avatar className="border-2 border-primaryColor object-cover">
								<AvatarImage
									src={currentUser ? currentUser?.profileImg : ""}
									alt={currentUser?.name ?? ""}
								/>
								<AvatarFallback>
									{currentUser ? formattedName(currentUser?.name) : "N/A"}
								</AvatarFallback>
							</Avatar>
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
						<Cart length={0} />
						<MobileNavbar />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
