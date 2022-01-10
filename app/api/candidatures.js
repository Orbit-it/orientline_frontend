   import client from "./client";

const endpoint = "/candidatures";  


const getcandidatures = () => client.get(endpoint);


export const addcandidature = (prog, univ, name, mail, country) => {
	
	const data = {
		title: prog,
		institute: univ,
		user:name,
		email:mail,
		nationality:country,
	}

	return client.post(endpoint, data);
};



export default {
	addcandidature,
	getcandidatures,
}; 


