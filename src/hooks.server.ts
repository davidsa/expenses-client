import { redirect, type Handle } from '@sveltejs/kit';
import type { User } from '$lib/types';

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;

	if (pathname === '/') {
		return await resolve(event);
	}

	const res = await event.fetch('http://localhost:3000/api/user/me');
	const data: User = await res.json();

	if (data.id) {
		return await resolve(event);
	} else {
		throw redirect(302, '/');
	}
};
