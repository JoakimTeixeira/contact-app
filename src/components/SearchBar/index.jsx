import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const SearchBar = ({
  handleSearchSubmit,
  handleSearchBar,
  searchBar,
  searchQuery,
}) => (
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
      <i className="fas fa-search" />
    </button>
  </form>
);

export default SearchBar;

SearchBar.propTypes = {
  handleSearchSubmit: PropTypes.string.isRequired,
  handleSearchBar: PropTypes.string.isRequired,
  searchBar: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
