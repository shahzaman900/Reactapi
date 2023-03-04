import "./imageList.css";
import ShowImage from "./showImage";
function ImageList({ images }) {
	// console.log(...images);
	const renderImages = images.map((m) => {
		return <ShowImage image={m} key={m.id} />;
	});
	return (
		<>
			<div className="image-List">{renderImages}</div>
		</>
	);
}

export default ImageList;
