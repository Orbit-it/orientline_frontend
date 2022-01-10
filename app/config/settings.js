import Constants from "expo-constants";

const settings = {
	// IPv4 Address (ipconfig):port //ec2-18-130-156-210.eu-west-2.compute.amazonaws.com
	dev: {
		apiUrl: "http:ec2-18-130-156-210.eu-west-2.compute.amazonaws.com:9000/api",
	},
	staging: {
		apiUrl: "http:ec2-18-130-156-210.eu-west-2.compute.amazonaws.com:9000/api",
	},
	prod: {
		apiUrl: "http:ec2-18-130-156-210.eu-west-2.compute.amazonaws.com:9000/api", 
	},
	
};

const getCurrentSettings = () => {
	if (__DEV__) return settings.dev;
	if (Constants.manifest.releaseChannel === "staging")
		return settings.staging;
	return settings.prod;
};

export default getCurrentSettings();
