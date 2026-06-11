import { useAdvice } from "./hooks/useAdvice";
import AdviceCard from "./components/AdviceCard";

// const BASE_URL = "https://api.adviceslip.com/advice";

function App() {
  const { advice, loading, error, refetch } = useAdvice();

  return (
    <main className="min-h-svh px-4 flex items-center justify-center ">
      {loading && <p>Loading...</p>}
      {error && (
        <p className="text-lg font-semibold text-red-400">
          An error has occurred: {error}
        </p>
      )}
      {advice && (
        <AdviceCard advice={advice} onFetchAdvice={refetch} />
      )}
    </main>
  );
}

export default App;
