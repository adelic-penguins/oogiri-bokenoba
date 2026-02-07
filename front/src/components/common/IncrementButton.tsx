import { styled } from "@mui/system";

type Props = {
	children: string;
	onClick: () => void;
	disabled?: boolean;
	className?: string;
};

const IncrementButton = ({
	children,
	onClick,
	disabled = false,
	className,
}: Props) => {
	return (
		<Root onClick={onClick} disabled={disabled} className={className}>
			<Text>{children}</Text>
		</Root>
	);
};

export default IncrementButton;

const Root = styled("button")<{ disabled: boolean }>(({ disabled }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	height: 48,
	padding: "10px 16px",
	border: "none",
	borderRadius: 16,
	backgroundColor: "#3cb371",
	cursor: disabled ? "not-allowed" : "pointer",
	opacity: disabled ? 0.5 : 1,
	transition: "opacity 0.2s ease-in-out",
	"&:hover": {
		opacity: disabled ? 0.5 : 0.8,
	},
}));

const Text = styled("span")({
	fontFamily: "'Noto Sans JP', sans-serif",
	fontWeight: 600,
	fontSize: 20,
	lineHeight: "normal",
	color: "#ffffff",
});
