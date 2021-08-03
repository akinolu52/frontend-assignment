import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import MovieList from './Movies/List';

const MOVIE_DB_API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;
const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
const api = axios.create({ baseURL: API_DOMAIN });

const App = () => {
	const [loading, setLoading] = useState(false);
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const [query, setQuery] = useState(null);
	const [queryTitle, setQueryTitle] = useState(null);

	useEffect(() => {
		getRecentMovies();
	}, []);

	const getRecentMovies = async () => {
		setLoading(true);
		const url = `/movie/popular?api_key=${MOVIE_DB_API_KEY}`;

		await api.get(url)
			.then((response) => setMovies(response?.data?.results))
			.catch(error => setError(error?.response?.status_message))
			.finally(() => setLoading(false));
	};

	const searchMovies = async () => {
		setLoading(true);
		const url = `/search/movie?api_key=${MOVIE_DB_API_KEY}&query=${query.replace(/\s+/g, "+")}`;

		await api.get(url)
			.then((response) => {
				setMovies(response?.data?.results);
				setQueryTitle(query)
			})
			.catch(error => setError(error?.response?.status_message))
			.finally(() => setLoading(false));
	}

	return (
		<>
			<Header
				query={query}
				setQuery={setQuery}
				searchMovies={searchMovies}
			/>
			<MovieList
				query={queryTitle}
				error={error}
				loading={loading}
				movies={movies}
			/>
		</>
	)
}

export default App;
