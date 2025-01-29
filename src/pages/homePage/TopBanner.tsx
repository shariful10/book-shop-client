import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const TopBanner: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-sliderImage bg-cover bg-no-repeat bg-center  text-white">
			<div className="bg-[#00000037] h-[600px] flex flex-col justify-center">
				<div className="ml-20 space-y-4">
					<h3 className="text-[40px] leading-10 font-bold">
						We can help get your
					</h3>
					<h1 className="text-[80px] leading-[80px] font-bold">
						Books in Order
					</h1>
					<div className="!mt-8">
						<Button
							onClick={() => navigate("/all-products")}
							className="text-xl bg-[#f07c29] hover:bg-[#222222] border border-[#f07c29] hover:border-[#222222] rounded-md px-6 py-6"
						>
							Shop Now
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBanner;
