import { useAdvice } from "./hooks/useAdvice";
import LoadingSpinner from "./components/LoadingSpinner";
import AdviceCard from "./components/AdviceCard";

function App() {
  const { advice, loading, error, refetch } = useAdvice();

  return (
    <main className="min-h-svh px-4 flex items-center justify-center ">
      {loading && <LoadingSpinner />}
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
