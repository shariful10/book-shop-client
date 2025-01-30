import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { TChildren } from "@/types";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<TChildren> = ({ children }) => {
	const token = useAppSelector(useCurrentToken);

	if (!token) {
		return <Navigate to="/login" replace={true} />;
	}
	return children;
};

export default ProtectedRoute;
