import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import TextInput from "../TextInput";


function AppFormField({ name, width, height, ...otherProps }) {
	const {
		setFieldTouched,
		setFieldValue,
		errors,
		touched,
		values,
	} = useFormikContext();

	return (
		<>
			<TextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={(text) => setFieldValue(name, text)}
				value={values[name]}
				width={width}
				height={height}
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default AppFormField;
