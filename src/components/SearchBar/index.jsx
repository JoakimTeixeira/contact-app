import React from 'react'
import './styles.css'

const SearchBar = ({
	handleSearchSubmit,
	handleSearchBar,
	searchBar,
	searchQuery,
}) => {
	return (
		<form className="search-bar form-inline">
			<input
				className="form-control mr-sm-2 collapse"
				type="search"
				placeholder="Search"
				aria-label="Search"
				ref={searchBar}
				onChange={handleSearchBar}
				value={searchQuery}
			/>
			<button
				className="btn btn-outline-light"
				type="submit"
				onClick={handleSearchSubmit}
			>
				<i class="fas fa-search"></i>
			</button>
		</form>
	)
}

export default SearchBar
