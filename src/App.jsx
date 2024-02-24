import Counter from './components/Counter';
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        ReactJS Global Mentoring Program
      </h1>
      <main>
        <Counter initialValue={3} />
      </main>
    </>
  );
}

export default App;
