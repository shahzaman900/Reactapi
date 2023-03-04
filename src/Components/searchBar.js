import { useState } from "react";
function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState("");

	const handleClick = (event) => {
		event.preventDefault();
		onSubmit(term);
	};

	const handleChange = (event) => {
		setTerm(event.target.value);
	};

	return (
		<>
			<form onSubmit={handleClick}>
				<input value={term} onChange={handleChange}></input>
			</form>
		</>
	);
}

export default SearchBar;
