import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

function useFetch<Type>(url: string, reverseData: boolean = false) {
	const [data, setData] = useState<Type[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		setLoading(true);
		axios
			.get(url)
			.then((response: AxiosResponse) => {
				if (reverseData) setData(response.data.reverse());
				else setData(response.data);
			})
			.catch((err: AxiosError) => setError(err.message))
			.finally(() => setLoading(false));
	}, [url]);

	const refetch = () => {
		setLoading(true);
		useEffect(() => {
			setLoading(true);
			axios
				.get(url)
				.then((response) => setData(response.data))
				.catch((err: AxiosError) => setError(err.message))
				.finally(() => setLoading(false));
		}, [url]);
	};

	return [data, loading, error, refetch];
}

export default useFetch;
