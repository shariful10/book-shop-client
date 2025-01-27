export type TLoggedUser = {
	email: string;
	role: string;
	iat: number;
	exp: number;
};

export type TAuthState = {
	user: null | TLoggedUser;
	token: null | string;
};
