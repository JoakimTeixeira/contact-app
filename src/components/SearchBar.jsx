import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = ({ handleSearchSubmit, handleSearchBar, searchBar, searchQuery }) => (
  <Form inline className="search-bar">
    <Form.Control
      type="search"
      placeholder="Search"
      className="mr-sm-2 collapse"
      aria-label="Search"
      ref={searchBar}
      onChange={handleSearchBar}
      value={searchQuery}
    />
    <Button variant="outline-light" type="submit" onClick={handleSearchSubmit}>
      <i className="fas fa-search" />
    </Button>
  </Form>
);

export default SearchBar;

SearchBar.propTypes = {
  handleSearchSubmit: PropTypes.string.isRequired,
  handleSearchBar: PropTypes.string.isRequired,
  searchBar: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
