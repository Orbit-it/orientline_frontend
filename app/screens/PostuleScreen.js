import React, { useState } from "react";
import { StyleSheet, Text, Alert} from "react-native";
import useAuth from "../auth/useAuth";
import * as Yup from "yup";
import {
	Form,  
    Postule,
	FormField,
	FormPicker,
	FormImagePicker,
	SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import candidaturesApi from "../api/candidatures";
import listings_univ from "../api/listings_univ";

import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
	title: Yup.string().required("Programme").label("Titre"),
	institute: Yup.string().required("Université").label("Institut"),
});

const PostuleScreen = () => {



    const { user, logOut } = useAuth();

    const [uploadVisible, setUploadVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleSubmit = async (candidature) => {
		setProgress(0);
		setUploadVisible(true);
		const result = await candidaturesApi.addcandidature(
			{ ...candidature},
			(progress) => setProgress(progress)
		);

        if (!result.ok) {
			setUploadVisible(false);
			return alert("Admission non Effectuée , veuillez contacter OrientLine pour plus d'infos !");
		}
        Alert.alert("Félicitation!", "Requête envoyée avec succès, nous vous notifierons de la suite de votre candidature dans les prochaines 48h sur votre adresse fournit lors de la création du compte.");
	};

	return (
		<Screen style={styles.container}>
			<UploadScreen
				onDone={() => setUploadVisible(false)}
				progress={progress}
				visible={uploadVisible}
			/>
			<Form
			initialValues={{
				title: "",
				institute: "",
			}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>	
            <FormField
					name="title"
					placeholder="Programme"
					multiline={true}
				/>
				<FormField
					name="institute"
					placeholder="University"
					secureTextEntry={false}
					multiline={false}
				/>
				<SubmitButton style={styles.button} title="Confirmer" />

			</Form>
		</Screen>
	);
}


export default PostuleScreen;	

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	button:{
		marginTop:50
	},
    text_btn: {
        fontSize: 18,
        color:'grey',
        fontWeight:'bold',
        textAlign:'center',
        marginTop:50
      },
	  text_info: {
        fontSize: 14,
        color:'grey',
        fontWeight:'bold',
        textAlign:'center',
      },
});

