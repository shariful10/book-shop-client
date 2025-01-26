import { TChildren } from "@/types/global.type";
import React from "react";

const Container: React.FC<TChildren> = ({ children }) => {
	return (
		<div className="w-full md:max-w-7xl mx-auto px-6 sm:px-0">{children}</div>
	);
};

export default Container;
