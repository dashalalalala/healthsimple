import { extendTheme } from "@chakra-ui/react";
import "./partials/_variables.scss";

const theme = extendTheme({
	fonts: {
		body: "Outfit Regular",
		heading: "ReemKufi Medium",
	},
	colors: {},
	breakpoints: {
		base: "0px",
		md: "767px",
		lg: "1280px",
	},
});

export default theme;
