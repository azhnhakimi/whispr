import AsyncStorage from "@react-native-async-storage/async-storage";

export const getNewFormattedDate = () => {
	const today = new Date();
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return today.toLocaleDateString("en-GB", options);
};

export const fetchData = async () => {
	try {
		// await AsyncStorage.removeItem("whisprData");
		const fetchedDataJSON = await AsyncStorage.getItem("whisprData");
		const parsedData =
			fetchedDataJSON != null ? JSON.parse(fetchedDataJSON) : null;
		console.log(parsedData);
		return parsedData;
	} catch (e) {
		console.log(e);
	}
};
