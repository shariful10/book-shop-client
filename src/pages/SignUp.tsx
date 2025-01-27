import InputField from "@/components/module/form/InputField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import EyeOpenClose from "./authentication/EyeOpenClose";
import RightSide from "./authentication/RightSide";

const SignUp: React.FC = () => {
	const [isShow, setIsShow] = useState(false);
	const { register, handleSubmit, reset } = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
		reset();
	};

	return (
		<RightSide>
			<div className="w-full flex flex-col items-center">
				<div className="w-full md:max-w-[80%] mx-auto space-y-4">
					<h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
						Create account
					</h1>
					<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
						<InputField name="name" type="text" label="Your Name">
							<Input id="name" type="name" {...register("name")} />
						</InputField>
						<InputField name="email" type="email" label="Your Email">
							<Input id="email" type="email" {...register("email")} />
						</InputField>
						<InputField name="password" type="password" label="Password">
							<Input
								id="password"
								type={isShow ? "text" : "password"}
								{...register("password")}
							/>
							<EyeOpenClose isShow={isShow} setIsShow={setIsShow} />
						</InputField>
						<Button
							type="submit"
							className="bg-primaryColor hover:bg-secondaryColor text-white h-10 rounded-[8px]"
						>
							Sign Up
						</Button>
					</form>
					<p className="text-start">
						Already have an account?{" "}
						<Link to={"/login"} className="underline hover:text-primaryColor">
							Login
						</Link>
					</p>
				</div>
			</div>
		</RightSide>
	);
};

export default SignUp;
