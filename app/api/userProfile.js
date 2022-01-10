import client from './client'

const endpoint = '/userProfiles';

const getUserProfile = () => client.get(endpoint);

export const addUserProfile = (userProfile, onUploadProgress) => {
	const data = new FormData();

	userProfile.images.forEach((image, index) => /* function to upload an image for the profile */
		data.append("images", {
			name: "image" + index,
			type: "image/jpeg",
			uri: image,
		})
	);

    if (userProfile.location)
		data.append("location", JSON.stringify(userProfile.location));

	return client.post(endpoint, data, {
		onUploadProgress: (progress) =>
			onUploadProgress(progress.loaded / progress.total),
	});
};

export default {
	addUserProfile,
	getUserProfile,
};