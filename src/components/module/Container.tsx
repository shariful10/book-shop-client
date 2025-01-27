import { cn } from "@/lib/utils";
import { TChildren } from "@/types/global.type";
import React from "react";

type TContainerProps = {
	className?: string;
};

const Container: React.FC<TChildren & TContainerProps> = ({
	children,
	className,
}) => {
	return (
		<div className={cn("w-full max-w-7xl mx-auto px-6 sm:px-0", className)}>
			{children}
		</div>
	);
};

export default Container;
