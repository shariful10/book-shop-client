import img from "@/assets/image/right-side.jpg";
import Container from "@/components/module/Container";
import { TChildren } from "@/types/global.type";
import React from "react";

const RightSide: React.FC<TChildren> = ({ children }) => {
	return (
		// <div className="bg-gradient-to-r from-primaryColor to-[#573ff1] p-6 h-full md:h-screen">

		// </div>
		<Container className="bg-white rounded-lg p-6 md:h-screen flex flex-col justify-center items-center">
			<div className="flex justify-between items-center md:px-6 gap-4">
				<div className="w-full md:w-1/2">{children}</div>
				<div className="w-1/2 h-full hidden md:block">
					<img src={img} className="rounded-[8px]" alt="" />
				</div>
			</div>
		</Container>
	);
};

export default RightSide;
