import * as React from 'react';
import PropTypes from 'prop-types';

const sortOptions = [
  'Release Date',
  'Title',
];

function SortControl({ selectedOption, onChange }) {
  const id = React.useId();
  const sortSelectId = `sort-option-${id}`;

  const handleSelectChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="inline-flex relative items-center">
      <label className="shrink-0 uppercase mr-4" htmlFor={sortSelectId}>Sort by</label>
      <select
        id={sortSelectId}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline uppercase"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {
          sortOptions.map((optionName) => (
            <option key={optionName} value={optionName}>
              {optionName}
            </option>
          ))
        }
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  );
}

SortControl.propTypes = {
  /**
   * Currently selected sort option from the list of available: "Release Date" or "Title"
   */
  selectedOption: PropTypes.oneOf(sortOptions),
  /**
   * Callback function that is called on sort change with the selected sort option
   */
  onChange: PropTypes.func,
};

SortControl.defaultProps = {
  selectedOption: sortOptions[0],
};

export default SortControl;