import { getProducts } from '$lib/server/portaus';

export async function load() {
	return {
		products : await getProducts()
	};
}