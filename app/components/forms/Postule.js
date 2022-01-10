import React from "react";
import { Formik } from "formik";

function AppPostule({ onSubmit,validationSchema, children }) {
	return (
		<Formik
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{() => <>{children}</>}
		</Formik>
	);
}

export default AppPostule;
