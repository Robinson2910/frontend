import { useState, useEffect } from "react";

const KEY = "88a56d52";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  // const [query, setQuery] = useState("");

  useEffect(() => {
    // callback?.();
    // Create the AbortController instance.
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setError("");
        setIsLoading(true);

        // Use the signal from the controller in the fetch request.
        const response = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Something went wrong with fetching movies");
        }

        const data = await response.json();

        if (data.Response === "False") {
          throw new Error("Movie not found");
        }

        // Check if the component is still mounted before setting state.
        if (!controller.signal.aborted) {
          setMovies(data.Search);
          setIsLoading(false);
        }
      } catch (err) {
        // Check if the component is still mounted before setting state.
        if (!controller.signal.aborted) {
          setError(err.message);
          setIsLoading(false);
        }
      }
    }

    if (query?.length < 3) {
      // Clear movies and error only if the component is still mounted.
      if (!controller.signal.aborted) {
        setMovies([]);
        setError("");
      }
      return;
    }
    //handleCloseMovie();
    fetchMovies();

    // Cleanup function: Abort the controller when the component unmounts or when 'query' changes.
    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
