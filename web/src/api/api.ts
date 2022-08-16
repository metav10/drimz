import axios from 'axios';

const URL = 'http://localhost:8080'

export const getRequest = <T>(url: string) =>
	axios
		.get<T>(URL + url)
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.message);
			return undefined;
		});

export const putRequest = <T>(url: string, data: object) =>
	axios
		.put<T>(URL + url, data)
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.message);
			return undefined;
		});
