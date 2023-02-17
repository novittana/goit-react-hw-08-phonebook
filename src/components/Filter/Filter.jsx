import PropTypes from 'prop-types';

export function Filter({ value, onFilterChange }) {
  return (
    <div style={{ margin: '20px 0', width: '500px' }}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilterChange:PropTypes.func
};
