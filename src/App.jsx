import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import "./App.css";

function App() {
  const handleSearch = (query) => {
    console.log(`Let's search for "${query}"`);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        ReactJS Global Mentoring Program
      </h1>
      <main>
        <Counter initialValue={3} />
        <SearchForm onSearch={handleSearch} initialQuery="React" />
      </main>
    </>
  );
}

export default App;
