const nodeEnv = import.meta.env.NODE_ENV;

export const apiUrl =
	nodeEnv === "production"
		? import.meta.env.VITE_API_URL
		: import.meta.env.VITE_API_LOCAL_URL;
