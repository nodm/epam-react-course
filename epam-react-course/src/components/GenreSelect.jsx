import * as React from 'react';

// eslint-disable-next-line react/prop-types
export default function GenreSelect({ genreList = [], initialGenre, onSelect }) {
  const [activeGenre, setActiveGenre] = React.useState(initialGenre);

  const handleGenreSelect = (selectedGenre) => {
    if (selectedGenre === activeGenre) {
      return;
    }

    setActiveGenre(selectedGenre);
    onSelect(selectedGenre);
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