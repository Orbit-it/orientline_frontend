import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import {
	Form,
	FormField,
	FormPicker,
	FormImagePicker,
	SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import listingsApi from "../api/listings";
import listings_univ from "../api/listings_univ";

import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
	title: Yup.string().required("Veuillez entrer le nom du Programme").min(1).label("Titre"),
	institute: Yup.string().required("Veuillez selectionner l'Institut correspondant").label("Institut"),
	//institute: Yup.string().required("Veuillez selectionner l'institut correspondant"),
	description: Yup.string().required("Veuillez entrer une description du programme"),
	duration:Yup.string().required("Veuillez entrer la durée de la formation"),
	price:Yup.string().required("Veuillez entrer le prix de la formation"),
	images: Yup.array().min(1).required("Selectionner au moins une image"),	
});


function ListingEditScreen() {
	const [uploadVisible, setUploadVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleSubmit = async (listing, { resetForm }) => {
		setProgress(0);
		setUploadVisible(true);
		const result = await listingsApi.addListing(
			{ ...listing},
			(progress) => setProgress(progress)
		);

		if (!result.ok) {
			setUploadVisible(false);
			return alert("Impossible de poster ce Programme, veuillez reessayer !");
		}

		resetForm();
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
					description: "",
					images: [],
					price: "",
					duration: "",
				}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<FormImagePicker name="images" />

				<FormField maxLength={255} name="institute" placeholder="Institut" secureTextEntry={false}/>

				<FormField maxLength={255} name="title" placeholder="Programme" secureTextEntry={false}/>

			
				<FormField
					name="description"
					placeholder="Description"
					multiline={true}
					secureTextEntry={false}
					
				/>
				<FormField
					name="duration"
					placeholder="Durée de la formation"
					secureTextEntry={false}
					multiline={false}
				/>
				<FormField
					name="price"
					placeholder="Modalité de paiement"
					multiline={false}
					secureTextEntry={false}
				/>

				<SubmitButton style={styles.button} title="Publier" />
			</Form>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	button:{
		marginTop:50
	}
});

export default ListingEditScreen;
