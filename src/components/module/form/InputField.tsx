import { TInputProps } from "@/types/form.type";
import React from "react";
import { Label } from "../../ui/label";

const InputField: React.FC<TInputProps> = ({ name, label, children }) => {
	return (
		<div className="grid w-full max-w-sm items-center gap-2 relative">
			{label && <Label htmlFor={name}>{label}</Label>}
			{children}
		</div>
	);
};

export default InputField;
