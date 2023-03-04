import ShowImage from "./showImage";
function ImageList({ images }) {
	// console.log(...images);
	console.log(...images);
	return (
		<>
			{images.map((m, index) => {
				return <ShowImage image={m} key={index} />;
			})}
		</>
	);
}

export default ImageList;
