import InputField from "@/components/module/form/InputField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { TResponse, TUser, TUserResponse } from "@/types";
import { verifyToken } from "@/utils/verifyToken";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import EyeOpenClose from "./authentication/EyeOpenClose";
import RightSide from "./authentication/RightSide";

const SignUp: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [isShow, setIsShow] = useState(false);
	const [registerUser, { isLoading }] = useRegisterMutation();
	const { register, handleSubmit, reset } = useForm();

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const formData = new FormData();
		formData.append("file", data.image[0]);
		formData.append("data", JSON.stringify(data));

		try {
			const res = (await registerUser(
				formData
			).unwrap()) as TResponse<TUserResponse>;

			if (res.error) {
				toast.error(res?.error?.data?.message);
			}

			const user = verifyToken(res?.data?.accessToken as string);

			dispatch(
				setUser({
					user: user as TUser,
					token: res.data?.accessToken as string,
				})
			);

			toast.success("User is created successfully!");
			reset();
			navigate("/");
		} catch (err) {
			toast.error("Failed to create account!");
			console.log(err);
		}
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
						<InputField name="image" type="image" label="Image">
							<Input id="image" type="file" {...register("image")} />
						</InputField>
						<Button
							type="submit"
							className="bg-primaryColor hover:bg-secondaryColor text-white h-10 rounded-[8px]"
						>
							{isLoading ? "Signing up..." : "Sign Up"}
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
