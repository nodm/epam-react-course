// eslint-disable-next-line react/prop-types
export default function SearchForm({ onSearch, initialQuery = '' }) {
  const handleSearch = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const searchQuery = data.get('query');
    onSearch(searchQuery);
  };

  return (
    <div className="mx-auto max-w-lg my-8">
      <form className="flex flex-nowrap justify-between gap-2" onSubmit={handleSearch}>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-1"
          type="search"
          name="query"
          defaultValue={initialQuery}
          placeholder="What do you want to watch?"
        />
        <button className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-12 rounded uppercase">
          Search
        </button>
      </form>
    </div>
  );
}
