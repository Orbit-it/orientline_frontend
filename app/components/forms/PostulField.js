import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import TextInput from "../TextInput";


function AppPostulField({ name, width, height, ...otherProps }) {
	const {
		values,
	} = useFormikContext();

	return (
		<>
			<TextInput
                name={name}
                value={values[name]}
				{...otherProps}
			/>
		</>
	);
}

export default AppPostulField;
