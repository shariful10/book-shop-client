import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	selectCurrentUser,
	useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { useGetMeQuery } from "@/redux/features/userManagement/userManagementApi";
import { useAppSelector } from "@/redux/hook";
import { formattedName } from "@/utils/formattedName";
import React from "react";
import { useNavigate } from "react-router-dom";
import BtnLogout from "../navbar/BtnLogout";
import Logo from "../navbar/Logo";

const DashboardNav: React.FC = () => {
	const navigate = useNavigate();
	const token = useAppSelector(useCurrentToken);
	const user = useAppSelector(selectCurrentUser);

	const { data: me } = useGetMeQuery(user?.email);

	return (
		<div className="w-full px-5 py-3 flex justify-between items-center">
			<Logo />
			<div className="">
				{token && (
					<div className="flex items-center space-x-4">
						<Avatar className="border-2 border-primaryColor object-cover">
							<AvatarImage
								src={me ? me.data?.profileImg : ""}
								alt={me?.data?.name ?? ""}
							/>
							<AvatarFallback>
								{me ? formattedName(me.data!.name) : "N/A"}
							</AvatarFallback>
						</Avatar>
						<BtnLogout />
					</div>
				)}
			</div>
		</div>
	);
};

export default DashboardNav;
