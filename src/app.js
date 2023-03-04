import SearchBar from "./Components/searchBar";
import ImageList from "./Components/imageList";
import searchImages from "./api";
import { useState } from "react";
function App() {
	let [images, setImages] = useState([]);
	const handleSubmit = async (term) => {
		images = await searchImages(term);
		setImages(images);
	};
	return (
		<>
			<SearchBar onSubmit={handleSubmit} />
			<ImageList images={images} />
		</>
	);
}

export default App;
