import axios from 'axios';

export const getRequest = <T>(url: string) =>
	axios
		.get<T>(url)
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.message);
			return undefined;
		});

export const putRequest = <T>(url: string, data: object) =>
	axios
		.put<T>(url, data)
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.message);
			return undefined;
		});
