import { Eye, EyeOff } from "lucide-react";
import React from "react";

type TEyeOpenCloseProps = {
	isShow: boolean;
	setIsShow: (value: boolean) => void;
};

const EyeOpenClose: React.FC<TEyeOpenCloseProps> = ({ isShow, setIsShow }) => {
	return (
		<span
			onClick={() => setIsShow(!isShow)}
			className="absolute top-8 right-2 cursor-pointer"
		>
			{isShow ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
		</span>
	);
};

export default EyeOpenClose;
