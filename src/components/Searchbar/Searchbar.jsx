import PropTypes from 'prop-types';
export const Searchbar = ({ handleSearchSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    handleSearchSubmit(evt?.target?.search?.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          required
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
};
