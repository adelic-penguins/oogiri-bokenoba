import { styled } from "@mui/system";

const Top = () => {
	return <Page></Page>;
};

export default Top;

const Page = styled("main")(({ theme }) => ({
	width: "100%",
	minHeight: "100vh",
	display: "flex",
	justifyContent: "center",
	padding: theme.spacing(6, 2, 10),
	background:
		"radial-gradient(circle at top, rgba(124, 209, 255, 0.2), transparent 55%), #050309",
	color: "#f4f4f4",
}));
