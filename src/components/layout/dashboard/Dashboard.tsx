import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import Sidebar from "./Sidebar";

const Dashboard: React.FC = () => {
	return (
		<>
			<div className="border-b border-b-borderColor sticky top-0 z-50">
				<DashboardNav />
			</div>
			<div className="flex">
				<div className="w-[300px] border-r border-borderColor min-h-[calc(100vh-77px)] px-6 hidden lg:block">
					<Sidebar />
				</div>
				<Outlet />
			</div>
		</>
	);
};

export default Dashboard;
