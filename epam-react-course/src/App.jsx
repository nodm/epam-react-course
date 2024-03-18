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
      </main>
    </>
  );
}

export default App;
