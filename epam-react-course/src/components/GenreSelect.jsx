import * as React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function GenreSelect({ genreList = [], initialGenre, onSelect }) {
  const [activeGenre, setActiveGenre] = React.useState(initialGenre);

  const handleGenreSelect = (selectedGenre) => {
    if (selectedGenre === activeGenre) {
      return;
    }

    setActiveGenre(selectedGenre);
    onSelect?.(selectedGenre);
  };

  return (
    <div className="py-4 bg-slate-800">
      <ul className="bg-slate-800 border-b-2 border-slate-600">
        {genreList.map((genre) => (
          <li
            key={genre}
            className={`inline-block mx-4 ${genre === activeGenre ? 'border-b-2 border-red-400 mb-[-2px]' : ''}`}
          >
            <button
              className="py-3 text-white uppercase select-none"
              onClick={() => handleGenreSelect(genre)}
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

GenreSelect.propTypes = {
  /**
   * Optional array of available genres
   */
  genreList: PropTypes.arrayOf(PropTypes.string),
  /**
   * Optional initially selected genre (a value from the "genreList" array)
   */
  initialGenre: PropTypes.string,
  /**
   * Optional genre select handler
   */
  onSelect: PropTypes.func,
};

GenreSelect.defaultProps = {
  genreList: [],
  initialGenre: '',
  onSelect: undefined,
};