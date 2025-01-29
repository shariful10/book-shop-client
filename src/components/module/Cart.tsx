import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

type TCartProps = {
	length: number;
	className?: string;
};

const Cart: React.FC<TCartProps> = ({ length, className, ...resProps }) => {
	const navigate = useNavigate();
	return (
		<div
			className={cn("relative cursor-pointer md:hidden", className, {
				...resProps,
			})}
			onClick={() => navigate("/cart")}
		>
			<ShoppingCart className="text-primaryColor" />
			<span className="absolute -top-2 md:-top-3 -right-2 bg-primaryColor px-2 py-0.5 rounded-full text-[10px] md:text-xs">
				{length}
			</span>
		</div>
	);
};

export default Cart;
