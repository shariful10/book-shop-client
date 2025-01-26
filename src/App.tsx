import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";

const App: React.FC = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default App;
