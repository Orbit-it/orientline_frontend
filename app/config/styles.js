import { Platform } from "react-native";

import colors from "./colors";

export default {
	colors,
	text: {
		color: colors.dark,
		fontSize: 15,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
};
