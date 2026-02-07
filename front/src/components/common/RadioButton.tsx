import { Radio } from "@mui/material";
import { styled } from "@mui/system";

type Props = {
	label: string;
	value: string;
	checked: boolean;
	onChange: (value: string) => void;
	className?: string;
};

const RadioButton = ({ label, value, checked, onChange, className }: Props) => {
	return (
		<Root className={className} onClick={() => onChange(value)}>
			<StyledRadio checked={checked} value={value} disableRipple />
			<Label>{label}</Label>
		</Root>
	);
};

export default RadioButton;

const Root = styled("label")({
	display: "flex",
	alignItems: "center",
	gap: 8,
	cursor: "pointer",
	overflow: "hidden",
});

const StyledRadio = styled(Radio)({
	padding: 0,
	width: 20,
	height: 20,
	"& .MuiSvgIcon-root": {
		width: 20,
		height: 20,
	},
	"&.Mui-checked": {
		color: "#f87149",
	},
	"&:not(.Mui-checked)": {
		color: "#59250a",
	},
});

const Label = styled("span")({
	fontFamily: "'Noto Sans JP', sans-serif",
	fontWeight: 600,
	fontSize: 20,
	lineHeight: "normal",
	color: "#59250a",
});
