import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { persistor, store } from "./redux/store.ts";
import router from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
		<Toaster
			position="bottom-right"
			toastOptions={{ style: { background: "#000", color: "#fff" } }}
		/>
	</StrictMode>
);
