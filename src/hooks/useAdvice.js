import { useState, useEffect, useCallback } from 'react';

const BASE_URL = "https://api.adviceslip.com/advice";

export function useAdvice() {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAdvice = useCallback(async () => {
    try {
      setAdvice(null);
      setLoading(true);
      setError("");
      // cache-busting query to ensure a fresh request, adressing Advice Slip API caching
      const response = await fetch(`${BASE_URL}?timestamp=${Date.now()}`);

      if (!response.ok) {
        throw new Error("Failed to fetch advice.")
      }

      const result = await response.json();
      setAdvice(result.slip);

    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }

  }, []);

  useEffect(() => {
    let cancelled = false;

    const loadData = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(`${BASE_URL}?timestamp=${Date.now()}`);
        if (!response.ok) {
          throw new Error("Failed to fetch advice.");
        }
        const result = await response.json();
        if (!cancelled) setAdvice(result.slip);
      } catch (error) {
        if (!cancelled) setError(error.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadData();

    return () => cancelled = true;
  }, []);

  return { advice, loading, error, refetch: fetchAdvice };
}
