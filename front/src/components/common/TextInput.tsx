import { Input } from "@mui/material";
import { styled } from "@mui/system";

type Props = {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	disabled?: boolean;
	className?: string;
};

const TextInput = ({
	value,
	onChange,
	placeholder = "",
	disabled = false,
	className,
}: Props) => {
	return (
		<Root className={className}>
			<StyledInput
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				disabled={disabled}
				disableUnderline
				fullWidth
			/>
		</Root>
	);
};

export default TextInput;

const Root = styled("div")({
	position: "relative",
	width: "100%",
	height: 48,
	borderRadius: 16,
	border: "2px solid #f87149",
	backgroundColor: "#eeeeee",
	overflow: "hidden",
	"&:focus-within": {
		backgroundColor: "#ffffff",
	},
});

const StyledInput = styled(Input)({
	width: "100%",
	height: "100%",
	padding: "0 16px",
	fontFamily: "'Noto Sans JP', sans-serif",
	fontWeight: 400,
	fontSize: 20,
	lineHeight: "normal",
	color: "#59250a",
	"& .MuiInput-input": {
		padding: 0,
		height: "100%",
		"&::placeholder": {
			color: "#dbc69e",
			opacity: 1,
		},
	},
	"&.Mui-disabled": {
		opacity: 0.5,
	},
});
