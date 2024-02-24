import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';
import "./App.css";

const GENRE_LIST = ['all', 'documentary', 'comedy', 'horror', 'crime'];

function App() {
  const handleSearch = (query) => {
    console.log(`Let's search for "${query}"`);
  };
  const handleGenreSelect = (genre) => {
    console.log(`Selected genre "${genre}"`);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        ReactJS Global Mentoring Program
      </h1>
      <main>
        <Counter initialValue={3} />
        <SearchForm onSearch={handleSearch} initialQuery="React" />
        <GenreSelect
          genreList={GENRE_LIST}
          initialGenre={GENRE_LIST[3]}
          onSelect={handleGenreSelect}
        />
      </main>
    </>
  );
}

export default App;
