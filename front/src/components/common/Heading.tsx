import { styled } from "@mui/system";
import type { ReactNode } from "react";

type HeadingLevel = "h1" | "h2";

type Props = {
	level: HeadingLevel;
	children: ReactNode;
	className?: string;
};

const Heading = ({ level, children, className }: Props) => {
	return (
		<Root className={className}>
			<Inner>
				<Content>
					{level === "h1" ? (
						<StyledH1>{children}</StyledH1>
					) : (
						<StyledH2>{children}</StyledH2>
					)}
				</Content>
			</Inner>
		</Root>
	);
};

export default Heading;

const Root = styled("div")({
	position: "relative",
	flexShrink: 0,
	width: "100%",
});

const Inner = styled("div")({
	overflow: "clip",
	borderRadius: "inherit",
	width: "100%",
	height: "100%",
});

const Content = styled("div")({
	display: "flex",
	alignItems: "flex-start",
	padding: 32,
	position: "relative",
	width: "100%",
});

const baseHeadingStyles = {
	margin: 0,
	fontWeight: 700,
};

const StyledH1 = styled("h1")({
	...baseHeadingStyles,
	fontSize: "2rem",
});

const StyledH2 = styled("h2")({
	...baseHeadingStyles,
	fontSize: "1.5rem",
});
