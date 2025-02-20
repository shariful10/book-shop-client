import InputField from "@/components/module/form/InputField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { TLoggedUser } from "@/types";
import { verifyToken } from "@/utils/verifyToken";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import EyeOpenClose from "./authentication/EyeOpenClose";
import RightSide from "./authentication/RightSide";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [isShow, setIsShow] = useState(false);
	const { register, handleSubmit, reset } = useForm();
	const [login, { isLoading }] = useLoginMutation();

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		try {
			const res = await login(data).unwrap();

			if (res.error) {
				toast.error(res?.error?.data.message);
			}

			const user = verifyToken(res?.data?.accessToken as string) as TLoggedUser;

			dispatch(
				setUser({
					user: user,
					token: res.data?.accessToken as string,
				})
			);

			toast.success(res.message);
			navigate("/");
			reset();
		} catch (error) {
			toast.error("Failed to login!");
		}
		reset();
	};

	return (
		<RightSide>
			<div className="w-full flex flex-col items-center">
				<div className="w-full md:max-w-[80%] mx-auto space-y-4">
					<h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
						Login to your account
					</h1>
					<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
							{isLoading ? "Login..." : "Login"}
						</Button>
					</form>
					<p className="text-start">
						Don't have an account?{" "}
						<Link to={"/signup"} className="underline hover:text-primaryColor">
							Sign Up
						</Link>
					</p>
				</div>
			</div>
		</RightSide>
	);
};

export default Login;
