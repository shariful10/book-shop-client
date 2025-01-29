import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

type TAvatarProps = {
	img: string;
	name: string;
	fallback?: string;
};

const Avatar: React.FC<TAvatarProps> = ({ img, name, fallback }) => {
	return (
		<AvatarFallback>
			<AvatarImage src={img} alt={name} />
			<AvatarFallback>{fallback}</AvatarFallback>
		</AvatarFallback>
	);
};

export default Avatar;
