import { styled } from "@mui/system";
import type { ReactNode } from "react";

type ButtonType = "primary" | "secondary";
type ButtonSize = "lg" | "md";

type Props = {
	type: ButtonType;
	size: ButtonSize;
	children: ReactNode;
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
};

const Button = ({
	type,
	size,
	children,
	className,
	disabled = false,
	onClick,
}: Props) => {
	return (
		<Root
			buttonType={type}
			buttonSize={size}
			className={className}
			disabled={disabled}
			onClick={onClick}
		>
			<Inner>
				<Content buttonSize={size}>
					<Text buttonType={type} buttonSize={size}>
						{children}
					</Text>
				</Content>
			</Inner>
		</Root>
	);
};

export default Button;

const Root = styled("button", {
	shouldForwardProp: (prop) => prop !== "buttonType" && prop !== "buttonSize",
})<{ buttonType: ButtonType; buttonSize: ButtonSize; disabled: boolean }>(
	({ buttonType, buttonSize, disabled }) => ({
		width: "100%",
		height: buttonSize === "lg" ? 48 : "auto",
		padding: 0,
		border: "none",
		borderRadius: buttonSize === "lg" ? 16 : 8,
		backgroundColor: buttonType === "primary" ? "#f87149" : "#ece7dd",
		cursor: disabled ? "not-allowed" : "pointer",
		opacity: disabled ? 0.5 : 1,
		transition: "opacity 0.2s ease-in-out",
		"&:hover": {
			opacity: disabled ? 0.5 : 0.8,
		},
	}),
);

const Inner = styled("div")({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	overflow: "clip",
	borderRadius: "inherit",
	width: "100%",
	height: "100%",
});

const Content = styled("div", {
	shouldForwardProp: (prop) => prop !== "buttonSize",
})<{ buttonSize: ButtonSize }>(({ buttonSize }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	height: "100%",
	padding: buttonSize === "lg" ? "10px 16px" : "8px 16px",
}));

const Text = styled("span", {
	shouldForwardProp: (prop) => prop !== "buttonType" && prop !== "buttonSize",
})<{ buttonType: ButtonType; buttonSize: ButtonSize }>(
	({ buttonType, buttonSize }) => ({
		fontFamily: "'Noto Sans JP', sans-serif",
		fontWeight: 600,
		fontSize: buttonSize === "lg" ? 20 : 16,
		lineHeight: "normal",
		color: buttonType === "primary" ? "#ffffff" : "#59250a",
	}),
);
