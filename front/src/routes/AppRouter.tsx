import { Navigate, Route, Routes } from "react-router";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};

export default AppRouter;
