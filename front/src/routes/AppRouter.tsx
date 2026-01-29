import { Navigate, Route, Routes } from "react-router";
import Top from "@/pages/Top";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Top />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};
export default AppRouter;
