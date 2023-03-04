function ImageList({ images }) {
	// console.log(...images);
	return (
		<>
			{images.map((m, index) => {
				return <h1 key={index}>{m.id}</h1>;
			})}
		</>
	);
}

export default ImageList;
