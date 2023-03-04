function ShowImage({ image }) {
	return (
		<>
			<div>
				<img src={image.urls.small} alt={image.alt_discription}></img>
			</div>
		</>
	);
}

export default ShowImage;
