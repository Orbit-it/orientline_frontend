import client from "./client";

const endpoint = "/listings_univ";

const getListing_univ = () => client.get(endpoint);

export const addListing_univ = (listing_univ, onUploadProgress) => {
	const data = new FormData();
  
	data.append("institute_name", listing_univ.institute); 
	data.append("label", listing_univ.label); 
	data.append("about", listing_univ.about);

    listing_univ.profile.forEach((profile, index) =>
		data.append("profile", {
			name: "image" + index,
			type: "image/jpeg",
			uri: profile,
		})
	);
    

	listing_univ.images.forEach((image, index) =>
		data.append("images", {
			name: "image" + index,
			type: "image/jpeg",
			uri: image,
		})
	);




	return client.post(endpoint, data, {
		onUploadProgress: (progress) =>
			onUploadProgress(progress.loaded / progress.total),
	});
};

export default {
	addListing_univ,
	getListing_univ,
};
