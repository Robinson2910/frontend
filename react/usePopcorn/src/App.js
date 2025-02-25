import {
  useEffect,
  useRef,
  useState,
} from "react";
import StarRating from "./Starrating.js";
import { useMovies } from "./useMovies.js";
import { useLocalStorageState } from "./useLocalStorageState.js";
import { useKey } from "./useKey.js";

const average = (arr) =>
  arr?.reduce(
    (acc, cur, i, arr) => acc + cur / arr?.length,
    0
  );

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Search({ query, setQuery }) {
  // useEffect(function () {
  //   const el = document.querySelector(".search");
  //   console.log(el);
  //   el.focus();
  // }, []);

  //Step 1:create ref
  const inputEl = useRef(null);

  //Step 3:use effect

  // useEffect(
  //   function () {
  //     console.log(inputEl.current);

  //     function callback(e) {
  //       if (document.activeElement === inputEl.current) return;
  //       if (e.code === "Enter") {
  //         inputEl.current.focus();
  //         setQuery("");
  //       }
  //     }

  //     document.addEventListener("keydown", callback);

  //     return () => document.addEventListener("keydown", callback);
  //   },
  //   [setQuery]
  // );

  useKey("Enter", function () {
    if (
      document.activeElement === inputEl.current
    )
      return;
    inputEl?.current?.focus();
    setQuery("");
  });

  //Step 2:To select the element we want
  // use the ref prop and then we just pass in ref we created
  //now so these two are basically connected in a declarative way
  //so theres no need to manually select the query

  //basically we are telling that this input element here should be this input element ref we created

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      ref={inputEl}
      onChange={(e) => {
        console.log(e.target.value);
        setQuery(e.target.value);
      }}
    />
  );
}
function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}
function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong>{" "}
      results
    </p>
  );
}
function Main({ children }) {
  return <main className="main">{children}</main>;
}

// const tempQuery = "interstellar";
const KEY = "88a56d52";
export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] =
    useState(null);
  const { movies, isLoading, error } =
    useMovies(query);
  const [watched, setWatched] =
    useLocalStorageState([], "watched");
  //passing call back fn to useState hook
  //the callback will be call on the inital render of the component
  //we can intialize the state with whatever the call back fn returns
  // const [watched, setWatched] = useState(function () {
  //   const storedValue = localStorage.getItem("watched");
  //   return JSON.parse(storedValue);
  // });

  // useEffect(function () {
  //   fetch(`https://www.omdbapi.com/?s=Interstellar&apikey=${KEY}`)
  //     .then((response) => response.json())
  //     .then((data) => setMovies(data.Search));
  // }, []);

  //executed only during intilal mount
  // useEffect(function () {
  //   console.log("After initial render");
  // }, []);

  // //executed only when query state changes
  // useEffect(
  //   function () {
  //     console.log("After initial render");
  //   },
  //   [query]
  // );

  // //executed everytime when render happens as it is synchronissed with everything but this one happends before the useEffect hooks with dependencies //tmi
  // useEffect(function () {
  //   console.log("After every render");
  // });

  // console.log("During render"); //printed during render of the component

  //using async
  //fn inside useEffect hook cannot be directly passed in as async function instead a function can be synchronized with the useEffect fn
  //and in that fn we can call the async fn

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => {
      return id === selectedId ? null : id;
    });
  }

  function handleCloseMovie(id) {
    setSelectedId(null);
  }
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);

    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));//we can only store key value pairs in local storge
  }

  function handleDeleteWatched(id) {
    setWatched((watched) =>
      watched.filter(
        (movie) => movie.imdbID !== id
      )
    );
  }

  useEffect(
    function () {
      localStorage.setItem(
        "watched",
        JSON.stringify(watched)
      ); //we can only store key value pairs in local storge
    },
    [watched]
  );

  return (
    <>
      <NavBar>
        <Search
          query={query}
          setQuery={setQuery}
        />
        <NumResults movies={movies} />
      </NavBar>
      {/* before in prop drilling we had to pass it from main then to list box then to movieList,but now we can combine
      main->main->listbox ->movielist and pass it as props to the moveilist directly */}
      <Main>
        {/* Passing elements as propss (Alternative to children) */}
        {/* <Box element={<MovieList movies={movies} />} /> */}
        <Box>
          {/* {isLoading ? (
            <Loader message={error} />
          ) : (
            <MovieList movies={movies} />
          )} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              onSelectMovie={handleSelectMovie}
            />
          )}
          {error && (
            <ErrorMessage message={error} />
          )}
          {}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCLoseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={
                  handleDeleteWatched
                }
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
function Loader() {
  return <p className="loader">Loading...</p>;
}
function ErrorMessage({ message }) {
  return <p className="error">{message}</p>;
}
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );

  // const [watched, setWatched] = useState(tempWatchedData);
  // const [isOpen2, setIsOpen2] = useState(true);

  // return (
  //   <div className="box">
  //     <button
  //       className="btn-toggle"
  //       onClick={() => setIsOpen2((open) => !open)}
  //     >
  //       {isOpen2 ? "–" : "+"}
  //     </button>
  //     {isOpen2 && (
  //       <>
  //         <WatchedSummary watched={watched} />
  //         <WatchedMoviesList watched={watched} />
  //       </>
  //     )}
  //   </div>
  // );
}
// filter((movie) => {
//           if(watched.flat)
//         })
function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((mov) => (
        <Movie
          movie={mov}
          key={mov.imdbID}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}
function Movie({ movie, onSelectMovie }) {
  return (
    <li
      onClick={() => onSelectMovie(movie.imdbID)}
    >
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
      />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function MovieDetails({
  selectedId,
  onCLoseMovie,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] =
    useState(true);
  const [userRating, setUserRating] = useState(0);
  const countRef = useRef(0);
  //since we cant change the ref in render logic ,we  use a useEffect
  useEffect(
    function () {
      if (userRating)
        countRef.current = countRef.current + 1;
    },
    [userRating]
  );

  const isWatched = watched
    ?.map((movie) => movie.imdbID)
    .includes(selectedId);
  console.log(isWatched);
  const watchedUserRating = watched?.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Actors: actors,
    Director: director,
    Genre: genre,
    Released: released,
  } = movie;

  // if (imdbRating > 8) {
  //   [isTop, setIsTop] = useState(true);
  // }
  //fewer hooks were rendered error
  // if (imdbRating > 8) return <p>freatead sadasd asda</p>;

  // const [isTop, setIsTop] = useState(imdbRating > 8);

  const isTop = imdbRating > 8;
  console.log(isTop);

  function handleAdd() {
    const newWactchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: runtime.split(" ").at(0),
      userRating,
      countRatingDecisions: countRef.current,
    };
    onAddWatched(newWactchedMovie);
    onCLoseMovie();
    // setAvgRating(Number(imdbRating)); //state setting is asynchronous
    // setAvgRating((avgRating) => (avgRating + userRating) / 2);
    // alert(avgRating);
  }

  useKey("Escape", onCLoseMovie);
  // useEffect(
  //   function () {
  //     function callback(e) {
  //       e.preventDefault();
  //       if (e.code === "Escape") {
  //         onCLoseMovie();
  //         // console.log("Closing");
  //       }
  //     }
  //     document.addEventListener("keydown", callback);
  //     return function () {
  //       document.removeEventListener("keydown", callback);
  //     };
  //   },
  //   [onCLoseMovie]
  // );
  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const response = await fetch(
          `https://www.omdbapi.com/?i=${selectedId}&apikey=${KEY}`
        );
        const data = await response.json();
        // console.log(data);
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );
  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
        console.log(
          `cleanupEffect for movie ${title}`
        ); //run after the component has been unmounted cleanup fn has acces to title though closure,
        // i.e the cleanup fn will have access to its enclosing fn's variable even after the enclosinf function has finished executing
      };
    },
    [title]
  );
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button
              className="btn-back"
              onClick={onCLoseMovie}
            >
              &larr;
            </button>
            <img
              src={poster}
              alt={`Poster of ${movie} `}
            />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb rating
              </p>
              {/* <p>{avgRating}</p> */}
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button
                      className="btn-add"
                      onClick={handleAdd}
                    >
                      Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated the movie with{" "}
                  {watchedUserRating}{" "}
                  <span>⭐</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
// function WatchedBox() {}
function WatchedSummary({ watched }) {
  const avgImdbRating = average(
    watched?.map((movie) => movie.imdbRating)
  );
  const avgUserRating = average(
    watched?.map((movie) => movie.userRating)
  );
  const avgRuntime = average(
    watched?.map((movie) => movie.runtime)
  );
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched?.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating?.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating?.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}
function WatchedMoviesList({
  watched,
  onDeleteWatched,
}) {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}
function WatchedMovie({
  movie,
  onDeleteWatched,
}) {
  return (
    <li key={movie.imdbID}>
      <img
        src={movie.poster}
        alt={`${movie.title} poster`}
      />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() =>
            onDeleteWatched(movie.imdbID)
          }
        >
          X
        </button>
      </div>
    </li>
  );
}
