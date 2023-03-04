import axios from "axios";

const searchImages = async (term) => {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
		headers: {
			Authorization:
				"Client-ID ZHGNW0hDZVoOQb90cDpxdea0SzQAZnnItPE5nIW0sYk",
		},
		params: {
			query: term,
		},
	});
	return response.data.results;
};

export default searchImages;
