import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

export const addListing = (listing, onUploadProgress) => {
	const data = new FormData();
  
	data.append("title", listing.title); 
	data.append("description", listing.description);
	data.append("institute", listing.institute );
	data.append("duration", listing.duration );
	data.append("price", listing.price);

	listing.images.forEach((image, index) => /* the same function to upload an image */
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
	addListing,
	getListings,
};
