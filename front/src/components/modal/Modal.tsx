import { Modal as MuiModal } from "@mui/material";
import { styled } from "@mui/system";
import type { ReactNode } from "react";

type Props = {
	open: boolean;
	onClose: () => void;
	title: string;
	children: ReactNode;
};

const Modal = ({ open, onClose, title, children }: Props) => {
	return (
		<MuiModal open={open} onClose={onClose}>
			<Overlay>
				<Content>
					<Header>
						<Title>{title}</Title>
						<CloseButton onClick={onClose} aria-label="閉じる">
							<CloseIcon src="/close.svg" alt="閉じる" />
						</CloseButton>
					</Header>
					<Body>{children}</Body>
				</Content>
			</Overlay>
		</MuiModal>
	);
};

export default Modal;

const Overlay = styled("div")({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	height: "100%",
	padding: 36,
	boxSizing: "border-box",
});

const Content = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch",
	width: "100%",
	maxWidth: 300,
	padding: 16,
	backgroundColor: "#ffffff",
	borderRadius: 16,
	overflow: "hidden",
	outline: "none",
});

const Header = styled("div")({
	display: "flex",
	alignItems: "center",
	gap: 16,
	width: "100%",
});

const Title = styled("h2")({
	flex: "1 0 0",
	margin: 0,
	fontFamily: "'Noto Sans JP', sans-serif",
	fontWeight: 600,
	fontSize: 16,
	lineHeight: "normal",
	color: "#59250a",
});

const CloseButton = styled("button")({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: 0,
	border: "none",
	backgroundColor: "transparent",
	cursor: "pointer",
	"&:hover": {
		opacity: 0.7,
	},
});

const CloseIcon = styled("img")({
	width: 24,
	height: 24,
});

const Body = styled("div")({
	marginTop: 16,
});
